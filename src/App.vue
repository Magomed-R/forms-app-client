<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderComponent from './components/HeaderComponent.vue'
import { useUserStore } from './stores/user';
import axios from 'axios';
import { onBeforeMount } from 'vue';

let userStore = useUserStore()

onBeforeMount(async () => {
    if (localStorage.JWTToken) {
        let { _id, mail, name, forms } = (await axios("http://localhost:3010/auth")).data

        userStore._id = _id
        userStore.mail = mail
        userStore.name = name
        userStore.forms = forms
    }
})
</script>

<template>
    <HeaderComponent />
    <RouterView />
</template>

<style lang="scss"></style>
