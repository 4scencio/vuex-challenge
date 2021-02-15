<template>
  <div class="container">
    <div class="faq">
      <div class="top-info">
          <img src="../assets/images/arrow-back.svg" class="arrow" @click="backCategories">
        <div class="header">
                    <h2>{{ $singleQuestion.title }}</h2>
                    </div>
                </div>
                <div class="content" v-html="$singleQuestion.content">
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: "Answers",
  computed: {
    $singleQuestion() {
      return this.$store.getters.$singleQuestion
    }
  },
  methods: {
    categoryIconPath(icon) {
      return require(`@/assets/images/${icon}`);
    },
    backCategories() {
      this.$store.dispatch('changeCurrentComponent', 'Questions')
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
}

.header {
    margin: auto;
    margin-top: 17px;
    text-align: left;
}

.content {
    text-align: left;
    padding: 1rem;
}

</style>
