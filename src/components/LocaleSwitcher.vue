<template>
  <button
    class="locale-switcher"
    title="Locale switcher"
    v-html="localeIcons[locale]"
    @click="switchLocale"
  />
</template>

<script>
import RuIcon from '@/assets/svg/ru.svg?inline';
import EnIcon from '@/assets/svg/en.svg?inline';

export default {
  name: 'LocaleSwitcher',

  data: () => ({
    locale: 'ru',
    localeIcons: {
      ru: RuIcon,
      en: EnIcon,
    },
  }),

  methods: {
    switchLocale() {
      this.locale = this.locale === 'ru' ? 'en' : 'ru';
    },
  },
};
</script>

<style lang="scss">
.locale-switcher {
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
  }
}
</style>
