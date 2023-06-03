<script>
  // import { onMount, onDestroy } from 'svelte'
  import { FeedbackStore } from '../stores'
  import { scale, fade } from 'svelte/transition'
  import FeedbackItem from './feedbackItem.svelte'
  // export let feedback = []
  // const unsubscribe = FeedbackStore.subscribe((data) => feedback = data)


  // onMount(() => {
  //   console.log('mounted')
  // })
  
  // onDestroy( () => { unsubscribe() })
</script>

{#each $FeedbackStore as fb (fb.id)}
<div in:scale out:fade={{duration: 500}}>
  <FeedbackItem item={fb} />
</div>
{/each}