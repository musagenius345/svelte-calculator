<script>
  export let style = 'primary'
  export let type = 'button'
  export let disabled = 'false'
</script>

<button {type} {disabled} class={style}>
  <slot></slot>
</button>

<style>
  button {
    color: #fff;
    border: 0;
    border-radius: 8px;
    color: #fff;
    width: 10rem;
    height: 4rem;
    cursor: pointer;
    font-size: .8em;
  }

  .primary {
    background-color: #FFD300;
    color: #222222;
  }

  .secondary {
    background: #ff6a95;
  }

  button:hover {
    transform: scale(0.98);
    opacity: 0.9;
  }

  button:disabled{
    background-color: #cccccc;
    color: #333;
    cursor:auto;
  }

  button:disabled:hover{
    transform:scale(1);
    opacity: 1;
  }


  
  
</style>