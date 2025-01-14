<template>
  <div class="section">
    <h3>Examples</h3>
    <h4>Form</h4>
    <form class="form-example">
      <div class="grid cols-2 gap-4">
        <div>
          <label for="name">Name</label>
          <input type="name" placeholder="John Doe" class="w-full" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" placeholder="email@example.com" class="w-full" />
        </div>
      </div>
      <div >
        <label for="password">Password</label>
        <input type="password"  class="w-full"/>
      </div>
      <label>
        <input type="checkbox" />
        <span>Agree to terms and privacy</span>
      </label>

      <input type="submit" value="submit" class="button primary w-full" />
    </form>
  </div>
</template>

<script>
export default {
  name: "DocsExamples",
};
</script>
<style>
.form-example {
  max-width: 450px;
  border:var(--border-color);
  border-radius: 5px;
  padding:1rem;
}
</style>
