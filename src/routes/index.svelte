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

<script type="ts">
  import type { Goal } from '$lib/entity/goal/goal';
  import GoalComponent from '$component/goal.svelte';

  export let goals: Goal[];
</script>

<style>
  ul {
    margin: 0 0 20px 0;
    padding: 0;
    list-style: none;
  }
</style>

<h1>Learning progress</h1>

<ul>
  {#each goals as goal}
    <li>
      <GoalComponent goal={goal} />
    </li>
  {/each}
</ul>

