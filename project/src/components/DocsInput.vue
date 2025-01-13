<template>
<div class="section">
        <p>Input</p>

        <!-- input type text -->
        <div class="field">
          <label for="name">Name</label>
          <input id="name" type="name" placeholder="John Doe" />
        </div>

        <!-- input type email -->
        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="email@example.com" />
        </div>

        <!-- input type password -->
        <div class="field">
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Password" />
        </div>

        <!-- input type checkbox -->
        <div class="field">
          <label>
            <input type="checkbox" />
            <span>Checkbox</span>
          </label>
        </div>

        <!-- input type radio -->
        <div class="field">
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
        </div>

        <!-- input type date -->
        <div class="field">
          <label for="date">Date</label>
          <input id="date" type="date" />
        </div>

        <!-- input type color -->
        <div class="field">
          <label for="color">Color</label>
          <input id="color" type="color" />
        </div>

        <!-- input type range -->
        <div class="field">
          <label for="range">Range</label>
          <input id="range" type="range" />
        </div>

        <!-- input type file -->
        <div class="field">
          <label for="file">File</label>
          <input id="file" type="file" />
        </div>

        <!-- input type number -->
        <div class="field">
          <label for="number">Number</label>
          <input id="numbeer" type="number" placeholder="1" />
        </div>

        <!-- input type search -->
        <div class="field">
          <label for="search">Search</label>
          <input type="search" placeholder="Search" />
        </div>

        <!-- input type tel -->
        <div class="field">
          <label for="tel">Phone</label>
          <input id="tel" type="tel" placeholder="0102030405" />
        </div>

        <pre class="code-example">
<code>&lt;!-- input type text --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;
  &lt;input id=&quot;name&quot; type=&quot;name&quot; placeholder=&quot;John Doe&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type email --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;
  &lt;input id=&quot;email&quot; type=&quot;email&quot; placeholder=&quot;email@example.com&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type password --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;password&quot;&gt;Password&lt;/label&gt;
  &lt;input id=&quot;password&quot; type=&quot;password&quot; placeholder=&quot;Password&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type checkbox --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label&gt;
    &lt;input type=&quot;checkbox&quot; /&gt;
    &lt;span&gt;Checkbox&lt;/span&gt;
  &lt;/label&gt;
&lt;/div&gt;

&lt;!-- input type radio --&gt;
&lt;div class=&quot;field&quot;&gt;
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
  &lt;/label&gt;
&lt;/div&gt;

&lt;!-- input type date --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;date&quot;&gt;Date&lt;/label&gt;
  &lt;input id=&quot;date&quot; type=&quot;date&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type color --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;color&quot;&gt;Color&lt;/label&gt;
  &lt;input id=&quot;color&quot; type=&quot;color&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type range --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;range&quot;&gt;Range&lt;/label&gt;
  &lt;input id=&quot;range&quot; type=&quot;range&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type file --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;file&quot;&gt;File&lt;/label&gt;
  &lt;input id=&quot;file&quot; type=&quot;file&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type number --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;number&quot;&gt;Number&lt;/label&gt;
  &lt;input id=&quot;numbeer&quot; type=&quot;number&quot; placeholder=&quot;1&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type search --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;search&quot;&gt;Search&lt;/label&gt;
  &lt;input type=&quot;search&quot; placeholder=&quot;Search&quot; /&gt;
&lt;/div&gt;

&lt;!-- input type tel --&gt;
&lt;div class=&quot;field&quot;&gt;
  &lt;label for=&quot;tel&quot;&gt;Phone&lt;/label&gt;
  &lt;input id=&quot;tel&quot; type=&quot;tel&quot; placeholder=&quot;0102030405&quot; /&gt;
&lt;/div&gt;</code></pre>
      </div>
</template>

<script>
export default {
    name:"DocsInput"
}
</script>