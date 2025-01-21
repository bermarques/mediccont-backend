import { ApiProperty } from '@nestjs/swagger';

export class JwtTokenResponseDto {
  @ApiProperty()
  accessToken: string;
}
