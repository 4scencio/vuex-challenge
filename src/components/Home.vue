<template>
<div class="stars">
  <div class="twinkling">
    <div class="clouds">
      <div class="container">
        <transition
          :name="$transition"
          mode="out-in"
          class="">
          <component :is='$currentComponent' />
        </transition>   
    </div>
    </div>
  </div>
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
  }
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
  background: rgba(250, 250, 250, 0.068);
  border-radius: 15px;
  width: 305px;
  height: 29.839rem;
  box-shadow: 0px 8px 21px 3px rgba(117, 113, 113, 0.19);
  border: 1px solid transparent;
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

.stars, .twinkling, .clouds {
	position: absolute;
	display: block;
	top:0; bottom:0;
	left:0; right:0;
	width:100%; height:100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.stars {
	z-index: 0;
	background: #000 url('https://image.ibb.co/mjnygo/stars.png') repeat top center;

}

.twinkling{
	z-index: 1;
	background:transparent url('https://image.ibb.co/ir1DE8/twinkling.png') repeat top center;
	animation: move-twink-back 200s linear infinite;
}

.clouds{
	z-index: 2;
  background:transparent url('https://image.ibb.co/bT4N7T/clouds.png') repeat top center;
	animation: move-clouds-back 200s linear infinite;
}

@keyframes move-twink-back {
	from {background-position:0 0;}
	to {background-position:-10000px 5000px;}
}

@keyframes move-clouds-back {
	from {background-position:0 0;}
	to {background-position:10000px 0;}
}
</style>