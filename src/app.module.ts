import { Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioController } from './usuario.controller';
import { ParametrosController } from './parametros.controller';
import { UsuarioService } from './usuario.service';
import { MiddlewaresConsumer } from '@nestjs/common/interfaces/middlewares';
import { LogMiddleware } from './log.middleware';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioEntity } from './Usuario/usuario.entity';
import { ReservasEntity } from './Reservas/reservas.entity';
import { DetallereservaEntity } from './Detalle_Reserva/detalle_reserva.entity';
import { LugaresEntity } from './Lugares/lugares.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'Wilson',
      password: 'whosyourdaddy1',
      database: 'Proyecto_Web',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    }),
    TypeOrmModule.forFeature([UsuarioEntity, ReservasEntity, DetallereservaEntity, LugaresEntity]),
  ],
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
  }
}
