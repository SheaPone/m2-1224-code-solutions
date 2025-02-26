/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ClientError } from './client-error.js';

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  try {
    const auth = req.get('Authorization');
    if (!auth) {
      throw new ClientError(401, 'authentication required');
    }
    const authParsed = auth?.split('Bearer ')[1];
    if (!authParsed) {
      throw new ClientError(401, 'authentication required');
    }
    const payload = jwt.verify(authParsed, hashKey);
    req.user = payload as Request['user'];
    next();
  } catch (err) {
    next(err);
  }
}

/*
 * References:
 * https://expressjs.com/en/4x/api.html#req.get
 * https://nodejs.org/api/http.html#http_message_headers
 * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
