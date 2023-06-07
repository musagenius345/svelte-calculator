<script>
  import { onMount } from "svelte"

  import Color from "../../color.js"

  let css_color
  let serialized_color
  let serialized_color_srgb
  let serialized_color_srgb_oog
  let color_spaces = Color.Space.all
  let spaceId = "lch"
  let coords = [50, 50, 50]
  let alpha = 100
  let precision = 3

  let coord_meta = []
  let slider_steps = []

  // onMount(() => {
  //   if (localStorage.picker_color) {
  //     let o = JSON.parse(localStorage.picker_color);
  //     spaceId = o.spaceId;
  //     coords = o.coords;
  //     alpha = o.alpha;
  //   }

  //   let url = new URL(window.location.href);
  //   let spaceParam = url.searchParams.get('space');
  //   if (spaceParam && spaceParam !== spaceId) {
  //     coords = new Color(spaceId, coords, alpha / 100).to(spaceParam, { inGamut: true }).coords;
  //     spaceId = spaceParam;
  //   }
  // });

  // function updateColor() {
  //   let color = new Color(spaceId, coords, alpha / 100);
  //   css_color = color.display({ precision });
  //   serialized_color = color.toString({ precision });
  //   let srgbColor = color.to('srgb');
  //   serialized_color_srgb = srgbColor.toString({ precision });
  //   serialized_color_srgb_oog = srgbColor.toString({ precision, inGamut: false });
  //   localStorage.picker_color = JSON.stringify({ spaceId, coords, alpha });
  // }

  function CSS_color_to_LCH() {
    let str = prompt("Enter any CSS color")
    if (str) {
      try {
        let color = new Color(str)
        let converted = color.to(spaceId)
        coords = converted.coords
        alpha = converted.alpha * 100
        updateColor()
      } catch (e) {
        alert(e.message)
      }
    }
  }

  let color
</script>

<main>
  <!--  style="--color: {css_color}" -->
  <header>
    <h1>
      <select bind:value={spaceId}>
        {#each color_spaces as space}
          <option value={space.id}>{space.name}</option>
        {/each}
      </select>
      <div>
        Colour Picker
        <button on:click={CSS_color_to_LCH}>Import color…</button>
      </div>
    </h1>
  </header>

  {#each coord_meta as meta, i}
    <label class="color-slider-label">
      {meta.name} ({meta.min}-{meta.max})
      <input
        class="color-slider"
        type="range"
        bind:value={coords[i]}
        style="--stops: {slider_steps[i]}"
        min={meta.min}
        max={meta.max}
        step={meta.step}
      />
      <input
        type="number"
        bind:value={coords[i]}
        class="autosize"
        style="--percentage: {coords[i] / (meta.max - meta.min)}"
        min={meta.min}
        max={meta.max}
      />
    </label>
  {/each}

  <label class="color-slider-label">
    Alpha (0-100)
    <input class="color-slider" type="range" bind:value={alpha} />
    <!-- style="--stops: {slider_steps[coord_meta.length]} -->
    <input type="number" class="autosize" bind:value={alpha} max="100" />
    <!-- style="--percentage: {alpha / 100}" -->
  </label>

  <fieldset>
    <legend>
      Output
      <span class="precision autosize">
        (<input type="number" bind:value={precision} min="0" max="20" /> significant
        digits)
      </span>
    </legend>
    <label>
      Serialized color
      <input class="color-css" value={serialized_color} readonly />
    </label>

    <label>
      Displayed color
      <input class="color-css" value={css_color} readonly />
    </label>

    <label>
      <abbr>sRGB</abbr> Color
      <input class="color-srgb" value={serialized_color_srgb} readonly />
      <div class="out-of-gamut-warning">
        Color is actually {serialized_color_srgb_oog}, which is out of sRGB
        gamut; auto-corrected to sRGB boundary.
      </div>
    </label>
  </fieldset>
</main>
