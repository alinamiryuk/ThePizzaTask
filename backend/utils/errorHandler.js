export default (error, res) => {
  res.status(500).json({
    success: false,
    message: error.message ? error.message : error,
  })
}
