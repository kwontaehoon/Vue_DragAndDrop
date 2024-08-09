<template>
    <div class="h-12 border bg-gray-100 px-5 flex items-center">
        <div class="flex-1">Title</div>
        <div class="flex justify-end" @click="close">x</div>
    </div>
    <div class="p-5">
        <div>Message</div>
        <!-- <input class="border w-[350px] rounded px-2 py-1 my-3" @input="onChange($event)" /> -->
        <input class="border w-[350px] rounded px-2 py-1 my-3" v-model="value"/>
        <div>{{ value }}</div>
        <div class="flex justify-end text-xs gap-2">
            <div class="border rounded px-2 py-1" @click="close">cancel</div>
            <div class="text-white bg-black px-2 py-1 rounded" @click="close">complete</div>
        </div>
    </div>
</template>

<script setup lang="tsx">
import { addModal } from '@/store';
import { Ref, ref } from 'vue';

const value: Ref<string> = ref('')

const close = () => {
    addModal.content = ''
    addModal.open = false
}
</script>