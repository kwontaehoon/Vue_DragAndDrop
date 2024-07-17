<template>
    <li v-for="item in items">
        {{ item.message }}
    </li>

    <li v-for="(item, index) in items">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>

    <ul>
        <li v-for="value in myObject">
            {{ value }}
        </li>
    </ul>

    <li v-for="(value, key, index) in myObject">
        {{ index }}. {{ key }}: {{ value }}
    </li>
</template>

<script setup>

import { ref, reactive } from 'vue'

const items = ref([{ message: 'Foo' }, { message: 'Bar' }])

const parentMessage = 'Parent'

const myObject = reactive({
    title: 'How to do lists in Vue',
    author: 'Jane Doe',
    publishedAt: '2016-04-10'
})

</script>

<style lang="scss" scoped></style>