<script setup lang="ts">
</script>

<template>
    <main>
        <h2>О проекте</h2>

        <p>Forms App - это программное обеспечение для создания и прохождения онлайн опросов</p>

        <h2>Разделы</h2>

        <ul>
            <li>В разделе <a href="/tests/all">All tests</a> вы можете выбрать и пройти любой открытый опрос</li>
            <li>В разделе <a href="/tests/my">My tests</a> вы можете создать, изменить или удалить свои опросы</li>
        </ul>

        <p><b>Примечание: </b>если вы установили флажок "закрытый опрос" при создании опроса, то он имеет доступ только по
            ссылке, и не будет показан в списке "All tests"</p>
        <h3>О разработчике</h3>

        <p>Данное приложение разработал я, Magomed-R. Код этого и других моих веб-приложений вы можете посмотреть на моём <a
                href="https://github/magomed-r">GitHub</a>
        </p>

        <p>
            Связаться со мной:
        </p>

        <div class="messagers">
            <a target="_blank" href="https://github/magomed-r">
                <img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" width="60" title="Github">
            </a>
            <a target="_blank" href="https://t.me/a_temp_file">
                <img src="../assets/telegram-logo.svg" title="Telegram" width="48">
            </a>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    box-shadow: 0 0 5px #0007;

    padding: 20px;

    h2 {
        margin: 0;
    }

    .messagers {
        display: flex;
        align-items: center;
    }
}
</style>