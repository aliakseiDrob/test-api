import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class TestController {
  @Get()
  checkHealth(): { status: string; timestamp: string } {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
