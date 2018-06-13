import { Get, Controller, UseGuards, ReflectMetadata } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtGuard } from './Guard/jwt.guard';

@Controller()
@UseGuards(JwtGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ReflectMetadata('NecesitaProteccion', false)
  root(): string {
    return this.appService.root();
  }

  @Get('Hola')
  @ReflectMetadata('NecesitaProteccion', true)
  hola(): string {
    return 'Hola amigos';
  }
}
