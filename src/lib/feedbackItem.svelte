<script>
  import { FeedbackStore } from '../stores'
  export let item
  import Card from './card.svelte'



  const handleDelete = (itemId) => {
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter(item => item.id != itemId)
    })
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}

  </div>
  <button class="close" on:click={()=> handleDelete(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
    color: #222222;
    font-size: 3.8rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  .num-display {
    position: absolute;
    top: -2rem;
    left: -1rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    text-align: center;
    font-size: 2.7rem;
    border: 1px #eee solid;
    padding: 1rem;
    background: #ff6a95;
    color: #ffffff;
  }
</style>