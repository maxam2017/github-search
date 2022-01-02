<script lang="ts">
  export let items = [];
</script>

<ul>
  {#each items as item (item.id)}
    <li class="border-b-2 border-gray-100 px-6 py-4"><pre>{item.full_name}</pre></li>
  {/each}
</ul>
