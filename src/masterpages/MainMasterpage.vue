<template>
    <div class="container">
        <div>
            <nav>
                <router-link to="/">Головна</router-link> |
                <router-link
                    :to="{
                        name: 'lesson-select',
                    }"
                    >Уроки</router-link
                >
                |
                <router-link to="/teachers">Вчителі</router-link>
            </nav>
        </div>
        <div>
            <div v-if="authParams">
                <span>{{ userName }}</span>
                <button class="button" @click="onLogout">Вихід</button>
            </div>
            <div v-else>
                <button class="button" @click="onLogin">Вхід</button>
            </div>
        </div>
    </div>
    <slot></slot>
</template>

<script>
export default {
    name: 'MainMasterpage',
    computed: {
        authParams() {
            const params = localStorage.getItem('authParams')
            return params ? JSON.parse(params) : null
        },
        userName() {
            return this.authParams?.userName
        },
    },
    methods: {
        onLogout() {
            localStorage.removeItem('authParams', '')
            this.$router.push({
                name: 'login',
            })
        },
        onLogin() {
            this.$router.push({
                name: 'login',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
span {
    margin: 10px;
}
</style>
