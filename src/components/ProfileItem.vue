<script setup lang="ts">
import { onMounted } from 'vue';


let props = defineProps<{
    author: {
        name: string,
        avatar: string
    }
}>()

onMounted(() => {
    if (props.author.avatar) document.body.style.setProperty('--avatar-url', `url(${props.author.avatar})`)
})
</script>

<template>
    <div class="account__profile">
        <div class="account__name">Magomed-R</div>
        <div class="account__avatar"></div>
    </div>
</template>

<style lang="scss">
:root {
    --avatar-url: url("")
}
.account__profile {
    display: flex;
    align-items: center;
    gap: 10px;

    .account__name {
        font-size: 20px;
    }

    .account__avatar {
        background: var(--avatar-url) 0 0/100% auto no-repeat;

        width: 40px;
        height: 40px;

        border-radius: 50%;

        outline: 3px solid #0007;
    }
}
</style>