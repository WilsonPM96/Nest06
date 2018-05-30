import * as Joi from 'joi';

export const ReservasEsquema = Joi
  .object()
  .keys({
    fecha_ini: Joi
      .string()
      .alphanum()
      .min(6)
      .max(10)
      .required(),
    fecha_fin: Joi
      .string()
      .alphanum()
      .min(6)
      .max(10)
      .required(),
  });