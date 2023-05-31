<script>
  import Card from './card.svelte'
  import Button from './button.svelte'
  let text = ''
  let btnDisabled = true
</script>
<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form>
    <!-- Rating Select -->
    <div class="input-group">
      <input type="text" placeholder="Tell us something that keeps you coming back">
      <Button type="submit" disabled={btnDisabled}>Rate</Button>
    </div>
  </form>
</Card>

<style>
  header{
    max-width: 400px;
    margin: auto;
  }
  
  .input-group{
    border: 2px solid #f1f1f1;
  }
</style>