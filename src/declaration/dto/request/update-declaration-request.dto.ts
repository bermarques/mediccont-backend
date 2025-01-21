import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString } from 'class-validator';

export class UpdateDeclarationRequestDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'O campo ano não pode ser vazio' })
  @IsNumberString({}, { message: 'O campo ano precisa ser um numero válido' })
  year: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'O campo dadosDeclaracao não pode ser vazio' })
  declarationData: object;
}
