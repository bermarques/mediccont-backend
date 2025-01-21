import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { DeclarationService } from './declaration.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtPayload } from '../auth/dto/JwtPayload';
import { CreateDeclarationRequestDto } from './dto/request/create-declaration-request.dto';
import { ApiBearerAuth, ApiSecurity } from '@nestjs/swagger';
import { UpdateDeclarationRequestDto } from './dto/request/update-declaration-request.dto';

@ApiSecurity('bearer')
@ApiBearerAuth('access-token')
@Controller('api/declarations')
export class DeclarationController {
  constructor(private readonly declarationService: DeclarationService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  createDeclaration(
    @Request() req: { user: JwtPayload },
    @Body() dto: CreateDeclarationRequestDto,
  ) {
    return this.declarationService.createDeclaration(dto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findDeclarationsMade(@Request() req: { user: JwtPayload }) {
    return this.declarationService.findDeclarationsMade(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':year')
  findDeclaration(
    @Request() req: { user: JwtPayload },
    @Param('year') ano: string,
  ) {
    return this.declarationService.findDeclaration(req.user.userId, ano);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':declarationId/submit')
  submitDeclaration(
    @Request() req: { user: JwtPayload },
    @Param('declarationId') ano: string,
  ) {
    this.declarationService.submitDeclaration(req.user.userId, ano);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':declarationId/')
  updateDeclaration(
    @Request() req: { user: JwtPayload },
    @Body() dto: UpdateDeclarationRequestDto,
  ) {
    this.declarationService.updateDeclaration(req.user.userId, dto);
  }
}
