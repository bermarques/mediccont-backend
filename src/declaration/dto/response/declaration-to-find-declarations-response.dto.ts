import { ApiProperty } from '@nestjs/swagger';

export class DeclarationToFindDeclarationsDto {
  @ApiProperty()
  year: string;

  @ApiProperty()
  createdDate: Date;

  @ApiProperty()
  submitted: boolean;
}
