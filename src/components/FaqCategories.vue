<template>
  <div class="container">
    <div class="faq">
      <img alt="Logo" src="../assets/images/astronaut.svg" />
      <h1>Perguntas Frequentes</h1>
      <span>Escolha a categoria desejada:</span>
      <br /><br /><br /><br />
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
    },
  }
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
}

h1 {
  font-size: 26px;
}

span {
  font-size: 16px;
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
  width: 350px;
  height: 550px;
  box-shadow: 0px 8px 21px 3px rgba(0, 0, 0, 0.19);
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
</style>
