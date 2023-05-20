<script type="text/javascript" charset="utf-8">
  import './carbon-components-svelte-master/css/all.css'
  import { Slider } from './carbon-components-svelte-master/src/Slider/index.js';
  
  
  let hue = 0;
  let saturation = 0;
  let lightness = 0;
  let alpha = 1;
  
  
  function updateColor() {
    
    alpha = parseFloat(alpha.toFixed(3));
    
    document.documentElement.style.setProperty(
      '--bg-clr', `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`);
  }
  
</script>


<div class="slider__container">

  <div class="slider">
    <Slider class="hue" 
      fullWidth 
      labelText="Hue" 
      min={0} 
      max={360} 
      step={1}
      bind:value={hue}
      on:change={updateColor}
    />
  </div>


  <div class="slider">
    <Slider 
      class="saturation" 
      fullWidth 
      labelText="Saturation" 
      min={0} 
      max={100} 
      step={1}  
      bind:value={saturation}
      on:change={updateColor}
      />
  </div>



  <div class="slider">
    <Slider 
      class="lightness"
      fullWidth 
      labelText="Lightness" 
      min={0} 
      max={100} 
      step={1} 
      bind:value={lightness}
      on:change={updateColor}
    />
  </div>
  
  
  <div class="slider">
    <Slider 
      class="alpha"
      fullWidth 
      labelText="Alpha" 
      min={0} 
      max={1} 
      step={0.01}
      bind:value={alpha}
      on:change={updateColor}
    />
  </div>
  
  
</div>





<style lang="scss">
  * {
    box-sizing: border-box;
  }

  @property --a {
    intial-value: 1;
    inherit: false;
    syntax: '<number>';
  }
  @property --h {
    intial-value: 0deg;
    inherit: false;
    syntax: '<deg>';
  }
  @property --s {
    initial-value: 0;
    inherits: false;
    syntax: '<percentage>';
  }

  @property --l {
    initial-value: 0;
    inherits: false;
    syntax: '<percentage>';
  }

  :root {
    --bg-clr: hsla(0, 0%, 0%, 0);
  }

  .slider__container {
    
    background: var(--bg-clr);
    

  }
  
  
  
</style>