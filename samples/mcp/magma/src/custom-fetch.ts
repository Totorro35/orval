import env from './env';

const getBody = <T>(c: Response | Request): Promise<T> => {
  const contentType = c.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    return c.json();
  }

  if (contentType && contentType.includes('application/pdf')) {
    return c.blob() as Promise<T>;
  }

  return c.text() as Promise<T>;
};

const getUrl = (contextUrl: string): string => {
  const baseUrl = env.PRO_API_URL;
  if (!baseUrl) {
    throw new Error('Environment variable `PRO_API_URL` is missing');
  }

  return new URL(`${baseUrl}${contextUrl}`).toString();
};

export const customFetch = async <T>(
  url: string,
  options: RequestInit,
): Promise<T> => {
  const requestUrl = getUrl(url);

  const requestInit: RequestInit = {
    ...options,
    headers: {
      ...options.headers,
    },
  };

  const response = await fetch(requestUrl, requestInit);
  const data = await getBody<T>(response);

  return { data, headers: response.headers, status: response.status } as T;
};
