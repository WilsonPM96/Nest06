import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';
import { PeticionErroneaException } from '../exceptions/peticion-erronea.exception';
@Injectable()
export class UsuarioPipe implements PipeTransform{
  constructor(private readonly _schema){

  }
  transform(jsonAValidar: any, metadata: ArgumentMetadata){
    const {
      error,
    } = Joi.validate(jsonAValidar, this._schema);
    if (error){
      //botar un error
      throw new PeticionErroneaException(
        {
        erorr: error,
        mensaje: 'Json no valido',
      }, 10);
    }else {
      //nada
      return jsonAValidar;
    }
  }
}