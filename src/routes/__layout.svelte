<script>
  import '../style/base/reset.css';
  import '../style/font/roboto.css';
  import '../style/config/color.css';
  import '../style/config/font-size.css';
  import '../style/config/spacing.css';
  import '../style/base/global.css';
</script>

<main>
  <slot />
</main>

<style>
  main {
    padding: var(--spacing-md);
  }
</style>
