import { User } from './user';

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: BigInteger;
  user: User
}

