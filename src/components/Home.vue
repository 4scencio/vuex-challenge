<template>
  <div class="container">
    <transition
      :name="$transition"
      mode="out-in">
      <component :is='$currentComponent' />
    </transition>   
  </div>     
</template>

<script>
import FaqCategories from "./FaqCategories";
import Questions from './Questions';
import Answers from './Answers';

export default {
  name: "Home",
  components: { FaqCategories, Questions, Answers },
  computed: {
    $currentComponent() {
      return this.$store.getters.$currentComponent;
    },
    $transition() {
      return this.$store.getters.$transition
    }
  },
};
</script>

<style>

body,html {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}

.container {
  background: radial-gradient(
    circle,
    rgba(63, 68, 82, 1) 0%,
    rgba(38, 40, 44, 1) 90%
  );
  border-radius: 15px;
  width: 305px;
  height: 29.839rem;
  box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
}

.left-enter-from,
.right-enter-from {
  opacity: 0;
}
.left-enter-active,
.right-enter-active,
.left-leave-active,
.right-leave-active {
  transition: 0.4s;
}
.left-enter-to,
.right-enter-to {
  opacity: 1;
}
.left-leave-from,
.right-leave-from {
  opacity: 1;
}
.left-leave-to {
  opacity: 0;
}
.right-leave-to {
  opacity: 0;
}
</style>