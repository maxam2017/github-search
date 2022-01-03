<script lang="ts">
  export let once = false;
  export let onInersection: () => void;

  import { onMount } from 'svelte';

  let containerEl: HTMLDivElement;
  let intersecting: boolean;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      intersecting = entries[0].isIntersecting;
      if (intersecting) {
        onInersection();
        if (once) observer.unobserve(containerEl);
      }
    });

    observer.observe(containerEl);
    return () => observer.disconnect();
  });
</script>

<div bind:this={containerEl}>
  <slot {intersecting} />
</div>
