<script>
  import { repositoryPage, searchRepository, term } from '$lib/store';

  export let message;
</script>

<div class="flex items-center">
  <p class="font-mono text-gray-500 mr-3">發生錯誤，請重新嘗試 {message}</p>
  <button
    disabled={$repositoryPage.loading}
    on:click={() => searchRepository($term)}
    class="px-4 py-2 text-sm bg-slate-500 disabled:bg-slate-300 hover:bg-slate-400 active:bg-slate-500 text-white rounded-full shadow-sm"
    >重新載入</button
  >
</div>
