<script lang="ts" setup>
import router from '@/router';
import type { PropType } from 'vue';
import ProfileItem from './ProfileItem.vue';

interface IQuestion {
    case: string,
    answers: [
        {
            name: string,
        },
    ],

}

let props = defineProps<{
    _id: string,
    title: string,
    description: string,
    cover: string,
    author: {
        _id: string,
        avatar: string
        mail: string,
        name: string,
        password: string
    },
    questions: [
        {
            case: string,
            answers: [
                {
                    name: string,
                    isAnswer: boolean,
                },
            ],
        }
    ]
}>()
</script>

<template>
    <div class="test">
        <div class="test__cover">
            <img :src="cover ? cover : '/src/assets/survey-stub.png'" alt="test cover" :class="{
                'empty-cover': !cover
            }">
        </div>
        <div class="test__info">
            <div class="test__metadata">
                <div class="test__title">{{ title }}</div>
                <div class="test__author">
                    <ProfileItem :author=author @click="router.push({ path: `/user/${_id}` })"></ProfileItem>
                </div>
            </div>
            <div class="test__description">{{ description }}</div>
            <div class="test__data">
                <div class="test__stats">
                    <div class="test__question-count">
                        <img src="@/assets/question.png">
                        <span>
                            {{ questions.length }}
                        </span>
                    </div>
                </div>
                <div class="test__go" @click="router.push({ path: `/test/${_id}` })">Пройти тест ➜</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.test {
    padding: 10px;

    display: flex;
    align-items: start;
    gap: 20px;

    box-shadow: 0 0 3px #0007;

    .test__cover {
        flex-basis: 20%;
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
        align-self: center;

        img {
            width: 100%;
        }

        .empty-cover {
            width: 100px;
        }
    }


    .test__info {
        flex-basis: 80%;

        display: flex;
        flex-direction: column;
        gap: 10px;

        .test__metadata {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .test__title {
                font-size: 24px;
            }

            .test__author {
                cursor: pointer;
            }
        }

        .test__description {
            overflow: hidden;
            text-overflow: ellipsis;

            display: -moz-box;
            display: -webkit-box;

            -moz-box-orient: vertical;
            -webkit-box-orient: vertical;
            box-orient: vertical;

            line-clamp: 2;
            -webkit-line-clamp: 2;
        }

        .test__data {
            display: flex;
            justify-content: space-between;
            align-items: center;
            justify-self: end;

            .test__stats {
                .test__question-count {
                    display: flex;
                    justify-content: start;
                    align-items: center;

                    img {
                        height: 1.5rem;
                    }
                }
            }

            .test__go {
                font-size: 20px;
                color: green;
                transition: all 0.5s;

                &:hover {
                    cursor: pointer;
                    color: #000;
                }
            }
        }
    }
}
</style>