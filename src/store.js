import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Emily Mendez' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    events: [
      { id: 1, title: '...', organizer: '...' },
      { id: 2, title: '...', organizer: '...' },
      { id: 3, title: '...', organizer: '...' },
      { id: 4, title: '...', organizer: '...' }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    catLength: state => {
      return state.categories.length
    }, // if length of cat changes, the getter will recalc & update accordingly
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }, // filter todos by those that are doneTodos
    activeTodosCount: (state, getters) => {
      return state.todos.length - getters.doneTodos.length
      // filter length of doneTodos
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
