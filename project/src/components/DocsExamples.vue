<template>
  <div class="section">
    <h3>Examples</h3>
    <h4>Form</h4>
    <form>
      <label for="name">Name</label>
      <input type="name" placeholder="John Doe" class="w-full" />

      <label for="email">Email</label>
      <input type="email" placeholder="email@example.com" class="w-full" />

      <label for="password">Password</label>
      <input type="password" class="w-full" />

      <label>
        <input type="checkbox" />
        <span>Agree to terms and privacy</span>
      </label>

      <input type="submit" value="submit" class="button primary w-full" />
    </form>
    <pre class="code-example"><code>&lt;form class=&quot;form-example&quot;&gt;
  &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;
  &lt;input type=&quot;name&quot; placeholder=&quot;John Doe&quot; class=&quot;w-full&quot; /&gt;

  &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;
  &lt;input type=&quot;email&quot; placeholder=&quot;email@example.com&quot; class=&quot;w-full&quot; /&gt;

  &lt;label for=&quot;password&quot;&gt;Password&lt;/label&gt;
  &lt;input type=&quot;password&quot; class=&quot;w-full&quot; /&gt;

  &lt;label&gt;
    &lt;input type=&quot;checkbox&quot; /&gt;
    &lt;span&gt;Agree to terms and privacy&lt;/span&gt;
  &lt;/label&gt;

  &lt;input type=&quot;submit&quot; value=&quot;submit&quot; class=&quot;button primary w-full&quot; /&gt;
&lt;/form&gt;</code></pre>
    <p>Other examples will be available later.</p>

  </div>
</template>

<script>
export default {
  name: "DocsExamples",
};
</script>
<style>
form {
  max-width: 450px;
  border: var(--border-color);
  border-radius: 5px;
  padding: 1rem;
}
</style>
