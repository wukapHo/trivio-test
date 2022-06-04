<template>
  <button class="base-button" :class="{ 'base-button--iconed': icon }">
    <div v-if="icon" class="base-button__icon" v-html="icon" />

    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    icon: { type: String, require: true },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.base-button {
  position: relative;
  height: 35px;
  padding: 0 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 14px;
  background-color: $bg;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: $width-tab) {
    width: 35px;
    padding: 0;

    span {
      display: none;
    }
  }

  &:hover {
    background-color: $bg-hover;
  }

  &:active {
    border: 1px solid $main-color;
  }

  &--iconed {
    padding: 0 10px 0 25px;
  }

  &__icon {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);

    @media (max-width: $width-tab) {
      top: 50%;
      left: 50%;
      padding: 0;
      transform: translate(-50%, -50%);

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
