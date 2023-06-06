<script>
  import Button from './Button.svelte'
  let input = ''
  let clearInput;
  



  const handleNumber = () => {
    

  }
</script>

  <div setting=true class="container">
    <Button setting on:click="{input}"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg></Button>
    <Button gray=true on:click="{input}">FACT</Button>
    <Button gray=true on:click="{input}">a<sup style="margin-inline-start: .2em">b</sup></Button>
    <Button on:click="{input}">7</Button>
    <Button on:click="{input}">8</Button>
    <Button on:click="{input}">9</Button>
    <Button on:click="{input}">&divide;</Button>
    <Button dark=false orange=true on:click="{input}"><svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
  <line x1="18" y1="9" x2="12" y2="15" />
  <line x1="12" y1="9" x2="18" y2="15" />
</svg>
</Button>
    <Button dark=false orange=true on:click="{clearInput}">AC</Button>
    <Button gray=true on:click="{input}">M&plus;</Button>
    <Button gray=true on:click="{input}">M&minus;</Button>
    <Button gray=true on:click="{input}"><svg id="ei4kL3yKbWI1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 300 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" style="background-color:transparent; transform: translateY(-8px);">
      <rect width="30" height="30" rx="0" ry="0" transform="translate(136.15 105)" fill="#fff" stroke-width="0" />
      <rect width="30" height="30" rx="0" ry="0" transform="translate(136.149972 154.448797)" fill="#fff" stroke-width="0" />
      <line x1="-15" y1="0" x2="35" y2="0" transform="translate(141 144)" fill="#fff" stroke="#fff" stroke-width="3" />
    </svg></Button>
    <Button on:click="{input}">4</Button>
    <Button on:click="{input}">5</Button>
    <Button on:click="{input}">6</Button>
    <Button on:click="{input}">&times;</Button>
    <Button gray=true on:click="{input}">&#8592;</Button>
    <Button gray=true on:click="{input}">&#8594;</Button>
    <Button gray=true on:click="{input}">MR</Button>
    <Button gray=true on:click="{input}">MC</Button>
    <Button gray=true on:click="{input}">&radic;</Button>
    <Button on:click="{input}">1</Button>
    <Button on:click="{input}">2</Button>
    <Button on:click="{input}">3</Button>
    <Button on:click="{input}">&minus;</Button>
    <Button gray=true on:click="{input}">Exp</Button>
    <Button gray=true on:click="{input}">Ans</Button>
    <Button gray=true on:click="{input}">S&lrhar;D</Button>
    <Button gray=true on:click="{input}">&lpar;</Button>
    <Button gray=true on:click="{input}">&rpar;</Button>
    <Button on:click="{input}">&percnt;</Button>
    <Button on:click="{input}">0</Button>
    <Button on:click="{input}">&sdot;</Button>
    <Button on:click="{input}">&plus;</Button>  
    <Button gray=true on:click="{input}" largeBtn=true >&equals;</Button>
  </div>


<style>
  div{
    display: grid;
    grid-template-columns: repeat(9, var(--width));
    grid-template-rows: repeat(4, var(--height));
    gap: 1.3rem 1rem;
    margin: 0;
  }
  
  
  
</style>