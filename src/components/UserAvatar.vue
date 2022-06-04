<template>
  <div class="user-avatar">
    {{ abbrUsername }}
  </div>
</template>

<script>
export default {
  name: 'UserAvatar',

  props: {
    username: { type: String, require: true },
  },

  computed: {
    abbrUsername() {
      return this.username
        .split(' ')
        .map((item) => item[0].toUpperCase())
        .join('');
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.user-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 1px solid transparent;
  border-radius: 10px;
  color: $light;
  font-size: 18px;
  background-color: $bg;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: $bg-hover;
  }

  &:active {
    border: 1px solid $main-color;
  }
}
</style>
