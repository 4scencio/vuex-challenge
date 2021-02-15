<template>
  <div id="app">
    <div class="container">
      <transition mode="out-in">
        <component :is='$currentComponent' />
      </transition>
    </div>
  </div>
</template>

<script>
import FaqCategories from "./FaqCategories";
import Questions from './Questions';

export default {
  name: "Home",
  components: { FaqCategories, Questions },
  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent;
    },
  },
};
</script>

<style>
.container {
  background: #dadce7;
  display: flex;
  margin: auto;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.faq {
  padding: 2rem .250rem;
  background: rgb(63, 68, 82);
  background: radial-gradient(
    circle,
    rgba(63, 68, 82, 1) 0%,
    rgba(38, 40, 44, 1) 90%
  );
  color: #f5f6f8;
  font-size: 13px;
  text-align: center;
  border-radius: 15px;
  width: 305px;
  height: 29.839rem;
  box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
}
</style>
