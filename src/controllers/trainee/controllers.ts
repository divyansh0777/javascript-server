class controller {
  public getRequest(request, response) {
    response.send("This is a Get request inside from trainee Controller")
  }

  public putRequest(request, response){
    response.send("This is a PUT request");
  }

  public deleteRequest(request, response){
    response.send("This is a DELETE request");
  }
}
 export default new controller()
