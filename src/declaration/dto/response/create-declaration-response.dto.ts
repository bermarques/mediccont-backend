import { ApiProperty } from '@nestjs/swagger';

export class CreateDeclarationResponseDto {
  @ApiProperty()
  id: string;
}
