<script lang="ts">
  import type { Goal } from '$lib/entity/goal/goal';
  import { plural } from '$lib/text/plural/plural';
  import { startOfDay } from '@apestaartje/date/src/start-of-day';
  import { addDays } from '@apestaartje/date/src/add-days';

  export let goal: Goal;

  let disabled = false;
  let originalEndDate;
  let estimatedEndDate;

  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };
  const dateTimeFormat = new Intl.DateTimeFormat('en-US', options);
  const dictionary = {
    day: 'days',
    recipe: 'recipes',
  };

  if (goal.progress.started) {
    const today = startOfDay(new Date());
    const started = startOfDay(new Date(goal.progress.started));
    const perDay = goal.goal.parts / goal.goal.days;

    originalEndDate = addDays(started, goal.parts.count / perDay);
    estimatedEndDate = addDays(
      today,
      (goal.parts.count - goal.progress.current) / perDay,
    );
  }

  function formatDate(date) {
    return dateTimeFormat.format(date);
  }

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
    {plural(goal.parts.type, goal.parts.count, dictionary)}
  </dd>
  <dt>Goal</dt>
  <dd>
    {goal.goal.parts}
    {plural(goal.parts.type, goal.goal.parts, dictionary)}/{goal.goal.days}
    {plural('day', goal.goal.days, dictionary)}
  </dd>
  {#if goal.progress.started !== undefined}
    <dt>Started</dt>
    <dd>{formatDate(new Date(goal.progress.started))}</dd>
    <dt>Finish</dt>
    <dd>
      {formatDate(originalEndDate)} (planned) | {formatDate(estimatedEndDate)} (estimated)
    </dd>
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
    grid-gap: var(--spacing-sm);
    margin-bottom: var(--spacing-lg);
  }

  dt {
    font-weight: bold;
  }
</style>
