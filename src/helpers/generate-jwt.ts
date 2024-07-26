import jwt, { Secret } from "jsonwebtoken";

export function generateJWT(uid = "") {
  return new Promise((resolve, reject) => {
    const payload = { uid };
    jwt.sign(
      payload,
      process.env.SECRET_OR_PRIVATE_KEY as Secret,
      {
        expiresIn: "4h"
      },
      (error, token) => {
        error ? reject(error) : resolve(token);
      }
    );
  });
}
