<script lang="ts" setup>
import ProfileItem from './ProfileItem.vue';
import { useUserStore } from '@/stores/user';

let user = useUserStore()
</script>

<template>
    <header>
        <a href="/" class="header__logo">
            Forms App
        </a>

        <nav class="header__nav">
            <div class="nav__item">Home</div>
            <div class="nav__item">All tests</div>
            <div class="nav__item">My tests</div>
        </nav>

        <div class="header__account">
            <button v-if="!user._id" class="header__login">Login</button>
            <ProfileItem v-else></ProfileItem>
        </div>

    </header>
</template>

<style scoped lang="scss">
header {
    // max-width: 100%;
    height: 60px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0 1px 4px #4f4f4f;
    background-color: #41b883;

    padding: 0 60px;

    .header__logo {
        font-size: 26px;
        color: #2b4560;

        text-decoration: none;
    }

    .header__nav {
        display: flex;
        align-items: center;
        gap: 30px;

        .nav__item {
            font-size: 22px;
            color: #34495e;

            cursor: pointer;

            transition: all 0.5s;

            &:hover {
                color: black;
            }
        }
    }

    .header__account {
        display: flex;
        align-items: center;
        gap: 10px;

        .header__login {
            border: 0;
            border-right: 4px solid #34495e;
            border-left: 4px solid #34495e;
            border-radius: 6px;

            padding: 4px 8px;

            background: #0000;

            font-size: 20px;
            font-weight: 600;
            color: #34495e;

            transition: all 0.5s;

            &:hover {
                color: black;
                border-color: black;

                cursor: pointer;
            }
        }
    }
}
</style>
