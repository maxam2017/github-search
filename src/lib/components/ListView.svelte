<script>
  import { repositoryList } from '$lib/store';
  import RepositoryCard from './RepositoryCard.svelte';
</script>

<ul class="grid">
  {#each $repositoryList as repo (repo.id)}
    <RepositoryCard repository={repo} />
  {/each}
</ul>
