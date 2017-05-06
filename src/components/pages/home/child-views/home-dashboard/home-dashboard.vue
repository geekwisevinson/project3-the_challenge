<template src="./home-dashboard.html">
</template>
<script type="text/babel">
  import { mapGetters } from 'vuex';
  import Filters from '../../../../../js-modules/filters';

  const Dashboard = {
    name: 'home-dashboard',
    props: {},
    data() {
      return {
        iam: 'home-dashboard',
      };
    },
    computed: {
      ...mapGetters({
        getLoggedInUser: 'getLoggedInUser',
      }),
    },
    filters: Filters,
  };
  export default Dashboard;
</script>
<style lang="scss" src="./home-dashboard.scss">
</style>
