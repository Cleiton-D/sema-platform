export const sessionOptions = {
  password: process.env.SESSION_PASSWORD as string,
  cookieName: 'sema.3WGc5Lm3l9m',
  // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
  ttl: 1200000,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production'
  }
};
