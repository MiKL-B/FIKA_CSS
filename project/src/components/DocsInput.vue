<template>
  <div class="sub-section-docs">
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

    <!-- disabled -->
    <label for="fielddisabled">Field disabled</label>
    <input id="fielddisabled" type="text" disabled placeholder="Disabled" />
    <pre class="code-example"><code>&lt;!-- disabled --&gt;
&lt;label for=&quot;fielddisabled&quot;&gt;Field disabled&lt;/label&gt;
&lt;input id=&quot;fielddisabled&quot; type=&quot;text&quot; placeholder=&quot;Disabled&quot; /&gt;</code></pre>

    <!-- input type checkbox -->
    <label>
      <input type="checkbox" />
      <span>Checkbox</span>
    </label>
    <label>
      <input type="checkbox" disabled />
      <span>Checkbox</span>
    </label>
    <pre class="code-example"><code>&lt;!-- input type checkbox --&gt;
&lt;label&gt;
  &lt;input type=&quot;checkbox&quot; /&gt;
  &lt;span&gt;Checkbox&lt;/span&gt;
&lt;/label&gt;

&lt;!-- disabled --&gt;
&lt;label&gt;
  &lt;input type=&quot;checkbox&quot; disabled /&gt;
  &lt;span&gt;Checkbox&lt;/span&gt;
&lt;/label&gt;</code></pre>
    <!-- input type radio -->
    <label for="radio1">
      <input type="radio" id="radio1" name="radio" value="r" />
      <span>Radio 1</span>
    </label>
    <label for="radio2">
      <input type="radio" id="radio2" name="radio" value="r" />
      <span>Radio 2</span>
    </label>
    <label for="radio3">
      <input type="radio" id="radio3" name="radio" value="r" />
      <span>Radio 3</span>
    </label>
    <!-- disabled -->
    <label for="radio4">
      <input type="radio" id="radio4" name="radio" value="r" disabled />
      <span>Radio 4</span>
    </label>
    <pre class="code-example"><code>&lt;!-- input type radio --&gt;
&lt;label for=&quot;radio1&quot;&gt;
  &lt;input type=&quot;radio&quot; id=&quot;radio1&quot; name=&quot;radio&quot; value=&quot;r&quot; /&gt;
  &lt;span&gt;Radio 1&lt;/span&gt;
&lt;/label&gt;
&lt;label for=&quot;radio2&quot;&gt;
  &lt;input type=&quot;radio&quot; id=&quot;radio2&quot; name=&quot;radio&quot; value=&quot;r&quot; /&gt;
  &lt;span&gt;Radio 2&lt;/span&gt;
&lt;/label&gt;
&lt;label for=&quot;radio3&quot;&gt;
  &lt;input type=&quot;radio&quot; id=&quot;radio3&quot; name=&quot;radio&quot; value=&quot;r&quot; /&gt;
  &lt;span&gt;Radio 3&lt;/span&gt;
&lt;/label&gt;

&lt;!-- disabled --&gt;
&lt;label for=&quot;radio4&quot;&gt;
  &lt;input type=&quot;radio&quot; id=&quot;radio4&quot; name=&quot;radio&quot; value=&quot;r&quot; disabled /&gt;
  &lt;span&gt;Radio 4&lt;/span&gt;
&lt;/label&gt;</code></pre>

    <!-- input type date -->
    <label for="date">Date</label>
    <input id="date" type="date" />
    <!-- disabled -->
    <label for="datedisabled">Disabled</label>
    <input id="datedisabled" type="date" disabled/>
    <pre class="code-example"><code>&lt;!-- input type date --&gt;
&lt;label for=&quot;date&quot;&gt;Date&lt;/label&gt;
&lt;input id=&quot;date&quot; type=&quot;date&quot; /&gt;

&lt;!-- disabled --&gt;
&lt;label for=&quot;datedisabled&quot;&gt;Disabled&lt;/label&gt;
&lt;input id=&quot;datedisabled&quot; type=&quot;date&quot; disabled /&gt;</code></pre>

    <!-- input type color -->
    <label for="color">Color</label>
    <input id="color" type="color" />
    <!-- disabled -->
    <label for="colordisabled">Disabled</label>
    <input id="colordisabled" type="color" disabled />
    <pre class="code-example"><code>&lt;!-- input type color --&gt;
