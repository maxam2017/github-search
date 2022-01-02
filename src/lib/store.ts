import produce, { setAutoFreeze } from 'immer';
import { derived, writable } from 'svelte/store';
import type { Repository, Response, ResponseErrorBody } from './types';

/* workaround for unwritable problem which svelte would manipulate store without immer */
setAutoFreeze(false);

interface Page {
  loading: boolean;
  fetched: boolean;
  noMore: boolean;
  error?: string;
  index: string[];
}

const DefaultPage: Page = { loading: false, fetched: false, noMore: false, index: [] };

interface Store {
  data: { [id: string]: Repository };
  pages: { [search: string]: Page };
}

const store = writable<Store>({ data: {}, pages: {} });

export async function searchRepository(query: string): Promise<void> {
  console.log({ query });
  if (!query) return;

  store.update((prevStore) => {
    return produce(prevStore, (draft) => {
      if (!draft.pages[query]) {
        draft.pages[query] = Object.assign({}, DefaultPage);
      }
      const page = draft.pages[query];
      page.loading = true;
      delete page.error;
    });
  });
  const res = await fetch('/api/repository', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ search: query }),
  });

  try {
    const json = (await res.json()) as Response;
    store.update((prevStore) => {
      return produce(prevStore, (draft) => {
        const page = draft.pages[query];
        page.loading = false;
        page.fetched = true;

        if (res.ok) {
          for (const item of json.items) {
            draft.data[item.id] = item;
            page.index.push(`${item.id}`);
          }
          page.noMore = !json.incomplete_results;
        } else {
          const { code, message } = json as unknown as ResponseErrorBody;
          page.error = `[${code}]: ${message}`;
        }
      });
    });
  } catch (err) {
    store.update((prevStore) => {
      return produce(prevStore, (draft) => {
        const page = draft.pages[query];
        page.loading = false;
        page.fetched = true;
        page.error = `${err}`;
      });
    });
  }
}

const term = writable('');
export { term };

const repositoryList = derived([term, store], ([$term, $store]) => {
  const data = $store.data;
  const ids = $store.pages[$term]?.index || [];
  return ids.map((id) => data[id]).filter(Boolean);
});
const repositoryPage = derived([term, store], ([$term, $store]) => {
  const page = $store.pages[$term];
  return Object.assign({}, DefaultPage, page);
});

export { repositoryList, repositoryPage };
