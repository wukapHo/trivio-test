<template>
  <header class="header">
    <div class="container header__container">
      <div class="header__nav-wrapper">
        <div v-html="logo" class="header__logo" @click="selectedMenu = null" />

        <nav>
          <ul
            class="header__nav-list"
            @click.stop
          >
            <li
              v-for="item in mainMenu"
              :key="item.title"
              class="header__nav-item"
              :class="{ 'header__nav-item--active': selectedMenu === item }"
              @click="select(item)"
            >
              {{ item.title }}
            </li>
          </ul>
        </nav>

        <base-shortcut-menu
          class="header__burger"
          :contentPosition="'left'"
          @toggle="isBurgerOpen = $event"
        >
          <template #target>
            <burger-button :isActive="isBurgerOpen" />
          </template>

          <template #content>
            <burger-menu
             :mainMenu="mainMenu" :iconList="iconList" />
          </template>
        </base-shortcut-menu>

        <base-button :icon="cart">
          Пакеты услуг
        </base-button>
      </div>

      <div class="header__account-wrapper">
        <ul class="header__icon-list">
          <li v-for="item in iconList" :key="item.title">
            <base-icon :config="item" />
          </li>
        </ul>

        <base-shortcut-menu :contentPosition="'right'">
          <template #target>
            <user-avatar :username="accountInfo.username" />
          </template>

          <template #content>
            <user-menu :info="accountInfo" :options="accountOptions" />
          </template>
        </base-shortcut-menu>

        <locale-switcher />
      </div>
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/assets/svg/logo.svg?inline';
import CartIcon from '@/assets/svg/cart.svg?inline';
import BaseButton from '@/components/BaseButton.vue';
import BaseIcon from '@/components/BaseIcon.vue';
import UserAvatar from '@/components/UserAvatar.vue';
import UserMenu from '@/components/UserMenu.vue';
import BaseShortcutMenu from '@/components/BaseShortcutMenu.vue';
import BurgerButton from '@/components/BurgerButton.vue';
import BurgerMenu from '@/components/BurgerMenu.vue';
import LocaleSwitcher from '@/components/LocaleSwitcher.vue';

export default {
  name: 'AppHeader',

  components: {
    BaseButton,
    BaseIcon,
    UserAvatar,
    UserMenu,
    BaseShortcutMenu,
    BurgerButton,
    BurgerMenu,
    LocaleSwitcher,
  },

  props: {
    mainMenu: {
      type: Array,
      require: true,
    },

    iconList: {
      type: Array,
      require: true,
    },

    accountInfo: {
      type: Object,
      require: true,
    },
  },

  data: () => ({
    logo: LogoIcon,
    cart: CartIcon,
    isBurgerOpen: false,
    selectedMenu: null,

    accountOptions: [
      {
        title: 'Профиль',
        path: '#',
      },
      {
        title: 'Управление',
        path: '#',
      },
      {
        title: 'Моя компания',
        path: '#',
      },
      {
        title: 'Выйти',
        path: '#',
      },
    ],
  }),

  computed: {
    abbrUsername() {
      return this.accountInfo.username
        .split(' ')
        .map((item) => item[0])
        .join('');
    },
  },

  methods: {
    select(obj) {
      this.selectedMenu = obj;
    },
  },
};
</script>

<style lang="scss">
@import '../assets/styles/_variables.scss';

.header {
  padding: 20px 0;
  box-shadow: 0 6px 4px -4px rgba($color: $shadow, $alpha: 0.3);
    -webkit-box-shadow: 0 6px 4px -4px rgba($color: $shadow, $alpha: 0.3);
    -moz-box-shadow: 0 6px 4px -4px rgba($color: $shadow, $alpha: 0.3);

  @media (max-width: $width-tab) {
    padding: 10px 0;
  }

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: $width-tab) {
      flex-wrap: wrap;
    }
  }

  &__nav-wrapper {
    position: relative;
    display: flex;
    align-items: center;
  }

  &__logo {
    opacity: 0.8;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  &__burger {
    display: none;
    margin: 0 10px;

    @media (max-width: $width-desk-s) {
      display: block;
    }
  }

  &__nav-list {
    display: flex;
    align-items: center;
    margin-left: 10px;
    transition: 0.3s;

    @media (max-width: $width-desk-s) {
      display: none;
    }
  }

  &__nav-item {
    padding: 7px;
    opacity: 0.8;
    cursor: pointer;
    transition: 0.3s;

    &:hover,
    &--active {
      opacity: 1;
    }

    &--active {
      color: $blue;
      pointer-events: none;
      cursor: default;
    }
  }

  &__account-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }

  &__icon-list {
    display: flex;
    align-items: center;
    gap: 5px;

    @media (max-width: $width-desk-s) {
      display: none;
    }
  }
}
</style>
