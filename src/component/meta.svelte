<script lang="ts">
  import type { Goal } from '$lib/entity/goal/goal';
  import { plural } from '$lib/text/plural';

  export let goal: Goal;

  let disabled = false;

  async function updateProgress() {
    disabled = true;

    const url = `/goal/update/${goal._id}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(goal),
    });

    if (response.ok) {
      disabled = false;
    }
  }
</script>

<dl>
  <dt>Topic</dt>
  <dd>
    {goal.topic} | {goal.parts.count}
    {plural(goal.parts.type, goal.parts.count)}
  </dd>
  <dt>Goal</dt>
  <dd>
    {goal.goal.parts}
    {plural(goal.parts.type, goal.goal.parts)}/{goal.goal.days}
    {plural('day', goal.goal.days)}
  </dd>
  {#if goal.progress.started !== undefined}
    <dt>Started</dt>
    <dd>{goal.progress.started}</dd>
  {/if}
  <dt>Current</dt>
  <dd>
    <input
      type="number"
      bind:value={goal.progress.current}
      on:change={updateProgress}
      {disabled}
    />
  </dd>
</dl>

<style>
  dl {
    display: grid;
    grid-template-columns: 100px 1fr;
  }

  dt {
    font-weight: bold;
  }
</style>
