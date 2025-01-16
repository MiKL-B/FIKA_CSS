<template>
  <div class="section-docs">
    <h3>Theme</h3>
    <p>You can set theme by adding attribute "data-theme" to your html tag.</p>
    <p>The value of the attribute is "light" or "dark".</p>
    <div class="boxs-example">
      <div class="box-example box-light">
        <h5>Light</h5>
        <input type="text" placeholder="Enter text here" />
        <button class="primary">Submit</button>
      </div>
      <div class="box-example box-dark">
        <h5>Dark</h5>
        <input type="text" placeholder="Enter text here" />
        <button class="primary">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DocsTheme",
  data() {
    return {};
  },
};
</script>
<style>
.boxs-example {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.box-example {
  border: var(--border-color);
  height: 200px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
}
.box-light {
  background: white;
  color: var(--grey);
}
.box-light input {
  color: var(--grey);
}
.box-dark {
  background: var(--background);
  color: var(--white);
}
.box-dark input {
  color: var(--white);
}
@media screen and (min-width: 768px) {
  .boxs-example {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
