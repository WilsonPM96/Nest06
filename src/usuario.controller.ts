import { Body, Controller, Get, Guard, HttpCode, Post, ReflectMetadata, Req, Res, UseGuards } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioPipe } from './Pipes/usuario.pipe';
import { UsuarioEsquema } from './Usuario/usuario.esquema';
import { CrearUsuarioGuard } from './Guard/crear-usuario.guard';

// decorator
@Controller('Usuario')

@UseGuards(CrearUsuarioGuard)

export class UsuarioController {
    usuario = {
        nombre: 'Wilson',
        apellido: 'Ramos',
        edad: 21,
    };

    usuarios = [];

    constructor(private _usuarioService: UsuarioService){

    }

    @HttpCode(202)
    @Get('mostrar')
    @ReflectMetadata('permisos', ['publico'])
    mostrarUsuario(@Res() response) {
        const usuarios = this._usuarioService.mostrarUsuarios();
        return response.send(usuarios);
    }

    @Get('mostrarExpress')
    mostrarUsuarioExpress(
        @Req() request,
        @Res() response,
    ) {
        return response
            .status(200)
            .send(this.usuarios);
    }

  @Post('crearUsuario')
  @ReflectMetadata('permisos', ['privado'])
  crearUsuario(
    @Body(new UsuarioPipe(UsuarioEsquema))
      nuevoUsuario,
  ) {

    const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);

    return nuevoUsuario;
    }
}