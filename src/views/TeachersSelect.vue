<template>
    <h1>Вибір вчителів:</h1>
    <div>
        <subject-teachers-selects
            v-for="subId in subjectId"
            :key="subId"
            :subject-id="subId"
            @teacher-selected="onTeacherSelected(subId, $event)"
        />
    </div>
    <button class="button" @click="onStart">Розпочати навчаття</button>
</template>

<script>
import SubjectTeachersSelects from '../components/SubjectTeachersSelects.vue'
export default {
    name: 'TeachersSelect',
    components: {
        SubjectTeachersSelects,
    },
    data() {
        return {
            lessons: {},
        }
    },
    computed: {
        subjectId() {
            return this.$route.params.subjectId
        },
    },
    methods: {
        onTeacherSelected(subjectId, teacherId) {
            this.lessons[subjectId] = teacherId
        },
        onStart() {
            const lessonsIdsPairs = []
            for (const subId in this.lessons) {
                lessonsIdsPairs.push(`${subId} - ${this.lessons[subId]}`)
            }

            this.$router.push({
                name: 'study-select',
                params: {
                    lessonsIdsPairs,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
