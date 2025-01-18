<template>
  <div>
    <nav class="justify-between">
      <div class="flex gap-4">
        <span>Logo</span>
        <a href="#">Home</a>
      </div>
      <button class="primary">Log in</button>
    </nav>
    <section class="bg-dark">
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

    <section class="bg-dark text-center">
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
  </div>
</template>
<script>
export default {
    name:"DocsLandingPage"
}
</script>
