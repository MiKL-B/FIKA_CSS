<template>
  <div class="section">
    <p>Datalist</p>
    <label for="browser">Choose your browser from the list:</label>
    <input list="browsers" name="browser" id="browser" />

    <datalist id="browsers">
      <option value="Edge"></option>
      <option value="Firefox"></option>
      <option value="Chrome"></option>
      <option value="Opera"></option>
      <option value="Safari"></option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: "DocsDatalist",
};
</script>
