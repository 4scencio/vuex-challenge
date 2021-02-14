<template>
  <div class="container">
    <div class="faq">
      <div class="top-info">
        <img src="../assets/images/arrow-back.svg" class="arrow" @click="backCategories">
        <div class="header">
          <h2>{{ $singleCategory.title }}</h2>
        <p>Selecione uma pergunta</p>
        </div>
        <div class="icon">
            <img :src="categoryIconPath($singleCategory.icon)" alt="">
        </div>
      </div>
      <div
        class="heading"
        v-for="question in $singleCategory.questions"
        :key="question.id"
      >
        <ul class="categories">
          <li class="category-item">
            <span> {{ question.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questions",
  computed: {
    $singleCategory() {
      return this.$store.getters.$singleCategory
    }
  },
  methods: {
    categoryIconPath(icon) {
      return require(`@/assets/images/${icon}`);
    },
    backCategories() {
      this.$store.dispatch('changeCurrentComponent', 'FaqCategories')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  
  background-color: #dadce7;
}

ul,
li {
  list-style: none;
  margin: auto;
  display: list-item;
}

h1 {
  font-size: 1.25rem;
}

h2 {
    font-size: 1.20rem;
}

p {
    font-size: .813rem;
}

span {
  font-size: 1rem;
}

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

.category-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.6s;
  margin-left: -5px;
  margin-top: 4px;
}

.category-item > img {
  margin-left: 2em;
  width: 30px;
}

.category-item > span {
  margin-left: 2em;
}

.category-item:hover {
  background-color: #3f4452;
}

.icon > img {
    width: 1.5rem;
    display: flex;
    margin: auto;
}

.arrow {
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px;
  transition: 0.2s ease-in-out;
  
}

.arrow:hover {
    background-color: black;
}

.top-info {
    padding: 0 1.25rem 1.875rem 1.25rem;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 1rem;
    align-items: center;
    border-bottom: 1px solid #404451;
}

.header {
    margin: auto;
    text-align: left;
}

</style>
