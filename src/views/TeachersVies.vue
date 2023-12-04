<template>
    <main-masterpage>
        <h1>Вчителі</h1>
        <div v-for="teacher in getTeachersList" :key="teacher.id">{{ teacher.name }}</div>
    </main-masterpage>
</template>

<script>
import { mapGetters } from 'vuex'
import MainMasterpage from '../masterpages/MainMasterpage'
export default {
    name: 'LessonsView',
    components: { MainMasterpage },

    computed: {
        ...mapGetters('teachers', ['getTeachersList']),
    },
}
</script>

<style lang="scss" scoped></style>
