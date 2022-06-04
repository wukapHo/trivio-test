<template>
  <div
    class="base-icon"
    :class="{
      'base-icon--blue': config.iconColor === 'blue',
      'base-icon--brown': config.iconColor === 'brown',
      'base-icon--purple': config.iconColor === 'purple',
      'base-icon--pink': config.iconColor === 'pink',
    }"
    :title="config.title"
  >
    <div v-if="config.badge === true" class="base-icon__badge" />
    <div v-else-if="config.badge" class="base-icon__badge base-icon__badge--num">
      {{ config.badge }}
    </div>

    <div v-html="config.icon" />
  </div>
</template>

<script>
export default {
  name: 'BaseIcon',

  props: {
    config: { type: Object, require: true },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';

.base-icon {
  position: relative;
  width: 35px;
  height: 35px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;

  svg {
    transition: 0.3s;
  }

  &--blue {
    svg {
      fill: $blue;
    }
  }

  &--brown {
    svg {
      fill: $brown;
    }
  }

  &--purple {
    svg {
      fill: $purple;
    }
  }

  &--pink {
    svg {
      fill: $pink;
    }
  }

  &:hover {
    background-color: $bg;

    svg {
      fill: $light;
    }

    .base-icon__badge {
      background-color: $shadow;
    }

    .base-icon__badge--num {
      color: $shadow;
      background-color: transparent;
    }
  }

  &__badge {
    position: absolute;
    top: 0;
    right: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: $red;
    transition: 0.3s;

    &--num {
      color: $red;
      font-size: 0.75rem;
      font-weight: 700;
      background-color: transparent;
    }
  }
}
</style>
