<script lang="ts">
  export let value: string;
  export let placeholder: string;
  export let className = '';
  export let onKeydown: (evt: KeyboardEvent) => void;
  export let onEnter: (evt: KeyboardEvent) => void;

  const handleKeydown = (event: KeyboardEvent) => {
    onKeydown(event);
    if (event.key === 'Enter') {
      onEnter(event);
    }
  };
</script>

<input class={className} type="search" {placeholder} bind:value on:keydown={handleKeydown} />

<style>
  input[type='search']::-webkit-search-cancel-button {
    display: none;
  }
</style>
