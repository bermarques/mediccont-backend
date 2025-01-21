import { Controller, Get } from '@nestjs/common';

@Controller('api/app')
export class AppController {
  @Get('health')
  healthCheck() {
    return { status: 'OK' };
  }
}
