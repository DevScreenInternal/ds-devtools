import qs from 'qs';

export function parseUrl(url: string) {
  return new URL(url);
}

export function queryStringToJSONString(queryString: string): string {
  // using the qs library to handle nested objects.
  if (!queryString) {
    queryString = '';
  }
  if (queryString.startsWith('?')) {
    queryString = queryString.substring(1); // qs will prepend '?' to the first query string item otherwise
  }

  return JSON.stringify(qs.parse(queryString), null, 2);
}
