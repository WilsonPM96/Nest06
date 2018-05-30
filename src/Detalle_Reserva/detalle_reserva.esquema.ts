import * as Joi from 'joi';

export const DetalleReservaEsquema = Joi
  .object()
  .keys({
    estado: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30),
    fecha: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    hora: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
  });