<script>
  import { repositoryList } from '$lib/store';
  import RepositoryCard from './RepositoryCard.svelte';
</script>

<ul class="grid gap-4">
  {#each $repositoryList as repo (repo.id)}
    <RepositoryCard repository={repo} />
  {/each}
</ul>
