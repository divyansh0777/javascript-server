
export default (error, request, response, next) => {
  const customError = {
      error: error.error,
      message: error.message,
      status: error.status,
      timestamp: new Date()
    }

  response.json(customError);
}
