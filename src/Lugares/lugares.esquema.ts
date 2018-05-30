import * as Joi from 'joi';

export const LugaresEsquema = Joi
  .object()
  .keys({
    tipo_lugar: Joi
      .string()
      .alphanum()
      .min(3)
      .max(50)
      .required(),
    ubicacion_lugar: Joi
      .string()
      .alphanum()
      .min(3)
      .max(30)
      .required(),
    horario_lugar: Joi
      .string()
      .alphanum()
      .min(3)
      .max(3),
  });