<template>
  <div class="contact-form">
    <h3>Contact</h3>
    <div class="flex gap-4">
      <a href="https://github.com/MiKL-B/" target="_blank">Github</a>
      <a
        href="mailto:michaelbecquer@protonmail.com"
        target="_blank"
        >Email me</a
      >
    </div>
    <p>Designed and created by Michaël BECQUER.</p>
  </div>
</template>
<script>
export default {
  name: "ContactView",
};
</script>
<style>
.contact-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 24px;
}
</style>
