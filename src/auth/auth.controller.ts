import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { RegisterRequestDto } from './dto/register-request.dto';
import { AuthService } from './auth.service';
import { LoginFirstStepRequestDto } from './dto/login-first-step-request.dto';
import { LoginLastStepRequestDto } from './dto/login-last-step-request.dto';

@Controller('api/auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @Post('register')
  signIn(@Body() dto: RegisterRequestDto) {
    return this.service.registerUser(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login/first-step')
  logInFirstStep(@Body() dto: LoginFirstStepRequestDto) {
    return this.service.loginFirstStep(dto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login/last-step')
  logInLastStep(@Body() dto: LoginLastStepRequestDto) {
    return this.service.loginLastStep(dto);
  }
}
