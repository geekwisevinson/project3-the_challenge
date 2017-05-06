<template src="./layout-two.html">
</template>
<script type="text/babel">
  import { mapGetters } from 'vuex';
  import Filters from '../../js-modules/filters';
  Stripe.setPublishableKey('pk_test_bgrSAB1K9P16FUWdWUXbnAwh');

  const LayoutTwo = {
    name: 'layout-two',
    providers: ['example'],
    data() {
      return {
        title: 'Layout-two',
      };
    },
    methods: {
      logout() {
        this.$store.commit('setLoggedInUser', { name: 'no user logged in' });
        this.$store.commit('setToken', '');
        window.localStorage.setItem('mcapi_user', ''); // eslint-disable-line
        window.localStorage.setItem('mcapi_token', ''); // eslint-disable-line
        this.$router.push({ path: '/home/login' });
      },
      checkActive(value) {
        const test = this.$route.path.split('/').filter(item => item);
        return (value === test[0]);
      },
    },
    computed: {
      ...mapGetters({
        getPath: 'getPath',
        getLoggedInUser: 'getLoggedInUser',
        getShowModal: 'getShowModal',
        getEnrollModal: 'getEnrollModal',
      }),
      currentPath() {
        return this.$store.getters.getPath;
      },
      basePath() {
        return `/${this.getPath.split('/')[1]}`;
      },

    },
    watch: {
      $route(newValue) {
        if (newValue.name) {
          document.title = newValue.name.toUpperCase(); // eslint-disable-line
        } else {
          document.title = 'Power Up'; // eslint-disable-line
        }

        this.$store.commit('setPath', newValue.path);
        if (this.$store.getters.getLoggedInUser.name === 'no user logged in') {
          this.$router.push({ path: '/home/login' });
        }
      },
    },
    filters: Filters,

    created() {
      if (window.localStorage.getItem('mcapi_user') === '' || !window.localStorage.getItem('mcapi_user')) { // eslint-disable-line
        this.$router.push({ path: '/home/login' });
      } else {
        this.$store.commit('setLoggedInUser', JSON.parse(window.localStorage.getItem('mcapi_user'))); // eslint-disable-line
        this.$store.commit('setToken', window.localStorage.getItem('mcapi_token')); // eslint-disable-line
      }
    },
  };
  export default LayoutTwo;
</script>
<style lang="scss" src="./layout-two.scss">
</style>
