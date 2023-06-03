<script>
  // import {v4 as uuidv4} from './uuid/v4.js'
  import Card from './card.svelte'
  import RatingSelect from './ratingSelect.svelte'
  import Button from './button.svelte'
  import { createEventDispatcher } from 'svelte'

  let text = ''
  let btnDisabled = true
  let min = 10
  // let rating;
  let message = null



  const handleSelect = e => rating = e.detail
  const dispatch = createEventDispatcher()
  
  

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`
      btnDisabled = true
    } else {
      message = null
      btnDisabled = false
    }
  }

  const handleSubmit = () => {
    if (text.trim().length > min) {
      const newFeedback = {
        id: Math.random() * 1000,
        text,
        rating: +rating
      }

      dispatch('add-feedback', newFeedback)
      text = ''
    }
  }
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-select={handleSelect} />
    <div class="input-group">
      <input type="text" on:input={handleInput} bind:value={text} placeholder="Tell us something that keeps you coming back">
      <Button type="submit" disabled={btnDisabled}>Rate</Button>
    </div>

    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style lang="scss">
header {
max-width: 40rem;
margin: auto;
}

header h2 {
font-size: 3rem;
font-weight: 600;
text-align: center;
}

.input-group {
display: flex;
flex-direction: row;
border: 1px solid #ccc;
padding: .8rem 1rem;
border-radius: 8px;
margin-top: 1.5rem;
gap: .8em;
}

input {
flex-grow: 2;
border: none;
font-size: 2.3rem;
padding: 0.4em;
border-radius: 10px;
}

input:focus {
outline: 2px #DCB700 solid;
/* flex-grow: 100%; */

}

.message {
padding-top: 1rem;
text-align: center;
color: rebeccapurple;
}
</style>