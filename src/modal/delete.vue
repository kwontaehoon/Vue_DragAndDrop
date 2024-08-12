<template>
    <div class="h-12 border bg-gray-100 px-5 flex items-center">
        <div class="flex-1">Delete</div>
        <div class="flex justify-end" @click="close">x</div>
    </div>
    <div class="p-5 text-center w-[350px]">
        <div class="font-bold">삭제하시겠습니까?</div>
        <!-- <input class="border w-[350px] rounded px-2 py-1 my-3" @input="onChange($event)" /> -->
        <div class="flex text-xs gap-2 mt-5">
            <div class="border flex-1 rounded px-2 py-1" @click="close">cancel</div>
            <div class="text-white flex-1 bg-black px-2 py-1 rounded" @click="complete">delete</div>
        </div>
    </div>
</template>

<script setup lang="tsx">
import { deleteModal } from '@/store';

const close = () => {
    deleteModal.content = ''
    deleteModal.open = false
}

const complete = () => {

    deleteModal.open = false
}
</script>