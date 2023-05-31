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
    width: 100px;
    height: 40px;
    cursor: pointer;
  }

  .primary{
    background-color: #202142;
    
  }
  
  .secondary{
    background: #ff6a95;
  }
  
  button:hover{
    -webkit-transform: scale(0.98);
    -moz-transform: scale(0.98);
    -ms-transform: scale(0.98);
    -o-transform: scale(0.98);
    transform: scale(0.98);
    
    opacity: 0.9;
  }
  
  button:disabled{
    background-color: #ccc;
    color: #333;
    cursor: auto;
    
    &:hover{
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
    
    opacity: 1;
    }
  }
  
  
</style>