<script type="text/javascript" charset="utf-8">
  import './carbon-components-svelte-master/css/all.css'
  import { Slider } from './carbon-components-svelte-master/src/Slider/index.js';
  
  
  let hue = 0;
  let saturation = 0;
  let lightness = 0;
  let alpha = 1;
  
  
  function updateTxtColor() {
    
    alpha = parseFloat(alpha.toFixed(3));
    
    document.documentElement.style.setProperty(
      '--txt-clr', `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`);
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
      on:change={updateTxtColor}
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
      on:change={updateTxtColor}
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
      on:change={updateTxtColor}
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
      on:change={updateTxtColor}
    />
  </div>
  
  
</div>





<style lang="scss">
  * {
    box-sizing: border-box;
  }

  

  :root {
    --txt-clr: hsla(0, 0%, 0%, 0);
  }

  .slider__container {
    
  /* color: hsla(0, 0%, 13.33%, 1); */
  color: var(--txt-clr);    

  }
  
  
  
</style>