import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Declaration } from './entities/declaration.entity';
import { CreateDeclarationRequestDto } from './dto/request/create-declaration-request.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { FindDeclarationsResponseDto } from './dto/response/find-declarations-response.dto';
import { plainToInstance } from 'class-transformer';
import { DeclarationToFindDeclarationsDto } from './dto/response/declaration-to-find-declarations-response.dto';
import { FindDeclarationResponseDto } from './dto/response/find-declaration-response.dto';
import { CreateDeclarationResponseDto } from './dto/response/create-declaration-response.dto';
import { ERROR_MESSAGES } from '../constants/error.constants';
import { UpdateDeclarationRequestDto } from './dto/request/update-declaration-request.dto';

@Injectable()
export class DeclarationService {
  constructor(
    @InjectRepository(Declaration)
    private readonly declarationRepository: Repository<Declaration>,
    private readonly userService: UserService,
  ) {}

  async createDeclaration(dto: CreateDeclarationRequestDto, userId: string) {
    const user: User = await this.userService.findById(userId);

    if (!user) {
      throw new NotFoundException(ERROR_MESSAGES.USER_NOT_FOUND);
    }

    const declarationExistent: Declaration =
      await this.declarationRepository.findOneBy({
        year: dto.year,
      });

    if (declarationExistent) {
      throw new ConflictException(
        ERROR_MESSAGES.YEAR_DECLARATION_CONFLICT(dto.year),
      );
    }

    const createdDeclaration: Declaration =
      await this.declarationRepository.save({
        ...dto,
        user,
      });

    return plainToInstance(CreateDeclarationResponseDto, createdDeclaration);
  }

  async findDeclarationsMade(
    userId: string,
  ): Promise<FindDeclarationsResponseDto> {
    const user: User = await this.userService.findById(userId);
    const declaration: Declaration[] = await this.declarationRepository.find({
      where: {
        user,
      },
      order: { year: 'DESC' },
    });

    const declarationsMade: DeclarationToFindDeclarationsDto[] =
      declaration.map((declaration) => {
        return {
          year: declaration.year,
          createdDate: declaration.createdDate,
          submitted: declaration.submitted,
        };
      });

    return { Declarations: declarationsMade };
  }

  async findDeclaration(userId: string, year: string) {
    const declaration = await this.findDeclarationByUserAndYear(userId, year);
    return plainToInstance(FindDeclarationResponseDto, declaration);
  }

  async submitDeclaration(userId: string, year: string) {
    const declaration = await this.findDeclarationByUserAndYear(userId, year);

    declaration.submitted = true;
    await this.declarationRepository.save(declaration);
  }

  async updateDeclaration(userId: string, dto: UpdateDeclarationRequestDto) {
    const declaration = await this.findDeclarationByUserAndYear(
      userId,
      dto.year,
    );

    declaration.declarationData = dto.declarationData;
    await this.declarationRepository.save(declaration);
  }

  private async findDeclarationByUserAndYear(userId: string, year: string) {
    const user: User = await this.userService.findById(userId);
    const declaration: Declaration = await this.declarationRepository.findOneBy(
      {
        user,
        year,
      },
    );

    if (!user) {
      throw new NotFoundException(ERROR_MESSAGES.USER_NOT_FOUND);
    }

    if (!declaration) {
      throw new NotFoundException(ERROR_MESSAGES.DECLARATION_NOT_FOUND);
    }

    return declaration;
  }
}
