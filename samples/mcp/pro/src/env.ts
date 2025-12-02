import { cleanEnv, str } from 'envalid';

export default cleanEnv(process.env, {
  PRO_API_URL: str(),
});
