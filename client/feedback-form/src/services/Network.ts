import { baseApiUrl } from 'config.json';

/**
 * Sends GET request and data in the url
 * @param urlString путь запроса относительно /api/version
 * @param data список параметров
 */
export function sendGetRequest<T>(urlString: string, data?: Record<string, string>): Promise<T | undefined> {
  const url = new URL(baseApiUrl + urlString);

  if (data !== undefined)
    Object.keys(data).forEach(key => url.searchParams.append(key, data[key]));

  return handleRequest(fetch(url.toString(), {
    method: 'GET',
    credentials: 'same-origin',
  }));
}

/**
 * Sends request with POST method and data as JSON
 * @param url url relative to /api
 * @param data data of the request body
 */
export function sendPostRequest<T>(url: string, data?: unknown): Promise<T | undefined> {

  return handleRequest(fetch(baseApiUrl + url, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: data && JSON.stringify(data)
  }));
}

async function handleRequest<T>(request: Promise<Response>): Promise<T | undefined> {
  const response = await request;
  if (!response.ok)
    throw response;

  try {
    const json = await response.json();

    if (json === null)
      return undefined;

    return json as T | undefined;
  }
  // Couldn't parse the JSON
  catch  {
    return undefined;
  }
}
