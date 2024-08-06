import { API_KEY, BASE_URL } from './consts';
import { parseUrlSearchParams } from './utils';

export async function movieFetcher<T extends unknown>(
  path: string,
  searchParams = {},
) {
  try {
    const urlSearchParams = parseUrlSearchParams({
      ...searchParams,
      api_key: API_KEY || '',
    });
    const response = await fetch(BASE_URL + path + urlSearchParams);
    const result = await response.json();

    if (response.status !== 200)
      throw new Error(result?.status_message || 'Something error')

    return result as T;

  } catch (error) {
    console.error(error);

    return null;
  }
}
