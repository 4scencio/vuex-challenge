<template>
  <div class="container">
    <div class="faq">
        <div class="image-heading">
            <img alt="Logo" src="../assets/images/astronaut.svg" />
        </div>
        <div class="text-heading">
            <h1 style="margin-bottom: 5px;">Perguntas frequentes</h1>
            <span style="font-size: 0.830rem">Escolha a categoria desejada</span>
        </div>
      <br /><br />
      <div class="heading">
        <ul class="categories">
          <li
            class="category-item"
            v-for="categorie in $FaqHomePage"
            :key="categorie.id"
            @click="goToQuestion(categorie)"
          >
            <img
              :src="categoryIconPath(categorie.icon)"
              :alt="`Icone do ${categorie.title}`"
            />
            <span>{{ categorie.title }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqCategories",
  created() {
    this.$store.dispatch("fetchFaqCategories");
  },
  computed: {
    $FaqHomePage() {
      return this.$store.getters.$FaqHomePage;
    }
  },
  methods: {
    categoryIconPath(icon) {
      return require(`@/assets/images/${icon}`);
    },
    goToQuestion(category) {
      this.$store.dispatch('changeCurrentComponent', 'Questions')
      this.$store.dispatch('getSingleCategory', category)
      this.$store.dispatch('changeTransition', 'left')
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


ul,
li {
  list-style: none;
  margin: auto;
}

h1 {
  font-size: 1.25rem;
}

span {
  font-size: 1rem;
}

.faq {
  padding: 1rem .250rem;
  color: #f5f6f8;
  font-size: 13px;
  text-align: center;
  border-radius: 15px;
}

.category-item {
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: center;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.6s;
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

.image-heading {
    width: 242px;
    margin: auto;
}

.text-heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 2.1rem;
}
</style>
