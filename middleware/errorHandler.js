// eslint-disable-next-line no-unused-vars
export function errorHandler(err, _req, res, _next) {
  const status = err?.statusCode || 500
  const message = status === 500 ? 'Unexpected server error.' : err?.message

  // eslint-disable-next-line no-console
  console.error(err)

  res.status(status).json({
    ok: false,
    error: { code: 'SERVER_ERROR', message }
  })
}
