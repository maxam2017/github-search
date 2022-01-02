<script>
  import { repositoryPage } from '$lib/store';
  import ErrorView from './ErrorView.svelte';
  import ListView from './ListView.svelte';
  import LoadingView from './LoadingView.svelte';
</script>

<div class="p-6">
  <ListView />
  {#if $repositoryPage.loading}
    <div class="pt-4" />
    <LoadingView />
  {/if}

  {#if $repositoryPage.error}
    <ErrorView message={$repositoryPage.error} />
  {/if}
</div>
