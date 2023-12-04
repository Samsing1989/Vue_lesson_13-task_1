import { createStore } from 'vuex'
import subjects from './modules/subjects'
import teachers from './modules/teachers'
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { subjects, teachers },
})
