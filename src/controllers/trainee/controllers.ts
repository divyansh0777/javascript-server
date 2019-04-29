class controller {
  static getRequest(request, response) {
    response.send("This is a Get request inside from trainee Controller")
  }

  static putRequest(request, response){
    response.send("This is a PUT request");
  }

  static deleteRequest(request, response){
    response.send("This is a DELETE request");
  }
}
 export default controller
