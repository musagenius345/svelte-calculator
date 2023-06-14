<script>
  import Button from './Button.svelte'
  export let isdisabled = false
  export let dark = true
  export let orange = false
  export let gray = false
  export let setting = false
  export let largeBtn = false
  
  
  


</script>
<button type="button" disabled={isdisabled} aria-label="button" class:dark class:orange class:setting class:gray class:largeBtn on:click>
  <slot />
</button>

<style lang="scss">
  button {
    all: unset;

    --dropshadow: lch(3.5 1.2 302);

    cursor: pointer;
    font-size: 2.2rem;
    font-weight: 500;
    border-radius: var(--border-radius);
    filter: drop-shadow(1px 1px 2px var(--dropshadow));
    width: var(--width);
    height: var(--height);
    text-align: center;

    color: var(--btn-clr);
    background-color: var(--btn-bg);
    border-top: 1.5px solid var(--btn-top);
    margin-block-end: 2rem;
    margin-inline-end: 1.8rem;

    transition: all;


    &:hover,
    &:focus {
      transform: translateY(3px);
    }

  }


  .dark {
    background-color: var(--btn-dark-bg);
    color: var(--btn-dark-clr);
    border-top: 1.5px solid var(--btn-dark-top);


    &:hover,
    &:focus {
      background-color: var(--btn-dark-bg-hov);

    }
  }

  .orange {
    background-color: var(--btn-orange-bg);
    color: var(--btn-orange-clr);
    border-top: 1px solid var(--btn-orange-top);

    /* filter: drop-shadow(1px 1px 3px lch(28.9 25.4 47)); */

    &:hover,
    &:focus {
      background-color: var(--btn-orange-bg-hov);

    }
  }

  .gray {
    background-color: var(--btn-gray-bg);
    color: var(--btn-gray-clr);
    border-top: 1px solid var(--btn-gray-top);

    &:hover,
    &:focus {
      background-color: var(--btn-gray-bg-hov);

    }
  }

  .setting {
    background-color: var(--btn-setting-bg);
    color: var(--btn-setting-clr);
    border-top: 1px solid var(--btn-setting-top);

    &:hover,
    &:focus {
      background-color: var(--btn-setting-bg-hov);

    }
  }

  .largeBtn {
    width: var(--large);
    grid-column: span 2;
    margin-inline: auto;
  }
  
  
  
</style>
