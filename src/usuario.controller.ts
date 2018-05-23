import { Body, Controller, Get, HttpCode, Post, Req, Res } from '@nestjs/common';
import Status = jest.Status;
import { UsuarioService } from './usuario.service';
import { UsuarioPipe } from './Pipes/usuario.pipe';
import { UsuarioEsquema } from './Usuario/usuario.esquema';

// decorator
@Controller('Usuario')
export class UsuarioController {
    usuario = {
        nombre: 'Wilson',
        apellido: 'Ramos',
        edad: 21
    };

    usuarios = [];

    constructor(private _usuarioService:UsuarioService){

    }

    @HttpCode(202)
    @Get('mostrar')
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
  crearUsuario(
    @Body(new UsuarioPipe(UsuarioEsquema))
      nuevoUsuario
  ) {

    const usuarioCreado = this._usuarioService.crearUsuario(nuevoUsuario);

    return nuevoUsuario;
    }
}