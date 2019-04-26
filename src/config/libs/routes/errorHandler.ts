const details = {
  error: "Not Found",
  message: "error",
  status: 500,
  timestamp: "2019-01-08T17:38:21.929Z"
}

export default (err, req, res, next) => {
  res.send(details).json('This is an error middleware');
}
