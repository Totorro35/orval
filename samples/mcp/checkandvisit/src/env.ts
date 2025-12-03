import { cleanEnv, num, str } from 'envalid';

export default cleanEnv(process.env, {
  PRO_API_URL: str(),
  MAGMA_API_URL: str(),
  PORT: num({ default: 3236 }),
});
