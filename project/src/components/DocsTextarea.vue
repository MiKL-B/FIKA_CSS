<template>
  <div class="sub-section-docs">
    <h3>Textarea</h3>
    <label for="textarea">Message</label>
    <textarea
      id="textarea"
      class="w-full"
      rows="5"
      placeholder="Your message here..."
    ></textarea>
    <label for="textareadisabled">Disabled</label>
    <textarea
      id="textareadisabled"
      class="w-full"
      rows="5"
      placeholder="Your message here..."
      disabled
    ></textarea>
    <pre class="code-example"><code>&lt;label for=&quot;textarea&quot;&gt;Message&lt;/label&gt;
&lt;textarea id=&quot;textarea&quot; class=&quot;w-full&quot; rows=&quot;5&quot; placeholder=&quot;Your message here...&quot;&gt;&lt;/textarea&gt;

&lt;!-- disabled --&gt;
&lt;label for=&quot;textareadisabled&quot;&gt;Disabled&lt;/label&gt;
&lt;textarea id=&quot;textareadisabled&quot; class=&quot;w-full&quot; rows=&quot;5&quot; placeholder=&quot;Your message here...&quot; disabled&gt;&lt;/textarea&gt;</code></pre>
  </div>
</template>

<script>
export default {
  name: "DocsTextarea",
};
</script>
