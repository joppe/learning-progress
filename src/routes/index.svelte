<script context="module">
  export async function load({ fetch }) {
    const url = '/goal/list';
    const res = await fetch(url);

    return {
      props: {
        goals: await res.json()
      }
    };
  }
</script>

<script>
  export let goals;
</script>

<h1>Learning progress</h1>

<ul>
  {#each goals as goal}
    <li>{JSON.stringify(goal)}</li>
  {/each}
</ul>

