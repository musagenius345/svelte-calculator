<script>
  export let item
  import Card from './card.svelte'
  import { createEventDispatcher } from 'svelte'
  
  const dispatch = createEventDispatcher()
  
  
  const handleDelete = (itemId) => {
    dispatch('delete-feedback', itemId)
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}

  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">
    {item.text}
  </p>
</Card>

<style>
  .close{
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
    color: #222222;
    font-size: 1.62rem
  }
  
  .num-display{
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    text-align: center;
    font-size: 19px;
    border: 1px #eee solid;
    padding: 10px;
    background: #ff6a95;
  }

</style>