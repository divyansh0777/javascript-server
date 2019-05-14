export default (err, req, res, next) => {
  const errorDetails = {
    error: err.error,
    message: "This is an error middleware",
    status: err.status,
    timestamp: new Date()
  };
  res.json(errorDetails);
};
