<script lang="ts" setup>
import TestItem from '@/components/TestItem.vue';
import axios from 'axios';
import { onMounted, ref, type Ref } from 'vue';

interface ITest {
    _id: string,
    title: string,
    questions: [
        {
            case: string,
            answers: [
                {
                    name: string,
                    isAnswer: boolean,
                },
            ],
        },
    ],
    author: {
        _id: string
        mail: string,
        avatar: string
        name: string,
        password: string
    },
    cover: string,
    description: string,
    isOpen: {
        type: boolean,
        default: true,
    }
}

let tests: Ref<ITest[]> = ref([])

onMounted(async () => {
    const response = await axios.get("/form")
    tests.value = response.data
})
</script>

<template>
    <main>
        <h3>Все опросы</h3>

        <div class="test__list" v-if="tests">
            <div class="test__container" v-for="test in tests">
                <TestItem :key="test._id" :_id=test._id :title=test.title :description=test.description :cover=test.cover
                    :author=test.author :questions=test.questions></TestItem>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    box-shadow: 0 0 3px #0007;

    padding: 20px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    h3 {
        margin: 0;
    }

    .test__list {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
}
</style>