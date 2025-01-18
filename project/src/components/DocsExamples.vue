<template>
  <div class="sub-section-docs">
    <h3>Examples</h3>
    <h4>Form</h4>
    <form>
      <label for="name">Name</label>
      <input type="name" placeholder="John Doe" class="w-full" />

      <label for="email">Email</label>
      <input type="email" placeholder="email@example.com" class="w-full" />

      <label for="password">Password</label>
      <input type="password" class="w-full" />

      <label>
        <input type="checkbox" />
        <span>Agree to terms and privacy</span>
      </label>

      <input type="submit" value="submit" class="button primary w-full" />
    </form>
    <pre class="code-example"><code>&lt;form&gt;
  &lt;label for=&quot;name&quot;&gt;Name&lt;/label&gt;
  &lt;input type=&quot;name&quot; placeholder=&quot;John Doe&quot; class=&quot;w-full&quot; /&gt;

  &lt;label for=&quot;email&quot;&gt;Email&lt;/label&gt;
  &lt;input type=&quot;email&quot; placeholder=&quot;email@example.com&quot; class=&quot;w-full&quot; /&gt;

  &lt;label for=&quot;password&quot;&gt;Password&lt;/label&gt;
  &lt;input type=&quot;password&quot; class=&quot;w-full&quot; /&gt;

  &lt;label&gt;
    &lt;input type=&quot;checkbox&quot; /&gt;
    &lt;span&gt;Agree to terms and privacy&lt;/span&gt;
  &lt;/label&gt;

  &lt;input type=&quot;submit&quot; value=&quot;submit&quot; class=&quot;button primary w-full&quot; /&gt;
&lt;/form&gt;</code></pre>

    <h4>Landing page</h4>
    <RouterLink to="/landingpage" target="_blank">To Landing page example</RouterLink>
    <!-- landing page -->
    <nav class="justify-between">
      <div class="flex gap-4">
        <span>Logo</span>
        <a href="#">Home</a>
      </div>
      <button class="primary">Log in</button>
    </nav>
    <section>
      <div class="container">
        <div class="row">
          <div class="col col-6 content-center">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              consequatur nostrum officiis quo animi cumque est alias quos,
              dolore labore!
            </h4>
            <a class="button primary" href="#">Get started</a>
          </div>
          <div class="col col-6">
            <img class="w-full" src="https://picsum.photos/800" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container text-center">
        <div class="row">
          <div class="col col-4">
            <h2>30%</h2>
            <h5>Value</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              unde?
            </p>
          </div>
          <div class="col col-4">
            <h2>60%</h2>
            <h5>Value</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              unde?
            </p>
          </div>
          <div class="col col-4">
            <h2>90%</h2>
            <h5>Value</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
              unde?
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center">
      <div class="container">
        <h3>Need help ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
          incidunt est optio quisquam veritatis ducimus, sunt ipsum similique
          impedit ex.!
        </p>
        <button class="primary flex mx-auto">Get started</button>
      </div>
    </section>

    <section>
      <div class="container">
        <h3 class="text-center">Images</h3>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          hic cum illo consequuntur nam perferendis cupiditate ad illum mollitia
          minus!
        </p>
        <div class="row">
          <div class="col col-6">
            <img class="w-full" src="https://picsum.photos/200" />
          </div>
          <div class="col col-6">
            <img class="w-full" src="https://picsum.photos/200" />
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col col-4">
            <p>List 1</p>
            <ul>
              <li><a href="#">Link 1</a></li>
              <li><a href="#">Link 2</a></li>
              <li><a href="#">Link 3</a></li>
              <li><a href="#">Link 4</a></li>
            </ul>
          </div>
          <div class="col col-4">
            <p>List 2</p>
            <ul>
              <li><a href="#">Link 5</a></li>
              <li><a href="#">Link 6</a></li>
              <li><a href="#">Link 7</a></li>
              <li><a href="#">Link 8</a></li>
            </ul>
          </div>
          <div class="col col-4">
            <p>Join us</p>
            <input type="email" placeholder="Enter your email" />
            <input type="submit" value="Subscribe" class="button primary" />
          </div>
        </div>
      </div>
    </footer>

    <!-- landing page code -->
     <pre class="code-example"><code>&lt;nav class=&quot;justify-between&quot;&gt;
  &lt;div class=&quot;flex gap-4&quot;&gt;
    &lt;span&gt;Logo&lt;/span&gt;
    &lt;a href=&quot;#&quot;&gt;Home&lt;/a&gt;
  &lt;/div&gt;
  &lt;button class=&quot;primary&quot;&gt;Log in&lt;/button&gt;
