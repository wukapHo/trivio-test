<template>
  <div class="base-shortcut-menu" @click.stop>
    <div
      class="base-shortcut-menu__target"
      :class="{ 'active': isContentOpen }"
      @click="toggleContent"
    >
      <slot name="target" />
    </div>

    <transition name="fade">
      <div
        v-if="isContentOpen"
        class="base-shortcut-menu__content"
        :class="{
          'base-shortcut-menu__content--left': contentPosition === 'left',
          'base-shortcut-menu__content--right': contentPosition === 'right',
        }"
      >
        <slot name="content" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ShortcutMenu',

  props: {
    contentPosition: { type: String, default: 'left' },
  },

  emits: {
    toggle: null,
  },

  data: () => ({
    isContentOpen: false,
  }),

  watch: {
    isContentOpen() {
      if (this.isContentOpen) {
        document.body.addEventListener('click', this.toggleContent);
      } else {
        document.body.removeEventListener('click', this.toggleContent);
      }
    },
  },

  methods: {
    toggleContent() {
      this.isContentOpen = !this.isContentOpen;
      this.$emit('toggle', this.isContentOpen);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.base-shortcut-menu {
  position: relative;

  &__content {
    position: absolute;
    top: 150%;
    z-index: 10;

    &--right {
      right: 0;
    }

    &--left {
      left: 0;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
