<template>
  <div class="section">
    <p>Lists</p>
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
  </div>
</template>

<script>
export default {
  name: "DocsLists",
};
</script>
