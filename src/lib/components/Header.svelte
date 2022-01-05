<script lang="ts">
  import { debounce } from 'lodash-es';
  import { searchRepository, term, repositoryPage } from '$lib/store';

  let query = '';
  $: term.set(query);

  const handleSearch = () => searchRepository(query);
  const handleDebouncedSearch = debounce(handleSearch, 500);
</script>

<header class="flex items-center py-4 lg:px-8 px-4 font-bold text-lg bg-white sticky top-0 shadow-sm">
  <!-- GitHub 🐙 -->
  <svg viewBox="0 0 16 16" height="32" width="32" class="lg:mr-4 mr-2">
    <path
      fill-rule="evenodd"
      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
    />
  </svg>
  <h1 class="hidden md:block">GitHub Search</h1>
  <form action="." on:submit={(e) => e.preventDefault()} class="relative flex-1 ml-4 mr-3 flex items-center">
    <input
      type="search"
      spellcheck="false"
      autocapitalize="off"
      class="appearance-none block flex w-full p-2 rounded-md bg-gray-100 focus:bg-transparent focus:outline-none focus:ring-2"
      placeholder="Search Repository ..."
      bind:value={query}
      on:keydown={(evt) => {
        handleDebouncedSearch();
        if (evt.key === 'Enter') {
          handleDebouncedSearch.flush();
          evt.currentTarget.blur();
        }
      }}
    />
    {#if $repositoryPage.loading}
      <svg class="absolute right-0 animate-spin -ml-1 mr-3 h-5 w-5 text-gray-200" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    {/if}
  </form>
</header>
