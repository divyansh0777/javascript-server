import { validationResult, checkSchema } from "express-validator/check";


const validator = ( schema ) => {
  return [
    checkSchema(schema), (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        next({error: errors.array()})
      }
       next();
    }
  ]
}

export default validator;
