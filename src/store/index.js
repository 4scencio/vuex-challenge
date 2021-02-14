import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    faqAllCategories: [],
    faqSingleCategory: [],
    faqSingleQuestion: [],
    faqSingleAnswer: [],
    currentComponent: 'FaqCategories'
  },
  mutations: {
    SET_FAQ_CATEGORIES(state, faqAllCategories) {
      state.faqAllCategories = faqAllCategories
    },
    SET_FAQ_SINGLE_CATEGORY(state, payload) {
      state.faqSingleCategory = payload
    },
    SET_FAQ_SINGLE_QUESTION(state, payload) {
      state.faqSingleQuestion = payload
    },
    SET_FAQ_SINGLE_ANSWER(state, payload) {
      state.faqSingleAnswer = payload
    },
    SET_CURRENT_COMPONENT(state, payload) {
      state.currentComponent = payload
    }
  },
  actions: {
    fetchFaqCategories(context) {
      const FaqHome = faqCategories
      context.commit('SET_FAQ_CATEGORIES', FaqHome)
    },
    getSingleCategory(context, payload) {
      context.commit('SET_FAQ_SINGLE_CATEGORY', payload)
    },
    getSingleQuestion(context, payload) {
      context.commit('SET_FAQ_SINGLE_QUESTION', payload)
    },
    getSingleAnswer(context, payload) {
      context.commit('SET_FAQ_SINGLE_ANSWER', payload)
    },
    changeCurrentComponent(context, payload) {
      context.commit('SET_CURRENT_COMPONENT', payload)
    }
  },
  getters: {
    $FaqHomePage(state) {
      return state.faqAllCategories
    },
    $singleCategory(state) {
      return state.faqSingleCategory
    },
    $singleQuestion(state) {
      return state.faqSingleQuestion
    },
    $singleAnswer(state) {
      return state.faqSingleAnswer
    },
    $currentComponent(state) {
      return state.currentComponent
    }
  }
})
