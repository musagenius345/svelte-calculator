<script>
  import { evaluate, fraction } from 'mathjs'
  import Button from "./Button.svelte"


  $: total = 0
  $: numberInput = ''
  $: cursorPosition = 0


  function addToInput(value) {
    numberInput += value
    total = evaluate(numberInput)
  }

  function inputManual(value) {
    numberInput += ''
    total = evaluate(numberInput)


  }


  //FIXIT
  const equal = () => {
    numberInput = total.toString()
  }

  const fractional= () => {
  return fraction(numberInput)
  }


  const clearInput = () => {
    total = 0
    numberInput = ""
  }
  //FIXIT NEEDS ADDED FUNCTIONAL
  const del = () => {
    numberInput = numberInput.slice(0, -1)

  }


function handleInput(event) {
  cursorPosition = event.target.selectionStart;
  inputManual(event);
}




  // function addToInput(value){
  //   prompt(value)
  //   console.log(value)
  //   numberInput += value
  // }




  // $: if (
  //   numberInput !== "" &&
  //   !isNaN(numberInput.slice(-1)) &&
  //   numberInput != result()
  // ) {
  //   total = result().toString();
  // }
</script>

<div class="wrapper">
  <div class="screen-display">
    <input id="arithmetic" type="text" autocomplete=off on:input={inputManual} bind:value={numberInput} on:input={handleInput}/>
    <output name="result" for="arithmetic" placeholder="Results">{total}</output>
  </div>
</div>



<div class="container numpad">
  <Button setting><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg></Button>
  <Button gray on:click={()=> addToInput('!')}>FACT</Button>
  <Button gray on:click={()=> addToInput('^')}>a<sup style="margin-inline-start: .2em">b</sup></Button>
  <Button on:click={()=> addToInput('7')}>7</Button>
  <Button on:click={()=> addToInput('8')}>8</Button>
  <Button on:click={()=> addToInput('9')}>9</Button>
  <Button on:click={()=> addToInput('/')} >&divide;</Button>
  <Button orange on:click={del}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
      <line x1="18" y1="9" x2="12" y2="15" />
      <line x1="12" y1="9" x2="18" y2="15" />
    </svg>
  </Button>
  <Button orange on:click={()=>clearInput()}>AC</Button>
  <Button gray>M&plus;</Button>
  <Button gray>M&minus;</Button>
  <Button gray on:click={fractional}><svg id="ei4kL3yKbWI1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="background-color:transparent; transform: translateY(-8px);">
      <rect width="30" height="30" rx="0" ry="0" transform="translate(136.15 105)" fill="#fff" stroke-width="0" />
      <rect width="30" height="30" rx="0" ry="0" transform="translate(136.149972 154.448797)" fill="#fff" stroke-width="0" />
      <line x1="-15" y1="0" x2="35" y2="0" transform="translate(141 144)" fill="#fff" stroke="#fff" stroke-width="3" />
    </svg></Button>
  <Button on:click={()=> addToInput('4')}>4</Button>
  <Button on:click={()=> addToInput('5')}>5</Button>
  <Button on:click={()=> addToInput('6')}>6</Button>
  <Button on:click={()=> addToInput('*')}>&times;</Button>
  <Button gray>&#8592;</Button>
  <Button gray>&#8594;</Button>
  <Button gray>MR</Button>
  <Button gray>MC</Button>
  <Button gray on:click={()=> addToInput('√')}>&radic;</Button>
  <Button on:click={()=> addToInput('1')}>1</Button>
  <Button on:click={()=> addToInput('2')}>2</Button>
  <Button on:click={()=> addToInput('3')}>3</Button>
  <Button on:click={()=> addToInput(' - ')}>&minus;</Button>
  <Button gray on:click={()=> addToInput('E')}>Exp</Button>
  <Button gray on:click={()=> equal()}>Ans</Button>
  <Button gray on:click={()=> fractional()}>S&lrhar;D</Button>
  <Button gray on:click={()=> addToInput('(')}>&lpar;</Button>
  <Button gray on:click={()=> addToInput(')')}>&rpar;</Button>
  <Button on:click={()=> addToInput('%')}>&percnt;</Button>
  <Button on:click={()=> addToInput('0')}>0</Button>
  <Button on:click={()=> addToInput('.')}>&sdot;</Button>
  <Button on:click={()=> addToInput('+')}>&plus;</Button>
  <Button gray largeBtn on:click={()=> equal()}>&equals;</Button>
</div>
<style>
  .numpad {
    display: grid;
    grid-template-columns: repeat(9, minmax(var(--width), 12px));
    grid-template-rows: repeat(4, var(--height));
    gap: 1.3rem 1rem;
    margin: 0;
    max-width: 100%;
  }



  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    font-size: 2.7rem;

    margin-block-end: 1.8rem;
  }

  ::selection {
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

  /* .wrapper {} */

  #arithmetic {
    width: calc(93% - 1.8rem);
    font-size: 3.2rem;
    background: transparent;
    border: 0;
    outline: 0;

    align-self: flex-start;

    margin-inline-start: 1.8em;
    margin-block-start: 0.8em;
  }

  output {
    all: unset;
    justify-self: flex-end;
    align-self: flex-end;

    margin-inline-end: 1.8em;
    margin-block-end: 0.8em;
  }
</style>
