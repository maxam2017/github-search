import type { Response } from '$lib/types';
import type { RequestHandler } from '@sveltejs/kit';
import { get } from 'lodash-es';
import data from '../../data/mockRepo.json';

const MOCK = true;

export const post: RequestHandler = async ({ body }) => {
  const search = get(body, 'search');
  if (!search) return { status: 400, body: { code: 400, message: 'malformed body' } };

  if (MOCK) {
    return { body: data as Response };
  }

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
