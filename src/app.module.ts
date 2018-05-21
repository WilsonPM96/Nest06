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
import { FotoEntity } from './Fotos/foto.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({type: 'mysql',
      host: 'web2018agr2.mysql.database.azure.com',
      port: 3306,
      username: 'profesor@web2018agr2',
      password: 'Javascript1',
      database: 'web',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
    }),
    TypeOrmModule.forFeature([UsuarioEntity, FotoEntity]),
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
    //.apply(OtroMiddleware)
    //.forRoutes(Otras rutas);
  }
}
