<template src="./home-login.html">
</template>
<script type="text/babel">
  import { mapGetters } from 'vuex';
  import { API_URL } from '../../../../../config';
  import Api from '../../../../../services/api'
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
            window.localStorage.setItem('power_user', JSON.stringify(result.body.user)); // eslint-disable-line
            this.$store.commit('setToken', result.body.token);
            window.localStorage.setItem('power_token', result.body.token); // eslint-disable-line
            this.$router.push({ path: '/home' });
          },
        );
      },
      signUp(){
      	let data = {
      		user:{
			      name: this.name,
			      email: this.email,
			      password: this.password
          }

        }
      	Api.users.signUp(data).then(user=>{
      		console.log(user);
		      this.$router.push({ path: '' });
        })
      }
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
      if (window.localStorage.getItem('power_token')) { // eslint-disable-line
        this.$store.commit('setToken', window.localStorage.getItem('power_token')); // eslint-disable-line
        this.$router.push({ path: '/home' });
      }
    },
  };
  export default HomeLogin;
</script>
<style lang="scss" src="./home-login.scss">
</style>
