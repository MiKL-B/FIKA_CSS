<template>
  <div class="section-docs">
    <h3>Datalist</h3>
    <label for="browser">Choose your browser:</label>
    <input list="browsers" name="browser" id="browser" placeholder="Enter text here..."/>
    <datalist id="browsers">
      <option value="Edge"></option>
      <option value="Firefox"></option>
      <option value="Chrome"></option>
      <option value="Opera"></option>
      <option value="Safari"></option>
    </datalist>
    <pre class="code-example"><code>&lt;label for=&quot;browser&quot;&gt;Choose your browser:&lt;/label&gt;
&lt;input list=&quot;browsers&quot; name=&quot;browser&quot; id=&quot;browser&quot; /&gt;
&lt;datalist id=&quot;browsers&quot;&gt;
  &lt;option value=&quot;Edge&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Firefox&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Chrome&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Opera&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;Safari&quot;&gt;&lt;/option&gt;
&lt;/datalist&gt;</code></pre>
  </div>
</template>

<script>
export default {
  name: "DocsDatalist",
};
</script>
