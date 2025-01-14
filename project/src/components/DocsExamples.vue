<template>
  <div class="section">
    <h3>Examples</h3>
    <h4>Form</h4>
    <form class="form-example">
      <div class="grid cols-2 gap-4">
        <div class="">
          <label for="name">Name</label>
          <input type="name" placeholder="John Doe" />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" placeholder="email@example.com" />
        </div>
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input type="password" />
      </div>
      <div class="field">
        <label>
          <input type="checkbox" />
          <span>Agree to terms and privacy</span>
        </label>
      </div>
      <input type="submit" value="submit" class="button primary" />
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
  display: flex;
  flex-direction: column;
  width: 450px;
}

</style>
