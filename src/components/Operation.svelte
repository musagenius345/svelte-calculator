<script>
  import Button from './Button.svelte'
  import OrangeButton from './buttons/OrangeButton.svelte'
  import DeleteIcon from '../assets/delete.svg'
  import {
    atan2,
    chain,
    derivative,
    e,
    evaluate,
    log,
    pi,
    pow,
    round,
    sqrt
  } from 'mathjs'
  const firstRowOperation = ['Del', 'AC']
  const secondRowOperation = ['<-', '->']
  const thirdRowOperation = ['Exp', 'Ans']
  const fourthRowOperation = ['=']
</script>

<div class="right-keys">



</div>



<style>
  .right-keys {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* gap: .7em; */

  }
</style>