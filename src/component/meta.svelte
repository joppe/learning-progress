<script type="ts">
  import type { Goal } from '$lib/entity/goal/goal';

  export let goal: Goal
</script>

<style>
  dl {
    display: grid;
    grid-template-columns: 100px 1fr;
  }

  dt {
    font-weight: bold;
  }
</style>

<dl>
  <dt>Topic</dt>
  <dd>{goal.topic}</dd>
  <dt>Parts</dt>
  <dd>{goal.parts.type}</dd>
  <dt>Count</dt>
  <dd>{goal.parts.count}</dd>
  <dt>Current</dt>
  <dd>{goal.progress.current}</dd>
</dl>
