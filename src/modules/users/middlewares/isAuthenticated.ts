import AppError from '@shared/errors/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT Token is missing.');
  }

  const [, Token] = authHeader.split(' ');

  try {
    const decodeToken = verify(Token, authConfig.jwt.secret);

    return next();
  } catch (error) {
    throw new AppError('Invalidd JWT Token.');
  }
}
