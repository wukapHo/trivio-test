<template>
  <button
    class="burger-button"
    :class="{ 'burger-button--active': isActive }"
  >
    <span />
  </button>
</template>

<script>
export default {
  name: 'BurgerrButton',

  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.burger-button {
  position: relative;
  display: none;
  width: 35px;
  height: 35px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s;

  @media (max-width: $width-desk-s) {
    display: inline-block;
  }

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: calc(50% - 10px);
    width: 100%;
    height: 3px;
    background-color: $main-color;
    transform: translateY(-50%);
    transition: 0.3s;
  }

  &::after {
    top: calc(50% + 10px);
  }

  span {
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 3px;
    background-color: $main-color;
    transform: translateY(-50%);
    transition: 0.3s;
  }

  &--active {
    &::before {
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
    }

    &::after {
      top: 50%;
      transform: translateY(-50%) rotate(-45deg);
    }

    span {
      opacity: 0;
    }
  }
}
</style>
