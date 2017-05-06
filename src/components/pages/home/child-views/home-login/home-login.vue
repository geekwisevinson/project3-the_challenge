<template src="./home-login.html">
</template>
<script type="text/babel">
  import { mapGetters } from 'vuex';
  import { API_URL } from '../../../../../config';
  import Filters from '../../../../../js-modules/filters';

  const HomeLogin = {
    name: 'home-login',
    data() {
      return {
        iam: 'home-login',
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        this.$http.post(`${API_URL}users/authenticate`,
          { email: this.email, password: this.password })
          .then((result) => {
            this.$store.commit('setLoggedInUser', result.body.user);
            window.localStorage.setItem('mcapi_user', JSON.stringify(result.body.user)); // eslint-disable-line
            this.$store.commit('setToken', result.body.token);
            window.localStorage.setItem('mcapi_token', result.body.token); // eslint-disable-line
            this.$router.push({ path: '/home' });
          },
        );
      },
    },
    computed: {
      ...mapGetters({
        setUser: 'setLoggedInUser',
        getToken: 'getToken',
      }),
    },
    filters: Filters,
    created() {
      this.message = this.$store.getters.getMessage;
      if (window.localStorage.getItem('mcapi_token')) { // eslint-disable-line
        this.$store.commit('setToken', window.localStorage.getItem('mcapi_token')); // eslint-disable-line
        this.$router.push({ path: '/home' });
      }
    },
  };
  export default HomeLogin;
</script>
<style lang="scss" src="./home-login.scss">
</style>
