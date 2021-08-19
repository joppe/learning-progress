<script type="ts">
  import type { Goal } from '$lib/entity/goal/goal';
  import { percentage } from '$lib/progress/percentage';
  import { predicted} from '$lib/progress/predicted';
  import ResourceType from '$component/resource-type.svelte';
  import Progress from '$component/progress.svelte';
  import Meta from '$component/meta.svelte';

  export let goal: Goal;

  const diff = (goal.progress?.current ?? 0) - predicted(goal);
  const label = `${percentage(goal).toFixed(1)}% | ${diff}`;
</script>

<style>
  h2 {
    display: flex;
    align-items: center;
  }
</style>

<section>
  <h2><ResourceType type={goal.resource.type} />{goal.resource.name}</h2>
  <Meta goal={goal} />
  <Progress value={goal.progress.current ?? 0} max={goal.parts.count} label="{label}" />
</section>
