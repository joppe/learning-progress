<script lang="ts">
  export let type: string;
</script>

<span>
  {#if type === 'book'}
    📖
  {:else if type === 'video'}
    🎬
  {/if}
</span>
