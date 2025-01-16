<template>
  <div class="section-docs">
    <h3>Input</h3>

    <!-- input type text -->
    <label for="name">Name</label>
    <input id="name" type="name" placeholder="John Doe" />
    <pre class="code-example"><code>&lt;!-- input type text --&gt;
&lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;
&lt;input id=&quot;name&quot; type=&quot;name&quot; placeholder=&quot;John Doe&quot; /&gt;</code></pre>

    <!-- input type email -->
    <label for="email">Email</label>
    <input id="email" type="email" placeholder="email@example.com" />
    <pre class="code-example"><code>&lt;!-- input type email --&gt;
&lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;
&lt;input id=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;email@example.com&quot; /&gt;</code></pre>

    <!-- input type password -->
    <label for="password">Password</label>
    <input id="password" type="password" placeholder="Password" />
    <pre class="code-example"><code>&lt;!-- input type password --&gt;
&lt;label for=&quot;password&quot;&gt;Password&lt;/label&gt;
&lt;input id=&quot;password&quot; type=&quot;password&quot; placeholder=&quot;Password&quot; /&gt;</code></pre>

    <!-- input type checkbox -->
    <label>
      <input type="checkbox" />
      <span>Checkbox</span>
    </label>
    <pre class="code-example"><code>&lt;!-- input type checkbox --&gt;
&lt;label&gt;
  &lt;input type=&quot;checkbox&quot; /&gt;
  &lt;span&gt;Checkbox&lt;/span&gt;
&lt;/label&gt;</code></pre>

    <!-- input type radio -->
    <label for="kraken">
      <input type="radio" id="kraken" name="monster" value="K" />
      <span>Kraken</span>
    </label>
    <label for="sasquatch">
      <input type="radio" id="sasquatch" name="monster" value="K" />
      <span>Sasquatch</span>
    </label>
    <label for="mothman">
      <input type="radio" id="mothman" name="monster" value="K" />
      <span>Mothman</span>
    </label>
    <pre class="code-example"><code>&lt;!-- input type radio --&gt;
&lt;label for=&quot;kraken&quot;&gt;
  &lt;input type=&quot;radio&quot; id=&quot;kraken&quot; name=&quot;monster&quot; value=&quot;K&quot; /&gt;
  &lt;span&gt;Kraken&lt;/span&gt;
&lt;/label&gt;
&lt;label for=&quot;sasquatch&quot;&gt;
  &lt;input type=&quot;radio&quot; id=&quot;sasquatch&quot; name=&quot;monster&quot; value=&quot;K&quot; /&gt;
  &lt;span&gt;Sasquatch&lt;/span&gt;
&lt;/label&gt;
&lt;label for=&quot;mothman&quot;&gt;
  &lt;input type=&quot;radio&quot; id=&quot;mothman&quot; name=&quot;monster&quot; value=&quot;K&quot; /&gt;
  &lt;span&gt;Mothman&lt;/span&gt;
&lt;/label&gt;</code></pre>

    <!-- input type date -->
    <label for="date">Date</label>
    <input id="date" type="date" />
    <pre class="code-example"><code>&lt;!-- input type date --&gt;
&lt;label for=&quot;date&quot;&gt;Date&lt;/label&gt;
&lt;input id=&quot;date&quot; type=&quot;date&quot; /&gt;</code></pre>

    <!-- input type color -->
    <label for="color">Color</label>
    <input id="color" type="color" />
    <pre class="code-example"><code>&lt;!-- input type color --&gt;
&lt;label for=&quot;color&quot;&gt;Color&lt;/label&gt;
&lt;input id=&quot;color&quot; type=&quot;color&quot; /&gt;</code></pre>

    <!-- input type range -->
    <label for="range">Range</label>
    <input id="range" type="range" />
    <pre class="code-example"><code>&lt;!-- input type range --&gt;
&lt;label for=&quot;range&quot;&gt;Range&lt;/label&gt;
&lt;input id=&quot;range&quot; type=&quot;range&quot; /&gt;</code></pre>

    <!-- input type file -->
    <label for="file">File</label>
    <input id="file" type="file" />
    <pre class="code-example"><code>&lt;!-- input type file --&gt;
&lt;label for=&quot;file&quot;&gt;File&lt;/label&gt;
&lt;input id=&quot;file&quot; type=&quot;file&quot; /&gt;</code></pre>

    <!-- input type number -->
    <label for="number">Number</label>
    <input id="numbeer" type="number" placeholder="1" />
    <pre class="code-example"><code>&lt;!-- input type number --&gt;
&lt;label for=&quot;number&quot;&gt;Number&lt;/label&gt;
&lt;input id=&quot;numbeer&quot; type=&quot;number&quot; placeholder=&quot;1&quot; /&gt;</code></pre>

    <!-- input type search -->
    <label for="search">Search</label>
    <input type="search" placeholder="Search" />
    <pre class="code-example"><code>&lt;!-- input type search --&gt;
&lt;label for=&quot;search&quot;&gt;Search&lt;/label&gt;
&lt;input type=&quot;search&quot; placeholder=&quot;Search&quot; /&gt;</code></pre>

    <!-- input type tel -->
    <label for="tel">Phone</label>
    <input id="tel" type="tel" placeholder="0102030405" />
    <pre class="code-example"><code>&lt;!-- input type tel --&gt;
&lt;label for=&quot;tel&quot;&gt;Phone&lt;/label&gt;
&lt;input id=&quot;tel&quot; type=&quot;tel&quot; placeholder=&quot;0102030405&quot; /&gt;</code></pre>
  </div>
</template>

<script>
export default {
  name: "DocsInput",
};
</script>
