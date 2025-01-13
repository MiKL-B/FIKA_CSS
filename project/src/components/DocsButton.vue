<template>
  <div class="section">
    <p>Buttons</p>
    <div class="flex">
      <button>Button</button>
      <button class="primary">Button</button>
      <button class="danger">Button</button>
      <a class="button">Anchor</a>
      <input type="submit" value="submit input" />
      <input type="button" value="button input" />
    </div>
    <pre class="code-example"><code>&lt;button&gt;Button&lt;/button&gt;
&lt;button class="primary"&gt;Button&lt;/button&gt;
&lt;button class="danger"&gt;Button&lt;/button&gt;

&lt;a class="button"&gt;Anchor&lt;/a&gt;
&lt;input type="submit" value="submit input"/&gt;
&lt;input type="submit" value="button input"/&gt;</code></pre>
  </div>
</template>
<script>
export default {
  name: "DocsButton",
};
</script>
