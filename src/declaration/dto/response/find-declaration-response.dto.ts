import { ApiProperty } from '@nestjs/swagger';

export class FindDeclarationResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  year: string;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  submitted: boolean;

  @ApiProperty()
  declarationData: object;
}
