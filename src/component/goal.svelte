<script lang="ts">
  import type { Goal } from '$lib/entity/goal/goal';
  import { percentage } from '$lib/progress/percentage';
  import { predicted } from '$lib/progress/predicted';
  import ResourceType from '$component/resource-type.svelte';
  import Progress from '$component/progress.svelte';
  import Meta from '$component/meta.svelte';

  export let goal: Goal;

  let current;
  let diff;
  let label;

  $: {
    current = goal.progress?.current ? goal.progress.current - 1 : 0;
    diff = current - predicted(goal).toFixed(1);
    label = `${percentage(goal).toFixed(1)}% | ${diff}`;
  }
</script>

<section>
  <h2>
    <ResourceType type={goal.resource.type} /><span>{goal.resource.name}</span>
  </h2>
  <Meta {goal} />
  <Progress value={current} max={goal.parts.count} {label} />
</section>

<style>
  section {
    padding: var(--spacing-md);
    border: 1px solid var(--grey--charcoal);
    border-radius: 3px;
  }

  h2 {
    display: flex;
    align-items: center;
    font-size: var(--font-size-lg);
    font-weight: 700;
  }

  h2 span {
    margin-left: var(--spacing-md);
  }
</style>
