<template>
    <div :class="[activeClass, errorClass]">123</div>
    <div :style="{ color: isActive, fontSize: fontSize + 'px' }">111</div>
    <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>

    <button @click="awesome = !awesome">Toggle</button>

    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>


    <!-- show와 if의 차이점 show는 DOM에 남아있지만 if는 초기 렌더링에서 거짓이면 아무것도 하지않습니다 -->
    <!-- <h1 v-show="text">Hello!</h1> -->

</template>

<script setup lang="tsx">

import { ref, reactive, Ref } from 'vue'
const isActive: Ref<string> = ref('red')
const activeClass: Ref<string> = ref('active')
const errorClass: Ref<string> = ref('text-danger')
const fontSize: Ref<number> = ref(30)

const styleObject:object = reactive({
    color: 'red',
    fontSize: '30px'
})

const awesome: Ref<boolean> = ref(false)

</script>

<style lang="scss" scoped></style>