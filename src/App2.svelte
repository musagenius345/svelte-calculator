<script>
  import ColorPicker from './components/colorPicker.svelte'
  import BackgroundPicker from './components/backgroundPicker.svelte'

  



  import { onMount } from 'svelte';

  let color = 'hsla(0, 100%, 50%, 1)';
  let backgroundColor = 'hsla(120, 100%, 50%, 1)';

  function updateBodyColor() {
    document.body.style.color = color;
  }

  function updateBodyBackgroundColor() {
    document.body.style.backgroundColor = backgroundColor;
  }

  onMount(() => {
    updateBodyColor();
    updateBodyBackgroundColor();
  })
</script>
<main class="container">
  <ColorPicker bind:color />
  <BackgroundPicker bind:backgroundColor />
</main>