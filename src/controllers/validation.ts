import { checkSchema, validationResult } from "express-validator/check";

const validator = ( schema ) => {
  return [
    checkSchema(schema), (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        next ({ error : {
          error: "Validator",
          message: "Enter valid details",
          status: 403
        }});
      }
      next();
    }
  ];
};

export default validator;
