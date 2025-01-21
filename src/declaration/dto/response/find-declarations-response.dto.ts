import { ApiProperty } from '@nestjs/swagger';
import { DeclarationToFindDeclarationsDto } from './declaration-to-find-declarations-response.dto';

export class FindDeclarationsResponseDto {
  @ApiProperty()
  Declarations: DeclarationToFindDeclarationsDto[];
}
