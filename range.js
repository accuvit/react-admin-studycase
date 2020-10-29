module.exports = (req, res, next) => {
  res.header('Content-range', 'pratos 0-20/20')
  next()
}