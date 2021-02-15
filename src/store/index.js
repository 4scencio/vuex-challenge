import { createStore } from 'vuex'
import { faqCategories } from '../utils/db.json'

export default createStore({
  state: {
    faqAllCategories: [],
    faqSingleCategory: [],
    faqSingleQuestion: [],
    transition: '',
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
    SET_CURRENT_COMPONENT(state, payload) {
      state.currentComponent = payload
    },
    SET_TRANSITION(state, payload) {
      state.transition = payload
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
    changeCurrentComponent(context, payload) {
      context.commit('SET_CURRENT_COMPONENT', payload)
    },
    changeTransition(context, payload) {
      context.commit('SET_TRANSITION', payload)
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
    $currentComponent(state) {
      return state.currentComponent
    },
    $transition(state) {
      return state.transition
    }
  }
})
