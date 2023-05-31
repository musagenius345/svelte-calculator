<script>
  import FeedbackList from './lib/feedbackList.svelte'
  import FeedbackForm from './lib/feedbackForm.svelte'
  import FeedbackStats from './lib/feedbackStats.svelte'
  let feedback = [
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cum dignissimos unde, consequuntur voluptate autem explicabo corporis vero distinctio, iure, consequatur dolorem tempore animi tenetur! Assumenda ab odio, expedita nisi.'
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cum dignissimos unde, consequuntur voluptate autem explicabo corporis vero distinctio, iure, consequatur dolorem tempore animi tenetur! Assumenda ab odio, expedita nisi.'
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cum dignissimos unde, consequuntur voluptate autem explicabo corporis vero distinctio, iure, consequatur dolorem tempore animi tenetur! Assumenda ab odio, expedita nisi.'
    },
    {
      id: 4,
      rating: 7,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat cum dignissimos unde, consequuntur voluptate autem explicabo corporis vero distinctio, iure, consequatur dolorem tempore animi tenetur! Assumenda ab odio, expedita nisi.'
    }
    ]
  
  const deleteFeedback = (e) => {
    const itemId = e.detail
    feedback = feedback.filter((item) => item.id != itemId)
  }
  
  $: count = feedback.length
  $: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length
</script>

  <h3>Hello</h3>
<main class="container">
  <FeedbackForm />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-feedback={deleteFeedback} />
</main>
