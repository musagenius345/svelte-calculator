<script>
  
 const calc = () => console.log('input')
 const value = 5+2

</script>



  <form class="wrapper" on:input={calc}>
    <div class="screen-display">
      <input id="arithmetic" type="number" class="" aria-placeholder="Arithmetic" placeholder="5+2">
      <output name="result" for="arithmetic" placeholder="Results">{value}</output>
    </div>
  </form>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    font-size: 2.7rem;
    
    margin-block-end: 1.8rem;
  }
  
  ::selection{
    color: lch(89.4 5.7 194);
    background-color: #000000;
  }
  
  .screen-display {
    width: 100%;
    min-height: 40vh;
  
    outline: none;
    border: none;
  
    border-radius: 12px;
    background-color: lch(89.4 5.7 194);
  
  
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-between;
    gap: 1.2rem;
  
  }
  
  .wrapper {}
  
  input {
    font-size: 3.2rem;
    background: transparent;
    border: 0;
    outline: 0;
  
    align-self: flex-start;
  
    margin-inline-start: 1.8em;
    margin-block-start: .8em;
  
  
  
  }
  
  
  output {
    all: unset;
    justify-self: flex-end;
    align-self: flex-end;
  
    margin-inline-end: 1.8em;
    margin-block-end: .8em;
  }
  
</style>