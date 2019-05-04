
export default (req, res, next) => {
  res.status(404).json('Page you are requesting is not found in server (Route middleware)');
}
