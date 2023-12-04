<template>
    <h1>Виберіть уроки:</h1>
    <div class="select-container">
        <div v-for="subject in getSubjectsList" :key="subject.id" class="select">
            <label class="lable"
                >{{ subject.title }} <input v-model="selectedSubjects" :value="subject.id" type="checkbox"
            /></label>
        </div>
    </div>
    <button :disabled="notSelection" class="button" @click="onSelect">Вибрати вчителів</button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'LessonsSelectView',
    data() {
        return {
            selectedSubjects: [],
        }
    },
    computed: {
        ...mapGetters('subjects', ['getSubjectsList']),
        notSelection() {
            return !this.selectedSubjects.length
        },
    },
    methods: {
        onSelect() {
            this.$router.push({
                name: 'teachers-select',
                params: {
                    subjectId: this.selectedSubjects,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.select-container {
    display: flex;
    align-items: center;
    flex-direction: column;
}
.select {
    width: 300px;
    border: 2px solid #000;
    margin-bottom: 5px;
    display: flex;
    padding: 5px;
}
.lable {
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}
</style>
