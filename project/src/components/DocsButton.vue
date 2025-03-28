<template>
  <div class="sub-section-docs">
    <h3>Button</h3>
    <button>Button</button>
    <pre class="code-example"><code>&lt;button&gt;Button&lt;/button&gt;</code></pre>
    <div class="flex gap-4">
      <a class="button">Anchor</a>
      <input type="button" value="button" />
      <input type="submit" value="submit" />
      <input type="reset" value="reset" />
    </div>
    <pre
      class="code-example"
    ><code>&lt;a class=&quot;button&quot;&gt;Anchor&lt;/a&gt;
&lt;input type=&quot;button&quot; value=&quot;button&quot; /&gt;
&lt;input type=&quot;submit&quot; value=&quot;submit&quot; /&gt;
&lt;input type=&quot;reset&quot; value=&quot;reset&quot;/&gt;</code></pre>
    <h4>Color</h4>
    <div class="flex gap-4">
      <button class="primary">Primary</button>
      <button class="danger">Danger</button>
      <button class="success">Success</button>
      <button class="warning">Warning</button>
      <button class="dark">Dark</button>
    </div>
    <pre class="code-example"><code>&lt;button class=&quot;primary&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;danger&quot;&gt;Danger&lt;/button&gt;
&lt;button class=&quot;success&quot;&gt;Success&lt;/button&gt;
&lt;button class=&quot;warning&quot;&gt;Warning&lt;/button&gt;
&lt;button class=&quot;dark&quot;&gt;Dark&lt;/button&gt;</code></pre>
  <h4>Outline</h4>  
  <div class="flex gap-4">
    <button class="primary outline">Primary</button>
    <button class="danger outline">Danger</button>
    <button class="success outline">Success</button>
    <button class="warning outline">Warning</button>
    <button class="dark outline">Dark</button>
  </div>
  <pre class="code-example"><code>&lt;button class=&quot;primary outline&quot;&gt;Primary&lt;/button&gt;
&lt;button class=&quot;danger outline&quot;&gt;Danger&lt;/button&gt;
&lt;button class=&quot;success outline&quot;&gt;Success&lt;/button&gt;
&lt;button class=&quot;warning outline&quot;&gt;Warning&lt;/button&gt;
&lt;button class=&quot;dark outline&quot;&gt;Dark&lt;/button&gt;</code></pre>
  <h4>Display</h4>
    <button class="w-full">Full width</button>
    <pre
      class="code-example"
    ><code>&lt;button class=&quot;w-full&quot;&gt;Full width&lt;/button&gt;</code></pre>
    <h4>State</h4>
    <button disabled>Disabled</button>
    <pre
      class="code-example"
    ><code>&lt;button disabled&gt;Disabled&lt;/button&gt;</code></pre>
  </div>
</template>
<script>
export default {
  name: "DocsButton",
};
</script>
