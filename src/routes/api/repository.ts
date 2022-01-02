import type { RequestHandler } from '@sveltejs/kit';
import { get } from 'lodash-es';

export const post: RequestHandler = async ({ body }) => {
  const search = get(body, 'search');
  if (!search) return { status: 400, body: { code: 400, message: 'malformed body' } };

  const res = await fetch(`https://api.github.com/search/repositories?q=${search}`);
  try {
    const json = await res.json();
    if (res.ok) return { body: json };
    return {
      status: res.status,
      body: { code: res.status, message: json.message },
    };
  } catch (err) {
    return {
      status: 500,
      body: { code: 500, message: `internal server error: ${err.message}` },
    };
  }
};
