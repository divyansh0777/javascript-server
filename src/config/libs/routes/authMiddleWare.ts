import * as jwt from "jsonwebtoken";
import { configuration } from "../../../config/configuration";
import { hasPermission } from "../../../utils";

export const authMiddleWare = (moduleName, permissionType) => (request, response, next) => {
  const token = request.header("authorization");
  // if(token.startsWith("Bearer")){
  //   token = token.slice(7, token.length);
  // }

  if (token) {
// tslint:disable-next-line: no-shadowed-variable
    jwt.verify(token, configuration.tokenKey, (err, request) => {
      if (err) {
        next({ error : {
          error: "Token Not Found",
          message: "Token Not verified",
          status: 403
        }});
      } else {
        if (hasPermission(moduleName, request.role, permissionType)) {
          response.send("User Authenticated");
        } else {
          next({ error : {
            error: "Permission Denied",
            message: "Role is not authenticated"
          }});
        }
      }
    });
  } else {
    next({error: {
      message: "You have entered wrong token or you left field"
    }});
  }
};

// Token
/*eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdWNjZXNzaXZlIFRlY2hub2xvZ2llcyIsImlhd
CI6MTU0ODY5MDQzNywiZXhwIjoxNTgwMjI2NDM3LCJhdWQiOiJ3d3cuc3VjY2Vzc2l2ZS5pbiIsInN1YiI6IkxlY
XJuIGFuZCBJbXBsZW1lbnQiLCJuYW1lIjoiVHJhaW5lZSIsImVtYWlsIjoidHJhaW5lZUBzdWNjZXNzaXZlLnRlY2
giLCJyb2xlIjoidHJhaW5lZSJ9.kCa388UevNwb9toIJZtms54F5avHKxyrcagWkTU70sc*/
