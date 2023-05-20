<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
  import { Slider } from "carbon-components-svelte";
  import "carbon-components-svelte/css/all.css";
  import { SliderSkeleton } from "carbon-components-svelte";
  // import { Slider } from './lib/Slider.svelte'
</script>

<main>

  <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
    <img src={viteLogo} class="logo" alt="Vite Logo" />
  </a>
  <a href="https://svelte.dev" target="_blank" rel="noreferrer">
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
  </a>
  <h1>Vite + Svelte</h1>
  <div class="card">
    <Counter />
  </div>
  <div class="slider-container">
    <div class="slider">
      <Slider labelText="Hue" fullWidth min="0" max="360"  value={0} />
    </div>
    <div class="slider">
      <Slider labelText="Saturation" fullWidth value={0} />
    </div>
    <div class="slider">
      <Slider labelText="Lightness" fullWidth value={0} />
    </div>
  </div>
  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  main {
    height: 100vh;
  }


  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
    background-color: greenyellow;
  }

  .read-the-docs {
    color: #888;
  }
</style>