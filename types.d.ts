declare namespace Express {
  export interface Request {
    authUser: {
      username: string;
      password: string;
      _id: string;
      _v: number;
    };
  }
  export interface Response {
    authUser: {
      username: string;
      password: string;
      _id: string;
      _v: number;
    };
  }
}
