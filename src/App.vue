<template>
  <app-header v-bind="{ mainMenu, iconList, accountInfo, }" />
  <index-page />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import IndexPage from '@/views/index.vue';
import SearchIcon from '@/assets/svg/search.svg?inline';
import HomeIcon from '@/assets/svg/home.svg?inline';
import HeartIcon from '@/assets/svg/heart.svg?inline';
import LocationIcon from '@/assets/svg/location.svg?inline';
import EnvelopeIcon from '@/assets/svg/envelope.svg?inline';

export default {
  components: {
    AppHeader,
    IndexPage,
  },

  data: () => ({
    mainMenu: [
      { title: 'Рабочий стол' },
      { title: 'Поездки' },
      { title: 'Оплаты' },
      { title: 'Мои документы' },
      { title: 'Финансы' },
    ],

    iconList: [
      {
        icon: SearchIcon,
        title: 'Search',
        badge: false,
        iconColor: 'blue',
      },
      {
        icon: HomeIcon,
        title: 'Home',
        badge: false,
        iconColor: 'brown',
      },
      {
        icon: HeartIcon,
        title: 'Heart',
        badge: 3,
        iconColor: 'purple',
      },
      {
        icon: LocationIcon,
        title: 'Location',
        badge: false,
        iconColor: 'pink',
      },
      {
        icon: EnvelopeIcon,
        title: 'Envelope',
        badge: true,
        iconColor: '',
      },
    ],

    accountInfo: {
      username: 'admin admin',
      balance: 9978,
      debt: 0,
    },
  }),
};
</script>

<style lang="scss">
@import './assets/styles/_variables.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: $main-color;
  font-family: 'Inter', sans-serif;
  list-style: none;
  text-decoration: none;
}

body {
  min-height: 100vh;
}

.container {
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 20px;

  @media (max-width: $width-desk-s) {
    max-width: 100%;
  }
}
</style>
