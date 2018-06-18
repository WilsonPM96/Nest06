import { Get, Controller, UseGuards, ReflectMetadata, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtGuard } from './Guard/jwt.guard';

@Controller()
@UseGuards(JwtGuard)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ReflectMetadata('NecesitaProteccion', false)
  root(
    @Req() req,
    @Res() res,
  ){
    res.set('x-frame-options', 'SAMEORIGIN');
    return res.send('Hello World!');

  }

  @Get('Hola')
  @ReflectMetadata('NecesitaProteccion', true)
  hola(): string {
    return 'Hola amigos';
  }
}
