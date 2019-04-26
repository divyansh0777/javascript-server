
export default (req, res, next) => {
  next(res.status(404));
  return next;
}
