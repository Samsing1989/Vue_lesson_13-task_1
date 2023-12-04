<template>
    <main-masterpage>
        <div class="icon">
            <font-awesome-icon :icon="['fas', 'ban']" size="10x" color="red" />
        </div>
    </main-masterpage>
</template>

<script>
import MainMasterpage from '@/masterpages/MainMasterpage.vue'
export default {
    name: 'PageNotFaund',
    components: { MainMasterpage },
}
</script>

<style lang="scss" scoped>
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    transition: all 0.3s;
    &:hover {
        transform: scale(1.1);
    }
}
</style>
