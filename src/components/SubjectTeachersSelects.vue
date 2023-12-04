<template>
    <div class="selec-container">
        <label class="label">
            {{ subjectTitle }}
            <select v-model="selectedTeacher" class="select" @change="onChange">
                <option v-for="teacher in teachersList" :key="teacher.id" :value="teacher.id" class="option">
                    {{ teacher.name }}
                </option>
            </select>
        </label>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SubjectTeachersSelects',
    props: {
        subjectId: {
            type: [Number, String],
            required: true,
        },
    },

    data() {
        return {
            selectedTeacher: null,
        }
    },
    computed: {
        ...mapGetters('subjects', ['getSubjectById']),
        ...mapGetters('teachers', ['getTeachersBySubjectId']),

        subjectTitle() {
            return this.getSubjectById(parseInt(this.subjectId))?.title
        },
        teachersList() {
            return this.getTeachersBySubjectId(parseInt(this.subjectId))
        },
    },
    methods: {
        onChange() {
            this.$emit('teacher-selected', this.selectedTeacher)
        },
    },
}
</script>

<style lang="scss" scoped>
.selec-container {
    max-width: 500px;
    margin: 0 auto;
    border: 2px solid #000;
    padding: 5px;
}
.label {
    display: flex;
    justify-content: space-between;
}
.select {
    width: 250px;
    padding: 5px;
}
.option {
    font-size: 20px;
    line-height: 1.4;
}
</style>
