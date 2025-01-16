<template>
  <div class="section-docs">
    <h3>Image</h3>
    <h4>Standard</h4>
    <img alt="An image" src="https://picsum.photos/600/200" class="w-full"/>
    <pre class="code-example"><code>&lt;img alt=&quot;An image&quot; src=&quot;https://picsum.photos/600/200&quot; class=&quot;w-full&quot;/&gt;</code></pre>
    <h4>With a caption</h4>
    <figure>
      <img alt="An image" src="https://picsum.photos/600/200" class="w-full"/>
      <figcaption>This is an image</figcaption>
    </figure>
    <pre class="code-example"><code>&lt;figure&gt;
    &lt;img alt=&quot;An image&quot; src=&quot;https://picsum.photos/600/200&quot; class=&quot;w-full&quot;/&gt;
    &lt;figcaption&gt;This is an image&lt;/figcaption&gt;
&lt;/figure&gt;</code></pre>
  </div>
</template>
<script>
export default {
    name:"DocsImage"
}
</script>