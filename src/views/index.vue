<template>
  <main class="main">
    <div class="container">
      <p class="main__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consectetur dolore quod omnis perferendis ipsam eos dolor quis!
        Nesciunt, mollitia iusto officiis nobis quae corrupti, recusandae illo fuga vero animi sunt.
      </p>
      <p class="main__text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Consectetur dolore quod omnis perferendis ipsam eos dolor quis!
        Nesciunt, mollitia iusto officiis nobis quae corrupti, recusandae illo fuga vero animi sunt.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
};
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';

.main {
  margin: 0 auto;
  width: 90%;

  @media (max-width: $width-tab) {
    width: 100%;
  }

  &__text {
    margin-top: 20px;
  }
}
</style>
