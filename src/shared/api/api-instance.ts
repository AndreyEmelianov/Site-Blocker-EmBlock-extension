const baseURL = 'http://localhost:3000';

class ApiError extends Error {
  constructor(public data: unknown) {
    super('Api Error');
  }
}

export const createInstance = async <T>({
  url,
  method,
  params,
  data,
}: {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  params?: Record<string, string>;
  headers?: HeadersInit;
  data?: BodyType<unknown>;
  responseType?: string;
}): Promise<T> => {
  const response = await fetch(`${baseURL}${url}` + new URLSearchParams(params), {
    method,
    ...(data ? { body: JSON.stringify(data) } : {}),
  });

  if (response.status.toString().startsWith('2')) {
    throw new ApiError(response);
  }

  return response.json();
};

export type ErrorType<Error> = Error;
export type BodyType<BodyData> = BodyData;
