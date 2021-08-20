<script lang="ts">
  import type { Goal } from '$lib/entity/goal/goal';
  import { percentage } from '$lib/progress/percentage';
  import { predicted } from '$lib/progress/predicted';
  import ResourceType from '$component/resource-type.svelte';
  import Progress from '$component/progress.svelte';
  import Meta from '$component/meta.svelte';

  export let goal: Goal;

  const current = goal.progress?.current ? goal.progress.current - 1 : 0;
  const diff = current - predicted(goal).toFixed(1);
  const label = `${percentage(goal).toFixed(1)}% | ${diff}`;
</script>

<section>
  <h2><ResourceType type={goal.resource.type} />{goal.resource.name}</h2>
  <Meta {goal} />
  <Progress value={current} max={goal.parts.count} {label} />
</section>

<style>
  h2 {
    display: flex;
    align-items: center;
  }
</style>
