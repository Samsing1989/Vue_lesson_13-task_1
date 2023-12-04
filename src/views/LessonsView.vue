<template>
    <main-masterpage>
        <router-view />
    </main-masterpage>
</template>

<script>
import MainMasterpage from '../masterpages/MainMasterpage.vue'
export default {
    name: 'LessonsView',
    components: { MainMasterpage },
}
</script>

<style lang="scss" scoped></style>
