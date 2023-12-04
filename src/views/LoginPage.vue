<template>
    <auth-master-page>
        <div class="cont">
            <label class="lable">
                Логін
                <input v-model="userName" type="text" placeholder="Введіть логін" />
            </label>
        </div>
        <div class="cont">
            <label class="lable">
                Пароль
                <input v-model="password" type="password" />
            </label>
        </div>
        <button :disabled="!userName || !password" class="button" @click="onLogin">Логін</button>
    </auth-master-page>
</template>

<script>
import AuthMasterPage from '../masterpages/AuthMasterPage.vue'
export default {
    name: 'LoginPage',
    components: {
        AuthMasterPage,
    },

    data() {
        return {
            userName: null,
            password: null,
        }
    },
    methods: {
        onLogin() {
            localStorage.setItem(
                'authParams',
                JSON.stringify({
                    userName: this.userName,
                    token: 'testToken',
                })
            )
            this.$router.push({
                name: 'home',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.cont {
    max-width: 300px;
    margin: 0 auto;
}
.lable {
    gap: 10px;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
}
input {
    padding: 5px;
}
</style>
