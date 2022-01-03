<script lang="ts">
  import type { Repository } from '$lib/types';

  export let repository: Repository;
</script>

<li class="p-4 bg-white shadow-sm mb-4">
  <div class="flex items-center">
    <img
      class="rounded-full mr-3"
      width="32"
      height="32"
      src={repository.owner.avatar_url}
      alt={repository.owner.login}
    />
    <h2 class="text-md font-semibold text-gray-800">{repository.full_name}</h2>
  </div>
  <div class="py-2 text-md text-gray-500">
    {repository.description}
  </div>
  <!-- {repository.language}
  {repository.stargazers_count}
  {repository.has_issues && repository.open_issues_count}
  Updated {repository.pushed_at} -->
</li>
