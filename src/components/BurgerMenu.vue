<template>
  <div class="burger-menu">
    <ul class="burger-menu__icon-list">
      <li v-for="icon in iconList" :key="icon.title">
        <base-icon :config="icon" />
      </li>
    </ul>
    <ul class="burger-menu__option-list">
      <li
        v-for="item in mainMenu"
        :key="item.title"
        :title="item.title"
        class="burger-menu__option"
        :class="{ 'burger-menu__option--active': selectedItem === item }"
        @click="selectMenuItem(item)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon.vue';

export default {
  name: 'BurgerMenu',

  components: {
    BaseIcon,
  },

  props: {
    mainMenu: { type: Array, require: true },
    iconList: { type: Array, default: () => ([]) },
  },

  emits: {
    select: null,
  },

  data: () => ({
    selectedItem: null,
  }),

  methods: {
    selectMenuItem(item) {
      this.selectedItem = item;
      this.$emit('select', this.selectedItem);
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.burger-menu {
  min-width: 220px;
  width: 100%;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: $light;
  box-shadow: 0px 0px 8px 5px rgba($color: $shadow, $alpha: 0.2);
    -webkit-box-shadow: 0px 0px 8px 5px rgba($color: $shadow, $alpha: 0.2);
    -moz-box-shadow: 0px 0px 8px 5px rgba($color: $shadow, $alpha: 0.2);

  &__icon-list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    box-shadow: 0 6px 4px -4px rgba($color: $shadow, $alpha: 0.3);
      -webkit-box-shadow: 0 6px 4px -4px rgba($color: $shadow, $alpha: 0.3);
      -moz-box-shadow: 0 6px 4px -4px rgba($color: $shadow, $alpha: 0.3);
  }

  &__option-list  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding-top: 10px;
  }

  &__option {
    opacity: 0.8;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }

    &--active {
      color: $blue;
      pointer-events: none;
      cursor: default;
    }
  }
}
</style>
