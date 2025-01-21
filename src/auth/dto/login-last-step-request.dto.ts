import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginLastStepRequestDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo twoFactorCode não pode ser vazio' })
  twoFactorCode: string;
}