&lt;label for=&quot;color&quot;&gt;Color&lt;/label&gt;
&lt;input id=&quot;color&quot; type=&quot;color&quot; /&gt;

&lt;!-- disabled --&gt;
&lt;label for=&quot;colordisabled&quot;&gt;Disabled&lt;/label&gt;
&lt;input id=&quot;colordisabled&quot; type=&quot;color&quot; disabled /&gt;</code></pre>

    <!-- input type range -->
    <label for="range">Range</label>
    <input id="range" type="range" />
    <!-- disabled -->
    <label for="rangedisabled">Disabled</label>
    <input id="rangedisabled" type="range" disabled/>
    <pre class="code-example"><code>&lt;!-- input type range --&gt;
&lt;label for=&quot;range&quot;&gt;Range&lt;/label&gt;
&lt;input id=&quot;range&quot; type=&quot;range&quot; /&gt;

&lt;!-- disabled --&gt;
&lt;label for=&quot;rangedisabled&quot;&gt;Disabled&lt;/label&gt;
&lt;input id=&quot;rangedisabled&quot; type=&quot;range&quot; disabled /&gt;</code></pre>

    <!-- input type file -->
    <label for="file">File</label>
    <input id="file" type="file" />
    <!-- disabled -->
    <label for="filedisabled">Disabled</label>
    <input id="filedisabled" type="file" disabled/>
    <pre class="code-example"><code>&lt;!-- input type file --&gt;
&lt;label for=&quot;file&quot;&gt;File&lt;/label&gt;
&lt;input id=&quot;file&quot; type=&quot;file&quot; /&gt;

&lt;!-- disabled --&gt;
&lt;label for=&quot;filedisabled&quot;&gt;Disabled&lt;/label&gt;
&lt;input id=&quot;filedisabled&quot; type=&quot;file&quot; disabled /&gt;</code></pre>

    <!-- input type number -->
    <label for="number">Number</label>
    <input id="number" type="number" placeholder="1" />
    <!-- disabled -->
    <label for="numberdisabled">Disabled</label>
    <input id="numberdisabled" type="number" placeholder="1" disabled />
    <pre class="code-example"><code>&lt;!-- input type number --&gt;
&lt;label for=&quot;number&quot;&gt;Number&lt;/label&gt;
&lt;input id=&quot;numbeer&quot; type=&quot;number&quot; placeholder=&quot;1&quot; /&gt;

&lt;!-- disabled --&gt;
&lt;label for=&quot;numberdisabled&quot;&gt;Disabled&lt;/label&gt;
&lt;input id=&quot;numberdisabled&quot; type=&quot;number&quot; placeholder=&quot;1&quot; disabled /&gt;</code></pre>

    <!-- input type search -->
    <label for="search">Search</label>
    <input type="search" placeholder="Search" />
    <!-- disabled -->
    <label for="searchdisabled">Disabled</label>
    <input type="searchdisabled" placeholder="Search" disabled/>
    <pre class="code-example"><code>&lt;!-- input type search --&gt;
&lt;label for=&quot;search&quot;&gt;Search&lt;/label&gt;
&lt;input type=&quot;search&quot; placeholder=&quot;Search&quot; /&gt;

&lt;!-- disabled --&gt;
&lt;label for=&quot;searchdisabled&quot;&gt;Disabled&lt;/label&gt;
&lt;input type=&quot;searchdisabled&quot; placeholder=&quot;Search&quot; disabled /&gt;</code></pre>

    <!-- input type tel -->
    <label for="tel">Phone</label>
    <input id="tel" type="tel" placeholder="0102030405" />
    <!-- disabled -->
    <label for="teldisabled">Disabled</label>
    <input id="teldisabled" type="tel" placeholder="0102030405" disabled />
    <pre class="code-example"><code>&lt;!-- input type tel --&gt;
&lt;label for=&quot;tel&quot;&gt;Phone&lt;/label&gt;
&lt;input id=&quot;tel&quot; type=&quot;tel&quot; placeholder=&quot;0102030405&quot; /&gt;
&lt;!-- disabled --&gt;
&lt;label for=&quot;teldisabled&quot;&gt;Disabled&lt;/label&gt;
&lt;input id=&quot;teldisabled&quot; type=&quot;tel&quot; placeholder=&quot;0102030405&quot; disabled /&gt;</code></pre>
  </div>
</template>

<script>
export default {
  name: "DocsInput",
};
</script>
