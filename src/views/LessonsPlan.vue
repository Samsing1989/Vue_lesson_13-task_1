<template>
    <div>
        <h1>Навчальний план</h1>
        <lesson-paid-preview
            v-for="lessonPairIds in lessonsIdsPairs"
            :key="lessonPairIds"
            :lesson-pair="lessonPairIds"
        />
    </div>
</template>

<script>
import LessonPaidPreview from '../components/LessonPaidPreview.vue'
export default {
    name: 'LessonsPlan',
    components: {
        LessonPaidPreview,
    },
    props: {
        lessonsIdsPairs: {
            type: Array,
            default: () => [],
        },
    },
}
</script>

<style lang="scss" scoped></style>
