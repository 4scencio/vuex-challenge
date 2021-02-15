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
      this.$store.dispatch('changeTransition', 'right')
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.faq {
  background: transparent;
  padding: 1rem .250rem;
  color: #f5f6f8;
  font-size: 13px;
  text-align: center;
}

.category-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.6s;
  margin-top: 4px;
}

.category-item > img {
  margin-left: 2em;
  width: 30px;
}

.category-item > span {
  text-align: left;
}

.category-item:hover {
  background-color: #3f4452;
}

.icon > img {
    width: 1.5rem;
    display: flex;
    margin: auto;
    margin-top: 10px;
}

.arrow {
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  transition: 0.2s ease-in-out;
  padding: 5px;
  width: 39px;
  margin-top: 10px;
  
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
    margin-top: 10px;
    text-align: left;
}

</style>
