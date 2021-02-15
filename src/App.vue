<template>
      <Home />
</template>

<script>
import Home from './components/Home'


export default {
  name: 'App',
  components: {
    Home
  },
  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent;
    },
  },
}
</script>

<style>

</style>
