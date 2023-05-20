
import "carbon-components-svelte/css/all.css";
import { SliderSkeleton } from "carbon-components-svelte";

const Sliders = ()=> ( 
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
)

export default Sliders