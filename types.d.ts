declare namespace Express {
  export interface Request {
    authUser: {
      username: string;
      password: string;
    };
  }
  export interface Response {
    authUser: {
      username: string;
      password: string;
    };
  }
}
