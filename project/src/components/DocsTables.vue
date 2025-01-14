<template>
  <div class="section">
    <h3>Tables</h3>
    <table class="w-full">
      <thead>
        <tr>
          <th>Coffee Type</th>
          <th>Description</th>
          <th>Volume (ml)</th>
          <th>Price ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Café Latte</td>
          <td>Espresso with steamed milk.</td>
          <td>240</td>
          <td>4.50</td>
        </tr>
        <tr>
          <td>Macchiato</td>
          <td>Espresso with a touch of milk.</td>
          <td>120</td>
          <td>3.50</td>
        </tr>
        <tr>
          <td>Cappuccino</td>
          <td>Espresso with milk foam.</td>
          <td>240</td>
          <td>4.00</td>
        </tr>
      </tbody>
    </table>
    <pre class="code-example"><code>&lt;table class=&quot;w-full&quot;&gt;
&lt;thead&gt;
  &lt;tr&gt;
    &lt;th&gt;Coffee Type&lt;/th&gt;
    &lt;th&gt;Description&lt;/th&gt;
    &lt;th&gt;Volume (ml)&lt;/th&gt;
    &lt;th&gt;Price ($)&lt;/th&gt;
  &lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
  &lt;tr&gt;
    &lt;td&gt;Caf&eacute; Latte&lt;/td&gt;
    &lt;td&gt;Espresso with steamed milk.&lt;/td&gt;
    &lt;td&gt;240&lt;/td&gt;
    &lt;td&gt;4.50&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Macchiato&lt;/td&gt;
    &lt;td&gt;Espresso with a touch of milk.&lt;/td&gt;
    &lt;td&gt;120&lt;/td&gt;
    &lt;td&gt;3.50&lt;/td&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;Cappuccino&lt;/td&gt;
    &lt;td&gt;Espresso with milk foam.&lt;/td&gt;
    &lt;td&gt;240&lt;/td&gt;
    &lt;td&gt;4.00&lt;/td&gt;
  &lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;</code></pre>
  </div>
</template>

<script>
export default {
  name: "DocsTables",
};
</script>
