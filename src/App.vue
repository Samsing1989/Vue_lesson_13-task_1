<template>
    <router-view />
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 20px;
}

nav {
    padding: 30px;
    text-align: center;
    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
.button {
    margin-top: 20px;
    padding: 10px;
    transition: all 0.3s;
    font-size: 18px;
    color: white;
    background-color: #42b983;
    &:hover {
        background-color: #3cf3a1;
    }
}
</style>
