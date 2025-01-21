import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginFirstStepRequestDto } from './dto/login-first-step-request.dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterRequestDto } from './dto/register-request.dto';
import { EmailService } from '../email/email.service';
import { JwtTokenResponseDto } from './dto/jwt-token-response.dto';
import { LoginLastStepRequestDto } from './dto/login-last-step-request.dto';
import { capitalizeWords } from '../utils/stringUtils';
import { EMAIL_CONSTANTS } from '../constants/email.constants';
import { ERROR_MESSAGES } from '../constants/error.constants';
import { Declaration } from '../declaration/entities/declaration.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Declaration)
    private readonly declarationRepository: Repository<Declaration>,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
  ) {}

  async registerUser(dto: RegisterRequestDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new BadRequestException(
        ERROR_MESSAGES.USER_FOR_EMAIL_ALREADY_CREATED,
      );
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(dto.password, saltRounds);

    const createdUser: User = await this.userRepository.save({
      ...dto,
      password: hashedPassword,
    });

    // Adiciona 5 declaracoes para o usuario para facilitar demonstracao da tela no front end:
    const currentYear = new Date().getFullYear();

    const declarations = Array.from({ length: 5 }).map((_, index) => ({
      user: createdUser,
      year: (currentYear - index).toString(),
      declarationData: {},
    }));

    await this.declarationRepository.save(declarations);

    return { id: createdUser.id };
  }

  async loginFirstStep(dto: LoginFirstStepRequestDto) {
    let user = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_CREDENTIALS);
    }

    const isPasswordValid = await bcrypt.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_CREDENTIALS);
    }

    user.twoFactorCode = this.generateTwoFactorCode();
    user.twoFactorCodeExpiresAt = this.generateTwoFactorExpiresAtDate();
    user = await this.userRepository.save(user);

    try {
      await this.emailService.sendEmail(
        user.email,
        EMAIL_CONSTANTS.TWO_FACTOR_EMAIL_SUBJECT,
        EMAIL_CONSTANTS.TWO_FACTOR_EMAIL_TEMPLATE,
        {
          name: capitalizeWords(user.name),
          code: user.twoFactorCode,
        },
      );
    } catch {
      throw new UnauthorizedException(ERROR_MESSAGES.EMAIL_SEND_FAILURE);
    }
  }

  async loginLastStep(
    dto: LoginLastStepRequestDto,
  ): Promise<JwtTokenResponseDto> {
    const user = await this.userRepository.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_CREDENTIALS);
    }

    if (user.twoFactorCode !== dto.twoFactorCode) {
      throw new UnauthorizedException(ERROR_MESSAGES.INVALID_2FA_CODE);
    }

    const now = new Date();
    if (!user.twoFactorCodeExpiresAt || now > user.twoFactorCodeExpiresAt) {
      throw new UnauthorizedException(ERROR_MESSAGES.EXPIRED_2FA_CODE);
    }

    const payload = { sub: user.id, email: user.email };
    const token = this.jwtService.sign(payload);
    return { accessToken: token };
  }

  private generateTwoFactorCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  private generateTwoFactorExpiresAtDate() {
    const now = new Date();
    now.setMinutes(now.getMinutes() + 5);
    return now;
  }
}
