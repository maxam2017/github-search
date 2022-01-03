<script>
  import { repositoryPage, searchRepository, term } from '$lib/store';
  import ErrorView from './ErrorView.svelte';
  import IntersectionObserver from './IntersectionObserver.svelte';
  import ListView from './ListView.svelte';
  import LoadingView from './LoadingView.svelte';
</script>

<div class="p-6">
  <ListView />
  {#if $repositoryPage.fetched && !$repositoryPage.noMore && !$repositoryPage.loading}
    <IntersectionObserver onInersection={() => searchRepository($term, $repositoryPage.page + 1)}>
      <div class="h-[1px]" />
    </IntersectionObserver>
  {/if}
  {#if $repositoryPage.loading}
    <LoadingView />
  {/if}

  {#if $repositoryPage.error}
    <ErrorView message={$repositoryPage.error} />
  {/if}
</div>
