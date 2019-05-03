
export default (req, res, next) => {
  next({ error : {
    error: 'Page you are requesting is not found in server (Route middleware)',
    message: 'Route is not valid',
    status: 404
  }})
}
