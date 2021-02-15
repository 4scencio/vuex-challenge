<template>
  <div class="container">
    <Home />
  </div>
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
.container {
  background: rgba(250, 250, 250, 0.068);
  border-radius: 15px;
  width: 305px;
  height: 29.839rem;
  box-shadow: 0px 8px 21px 3px rgba(117, 113, 113, 0.19);
  border: 1px solid transparent;
}
</style>
