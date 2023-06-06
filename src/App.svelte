<script>
  import Button from './components/Button.svelte'
  import Display from './components/Display.svelte'
  import Numbers from './components/Numbers.svelte'
  import Operation from './components/Operation.svelte'
</script>

<main class="container">
  <Display />
  <div class="numpad">
    <Numbers />
    <Operation />
  </div>




</main>
<style>
  .numpad{
    display: grid;
    /* grid-template-columns: ; */
  }
</style>