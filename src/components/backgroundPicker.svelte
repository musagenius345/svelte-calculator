<script>
    let hue = 0
    let saturation = 100
    let lightness = 50
    let alpha = 1
    export let backgroundColor = `hsla({hue}, {saturation}%, {lightness}%, {alpha})`
</script>

<div class="background-picker">
  <h3>Background Picker</h3>
  <input type="color" bind:value={backgroundColor} />
  <input type="range" min="0" max="360" step="1" bind:value={hue} oninput="rangevalue.value=value"/>
  <output id="rangeValue">0</output>
  <input type="range" min="0" max="100" step="1" bind:value={saturation} oninput="rangevalue.value=value"/>
  <output id="rangeValue">100</output>
  <input type="range" min="0" max="100" step="1" bind:value={lightness} oninput="rangevalue.value=value"/>
  <output id="rangeValue">50</output>
  <input type="range" min="0" max="1" step="0.01" bind:value={alpha} oninput="rangevalue.value=value"/>
  <output id="rangeValue">1</output>
</div>

<style>
  .background-picker {
    margin-bottom: 20px;
  }
</style>