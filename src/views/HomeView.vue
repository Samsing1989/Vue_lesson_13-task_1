<template>
    <main-masterpage>
        <div class="home">
            <p>Вітаємо на сайті школи</p>
            <p>У нашій школі учень сам вибирає уроки і вчителів</p>
            <p>Увійдіть для повноціного використання</p>
        </div>
    </main-masterpage>
</template>

<script>
import MainMasterpage from '../masterpages/MainMasterpage'
export default {
    name: 'HomeView',
    components: {
        MainMasterpage,
    },
}
</script>
