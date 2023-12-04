import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LessonsView from '../views/LessonsView.vue'
import TeachersVies from '../views/TeachersVies.vue'
import PageNotFaund from '../views/PageNotFaund.vue'
import LoginPage from '../views/LoginPage.vue'
import LessonsSelectView from '../views/LessonsSelectView.vue'
import TeachersSelect from '../views/TeachersSelect.vue'
import LessonsPlan from '../views/LessonsPlan.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/lessons',
        name: 'lessons',
        component: LessonsView,
        meta: {
            requiredAuth: true,
        },
        children: [
            {
                path: 'select',
                name: 'lesson-select',
                component: LessonsSelectView,
                meta: {
                    requiredAuth: true,
                },
            },
            {
                path: ':subjectId(\\d+)+',
                name: 'teachers-select',
                component: TeachersSelect,
                meta: {
                    requiredAuth: true,
                },
                beforeEnter(to) {
                    if (!to.params.subjectId?.length)
                        return {
                            name: 'lesson-select',
                        }
                },
            },
            {
                path: ':lessonsIdsPairs(\\d+-\\d+)+',
                name: 'study-select',
                component: LessonsPlan,
                props: true,
                meta: {
                    requiredAuth: true,
                },
                beforeEnter(to, from) {
                    if (from.name !== 'teachers-select')
                        return {
                            name: 'pageNotFound',
                        }
                    if (!to.params.lessonsIdsPairs?.length)
                        return {
                            name: 'lesson-select',
                        }
                },
            },
        ],
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: TeachersVies,
        meta: {
            requiredAuth: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'pageNotFaund',
        component: PageNotFaund,
        meta: {
            requiredAuth: false,
        },
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    mode: 'history',
    routes,
})
router.beforeEach((to) => {
    const authParams = localStorage.getItem('authParams')
    if (to.meta.requiredAuth && !authParams)
        return {
            name: 'login',
        }
})

export default router
