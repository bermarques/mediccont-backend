import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class RegisterRequestDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  name: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @IsEmail({}, { message: 'O e-mail fornecido não é válido.' })
  email: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo password não pode ser vazio' })
  password: string;
}
