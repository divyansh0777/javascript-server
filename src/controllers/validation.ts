import { validationResult, checkSchema } from "express-validator/check";
import  Schema  from '../controllers/schema'

export const postValidation = (request, response, next) => {
  checkSchema(Schema.post as any );

  const errors = validationResult(request);

  if (!errors.isEmpty()) {
    next({errors: errors.array()});
    }

  next();
}
