<script>
  import {onMount} from 'svelte'
  import Button from "./components/Button.svelte"
  import Display from "./components/Display.svelte"
  import Numbers from "./components/Numbers.svelte"

  let result =''
  let value = ''

  function handleInput(event) {
    value = event.detail;
  }
  
  function updateResult(event) {
    result = event.detail;
  }
</script>

<!-- <svelte:window on:keydown={KeyboardListener} /> -->
<main class="container">
  <Display bind:value bind:result on:inputValueUpdated={updateResult} />
  <Numbers on:inputValueUpdated={handleInput} />
</main>

<style>
</style>