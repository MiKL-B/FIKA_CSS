<template>
  <div class="section">
    <h3>Typography</h3>
    <h4>Heading</h4>
    <h1>Heading</h1>
    <h2>Heading</h2>
    <h3>Heading</h3>
    <h4>Heading</h4>
    <h5>Heading</h5>
    <h6>Heading</h6>

    <pre class="code-example"><code>&lt;h1&gt;Heading&lt;/h1&gt;
&lt;h2&gt;Heading&lt;/h2&gt;
&lt;h3&gt;Heading&lt;/h3&gt;
&lt;h4&gt;Heading&lt;/h4&gt;
&lt;h5&gt;Heading&lt;/h5&gt;
&lt;h6&gt;Heading&lt;/h6&gt;</code></pre>

    <!-- link -->
    <h4>Link</h4>
    <a href="#">Link</a>
    <pre
      class="code-example"
    ><code>&lt;a href=&quot;#&quot;&gt;Link&lt;/a&gt;</code></pre>
    <h4>Color</h4>
    <p>Color can be applied to links, paragraph, span as well as titles</p>
    <div class="flex gap-4">
      <span class="primary">Span</span>
      <span class="success">Span</span>
      <span class="warning">Span</span>
      <span class="danger">Span</span>
    </div>
    <pre
      class="code-example"
    ><code>&lt;span class=&quot;primary&quot;&gt;Span&lt;/span&gt;
&lt;span class=&quot;success&quot;&gt;Span&lt;/span&gt;
&lt;span class=&quot;warning&quot;&gt;Span&lt;/span&gt;
&lt;span class=&quot;danger&quot;&gt;Span&lt;/span&gt;</code></pre>
  </div>
</template>
<script>
export default {
  name: "DocsTypography",
};
</script>
