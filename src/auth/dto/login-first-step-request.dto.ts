import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class LoginFirstStepRequestDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo password não pode ser vazio' })
  password: string;
}
