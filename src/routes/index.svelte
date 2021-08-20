<script context="module" lang="ts">
  import type { LoadOutput } from '@sveltejs/kit';

  export async function load({ fetch }): Promise<LoadOutput> {
    const url = '/goal/list';
    const res = await fetch(url);

    return {
      props: {
        goals: await res.json(),
      },
    };
  }
</script>

<script lang="ts">
  import type { Goal } from '$lib/entity/goal/goal';
  import GoalComponent from '$component/goal.svelte';

  export let goals: Goal[];
</script>

<h1>Learning progress</h1>

<ul>
  {#each goals as goal}
    <li>
      <GoalComponent {goal} />
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 0 0 20px 0;
    padding: 0;
    list-style: none;
  }
</style>
