<template>
    <div class="icon"><font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" size="5x" /></div>
    <slot></slot>
</template>

<script>
export default {
    name: 'AuthMasterPage',
}
</script>

<style lang="scss" scoped>
.icon {
    margin-bottom: 10px;
}
</style>
