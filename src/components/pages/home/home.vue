<template src='./home.html'>
</template>
<script type='text/babel'>
  import { mapGetters } from 'vuex';
  import Filters from '../../../js-modules/filters';
  const Home = {
    name: 'home',
    props: {},
    data() {
      return {
        message: 'not from store',
        iam: 'home',
        page_options: [],
      };
    },
    components: {  },
    methods: {
      setPath(index) {
        this.$store.commit('setPath', index);
      },
    },
    computed: {
      ...mapGetters({
        getPath: 'getPath',
      }),
      currentPath() {
        return this.$store.getters.getPath;
      },
    },
    filters: Filters,
  };

  export default Home;
</script>
<style lang='scss' src='./home.scss'>
</style>
