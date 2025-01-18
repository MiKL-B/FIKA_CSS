<template>
  <div class="sub-section-docs">
    <h3>Lists</h3>
    <!-- unordered list -->
    <ul>
      <li>Item 1</li>
      <li>
        Item 2
        <ul>
          <li>Item 2.1</li>
          <li>Item 2.2</li>
        </ul>
      </li>
      <li>Item 3</li>
    </ul>

    <!-- ordered list -->
    <ol>
      <li>Item 1</li>
      <li>
        Item 2
        <ul>
          <li>Item 2.1</li>
          <li>Item 2.2</li>
        </ul>
      </li>
      <li>Item 3</li>
    </ol>
    <pre class="code-example"><code>&lt;!-- unordered list --&gt;
&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;
    Item 2
    &lt;ul&gt;
      &lt;li&gt;Item 2.1&lt;/li&gt;
      &lt;li&gt;Item 2.2&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- ordered list --&gt;
&lt;ol&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;
    Item 2
    &lt;ul&gt;
      &lt;li&gt;Item 2.1&lt;/li&gt;
      &lt;li&gt;Item 2.2&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ol&gt;</code></pre>
  </div>
</template>

<script>
export default {
  name: "DocsLists",
};
</script>
