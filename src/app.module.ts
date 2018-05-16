import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario.controller';
import { ParametrosController } from './parametros.controller';
import { UsuarioService } from './usuario.service';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { LogMiddleware } from './log.middleware';

@Module({
  imports: [],
  controllers: [AppController,
  UsuarioController,
  ParametrosController],
  providers: [AppService, UsuarioService],
})
export class AppModule implements NestModule {
  nombreAplicacion = 'Deber Wilson Ramos EPN';

  configure(consumer: MiddlewaresConsumer)
    : void {
    consumer
      .apply(LogMiddleware)
      .with(this.nombreAplicacion, 1989)
      .forRoutes(
        UsuarioController,
        AppController,
        ParametrosController,
      );
    //.apply(OtroMiddleware)
    //.forRoutes(Otras rutas);
  }
}
