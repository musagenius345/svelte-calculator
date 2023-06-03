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
  
  
  
  const addFeedback = (e) => {
    const newFeedback = e.detail
    feedback= [newFeedback, ...feedback]
  }
  
  
</script>

<main class="container">
  <FeedbackForm on:add-feedback={addFeedback} />
  <FeedbackStats />
  <FeedbackList  />
</main>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:global(body) {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
  color: #222222;
  background-color: #ffe66b ;
  overflow-x: hidden;
  
}

ul {
  list-style: none;
}

.container {
  margin: 10rem auto;
  padding: 0 4rem;
}

  
</style>