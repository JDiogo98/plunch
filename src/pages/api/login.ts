import cookie from "cookie";
import { serialize } from "v8";

export default (req, res) => {
  res.statusCode = 200;

  res.setHeader("Set-Cookie", serialize("token"));
};
