export default function interceptExceptionMiddleware(error, req, res, next) {
  if (error.statusCode) {
    return res
      .status(error.statusCode)
      .json({ statusCode: error.statusCode, status: error.status, message: error.message });
  }
  return res.status(500).json({ statusCode: 500, status: 'INTERNAL_SERVER_EREROR', message: error.message });
}
