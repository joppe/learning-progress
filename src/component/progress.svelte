<script type="ts">
  export let value: number;
  export let max: number;
  export let label: string;

  const percentage = value === 0 ? 0 : (value / max) * 100;
</script>

<style>
  .container {
    position: relative;
    height: 20px;
    border: 1px solid black;
  }

  .bar {
    height: 100%;
    background-color: orange;
  }

  .label {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: center;
  }
</style>

<div class="container">
  <div class="bar" style="width: {percentage}%"></div>
  <div class="label">{label}</div>
</div>

