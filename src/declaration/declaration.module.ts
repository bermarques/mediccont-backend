import { Module } from '@nestjs/common';
import { DeclarationService } from './declaration.service';
import { DeclarationController } from './declaration.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Declaration } from './entities/declaration.entity';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';

@Module({
  controllers: [DeclarationController],
  providers: [DeclarationService, UserService],
  imports: [
    TypeOrmModule.forFeature([Declaration]),
    TypeOrmModule.forFeature([User]),
  ],
  exports: [TypeOrmModule],
})
export class DeclarationModule {}
