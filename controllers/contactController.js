export async function submitContact(req, res) {
  const { name, email, message } = req.body

  // In production, persist to DB and/or send email.
  // Here we return a success response to support UI integration.
  res.status(201).json({
    ok: true,
    data: {
      name,
      email,
      message,
      receivedAt: new Date().toISOString()
    }
  })
}
