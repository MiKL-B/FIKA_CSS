<template>
  <div class="sub-section-docs">
    <h3>Separator</h3>
    <h4>Horizontal</h4>
    <hr />
    <pre class="code-example"><code>&lt;hr&gt;</code></pre>
    <h4>Vertical</h4>
    <p>You must define an height for the parent to display the vertical separator.</p>
    <div class="flex gap-4 h-4">
      <span>Element1</span>
      <hr class="vertical" />
      <span>Element2</span>
    </div>
    <pre class="code-example">
<code>&lt;div class="flex gap-4 h-4"&gt;
  &lt;span&gt;Element1&lt;/span&gt;
  &lt;hr class="vertical" /&gt;
  &lt;span&gt;Element2&lt;/span&gt;
&lt;/div&gt;</code></pre>
  </div>
</template>

<script>
export default {
  name: "DocsSeparator",
};
</script>
