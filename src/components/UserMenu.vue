<template>
  <div class="user-menu">
    <p class="user-menu__title">{{ formattedInfo.username }}</p>

    <div class="user-menu__description">
      <p>Тривио</p>
      <p>Баланс: {{ formattedInfo.balance }}</p>
      <p>Задолженность: {{ formattedInfo.debt }}</p>
    </div>

    <ul class="user-menu__options">
      <li
        v-for="option in options"
        :key="option.title"
        class="user-menu__button"
        :class="{ 'user-menu__button--out': option.title === 'Выйти' }"
      >
        {{ option.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UserMenu',

  props: {
    info: { type: Object, require: true },
    options: { type: Array, require: true },
  },

  computed: {
    formattedInfo() {
      const username = this.info.username
        .split(' ')
        .map((item) => `${item[0].toUpperCase()}${item.slice(1)}`)
        .join(' ');

      return {
        username,
        balance: this.info.balance.toFixed(2),
        debt: this.info.debt.toFixed(2),
      };
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/variables';

.user-menu {
  min-width: 220px;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: $light;
  box-shadow: 0px 0px 8px 5px rgba($color: $shadow, $alpha: 0.2);
    -webkit-box-shadow: 0px 0px 8px 5px rgba($color: $shadow, $alpha: 0.2);
    -moz-box-shadow: 0px 0px 8px 5px rgba($color: $shadow, $alpha: 0.2);

  &__title {
    font-size: 18px;
    font-weight: 700;
  }

  &__description {
    margin-top: 10px;
    font-size: 14px;

    p {
      color: rgba($color: $main-color, $alpha: 0.5);
    }
  }

  &__options {
    display: inline-flex;
    flex-direction: column;
    margin-top: 10px;

    & > li:not(:last-child) {
      margin-bottom: 10px;
    }

    & > li:last-child {
      padding-top: 10px;
    }
  }

  &__button {
    opacity: 0.8;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }

    &--out {
      &:hover {
        color: $red;
      }
    }
  }
}
</style>
