<script>
  let hue = 0
  let saturation = 100
  let lightness = 50
  let alpha = 1
  export let color = `hsla({hue}, {saturation}%, {lightness}%, {alpha})`;
</script>

<div class="color-picker">
  <h3>Color Picker</h3>
  <input type="color" bind:value={color} />
  <input type="range" min="0" max="360" step="1" bind:value={hue} />
  <input type="range" min="0" max="100" step="1" bind:value={saturation} />
  <input type="range" min="0" max="100" step="1" bind:value={lightness} />
  <input type="range" min="0" max="1" step="0.01" bind:value={alpha} />
</div>

<style>
  .color-picker {
    margin-bottom: 20px;
  }
</style>