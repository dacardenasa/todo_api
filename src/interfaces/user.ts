import type { Document } from "mongoose";

export type AuthUser = {
  username: string;
  password: string;
  _id: string;
  _v: number;
};

export type userJWToken = {
  uid: string;
  iat: number;
  exp: number;
};

export type Idocument = AuthUser & Document;
export interface IUsersDocument extends Idocument {}
