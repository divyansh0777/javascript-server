import { hasPermission } from '../../../utils'
import * as jwt from 'jsonwebtoken'
import { configure } from '../../../config/configuration'

export default (moduleName: string, permissionType: string) => (request, response, next) => {

  let token = request.header("Authorization");
  // if(token.startsWith("Bearer")){
  //   token = token.slice(7, token.length);
  // }

  if(token){
  jwt.verify(token, configure.token_Key, (err, request) => {

    if(err) {
      next({ error : {
        error: 'Token Not Found',
        message: 'Enter valid token',
        status: 403
      }});
    }
    else {
      if(hasPermission(moduleName, request.role, permissionType)) {
        response.send("User Authenticated");
      }
      else {
        response.status(403).json("User not Authenticate successfully");
      }
    }
  })
  }
  else {
    response.send("Token not verified");
  }
}


//Token
/*eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTdWNjZXNzaXZlIFRlY2hub2xvZ2llcyIsImlhd
CI6MTU0ODY5MDQzNywiZXhwIjoxNTgwMjI2NDM3LCJhdWQiOiJ3d3cuc3VjY2Vzc2l2ZS5pbiIsInN1YiI6IkxlY
XJuIGFuZCBJbXBsZW1lbnQiLCJuYW1lIjoiVHJhaW5lZSIsImVtYWlsIjoidHJhaW5lZUBzdWNjZXNzaXZlLnRlY2
giLCJyb2xlIjoidHJhaW5lZSJ9.kCa388UevNwb9toIJZtms54F5avHKxyrcagWkTU70sc*/


