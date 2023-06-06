<script>
  let isdisabled = false;
</script>


<button type="button" disabled={isdisabled} aria-label="button">

  <slot />

</button>

<style>
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
    

  }

  :global(button:not(:last-child, .equal)) {
    margin-block-end: 1.5rem;
    margin-inline-end: 1.5rem;
  }



  .orange {
    background-color: var(--btn-orange-bg);
    color: var(--btn-orange-clr);
    border-top: 1px solid var(--btn-orange-top);

    filter: drop-shadow(1px 1px 3px lch(28.9 25.4 47));

  }


  .gray {
    background-color: var(--btn-gray-bg);
    color: var(--btn-gray-clr);
    border-top: 1px solid var(--btn-gray-top);
  }

  .setting {
    background-color: var(--btn-setting-bg);
    color: var(--btn-setting-clr);
    border-top: 1px solid var(--btn-setting-top);
  }

  .dark {
    background-color: var(--btn-dark-bg);
    color: var(--btn-dark-clr);
    border-top: 1.5px solid var(--btn-dark-top);
  }

  .largeButton {
    width: var(--large);
  }
</style>