&lt;/nav&gt;
&lt;section&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;col col-6 content-center&quot;&gt;
        &lt;h4&gt;
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
          consequatur nostrum officiis quo animi cumque est alias quos,
          dolore labore!
        &lt;/h4&gt;
        &lt;a class=&quot;button primary&quot; href=&quot;#&quot;&gt;Get started&lt;/a&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col col-6&quot;&gt;
        &lt;img class=&quot;w-full&quot; src=&quot;https://picsum.photos/800&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;

&lt;section&gt;
  &lt;div class=&quot;container text-center&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;col col-4&quot;&gt;
        &lt;h2&gt;30%&lt;/h2&gt;
        &lt;h5&gt;Value&lt;/h5&gt;
        &lt;p&gt;
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
          unde?
        &lt;/p&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col col-4&quot;&gt;
        &lt;h2&gt;60%&lt;/h2&gt;
        &lt;h5&gt;Value&lt;/h5&gt;
        &lt;p&gt;
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
          unde?
        &lt;/p&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col col-4&quot;&gt;
        &lt;h2&gt;90%&lt;/h2&gt;
        &lt;h5&gt;Value&lt;/h5&gt;
        &lt;p&gt;
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
          unde?
        &lt;/p&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;

&lt;section class=&quot;text-center&quot;&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;h3&gt;Need help ?&lt;/h3&gt;
    &lt;p&gt;
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
      incidunt est optio quisquam veritatis ducimus, sunt ipsum similique
      impedit ex.!
    &lt;/p&gt;
    &lt;button class=&quot;primary flex mx-auto&quot;&gt;Get started&lt;/button&gt;
  &lt;/div&gt;
&lt;/section&gt;

&lt;section&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;h3 class=&quot;text-center&quot;&gt;Images&lt;/h3&gt;
    &lt;p class=&quot;text-center&quot;&gt;
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
      hic cum illo consequuntur nam perferendis cupiditate ad illum mollitia
      minus!
    &lt;/p&gt;
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;col col-6&quot;&gt;
        &lt;img class=&quot;w-full&quot; src=&quot;https://picsum.photos/200&quot; /&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col col-6&quot;&gt;
        &lt;img class=&quot;w-full&quot; src=&quot;https://picsum.photos/200&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/section&gt;
&lt;footer&gt;
  &lt;div class=&quot;container&quot;&gt;
    &lt;div class=&quot;row&quot;&gt;
      &lt;div class=&quot;col col-4&quot;&gt;
        &lt;p&gt;List 1&lt;/p&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 1&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 2&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 3&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 4&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col col-4&quot;&gt;
        &lt;p&gt;List 2&lt;/p&gt;
        &lt;ul&gt;
          &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 5&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 6&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 7&lt;/a&gt;&lt;/li&gt;
          &lt;li&gt;&lt;a href=&quot;#&quot;&gt;Link 8&lt;/a&gt;&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;div class=&quot;col col-4&quot;&gt;
        &lt;p&gt;Join us&lt;/p&gt;
        &lt;input type=&quot;email&quot; placeholder=&quot;Enter your email&quot; /&gt;
        &lt;input type=&quot;submit&quot; value=&quot;Subscribe&quot; class=&quot;button primary&quot; /&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/footer&gt;</code></pre>
  </div>
</template>

<script>
export default {
  name: "DocsExamples",
};
</script>
<style>
form {
  max-width: 450px;
  border: var(--border-color);
  border-radius: 5px;
  padding: 1rem;
}
</style>
