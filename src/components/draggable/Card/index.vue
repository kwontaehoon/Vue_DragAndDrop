<template>
    <div class="bg-white rounded-lg shadow my-4 px-3 py-2 flex items-center">
        <div class="flex-1 mr-4">{{ props.element.content }}</div>
        <div class="flex text-xs gap-2">
            <div @click="update(props.element)">Update</div>
            <div @click="del(props.element)">Del</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { addModal, deleteModal, status, updateModal } from '@/store';
import { itemType } from './type';
import { watch, watchEffect } from 'vue';

// props 정의
const props = defineProps<{
  element: itemType
  colId: number
  dummy: itemType[]
}>();

// 삭제 메서드
const del = (element: itemType) => {

    deleteModal.open = true
    deleteModal.id = props.dummy.findIndex(x => x.id === props.colId)
    deleteModal.contentId = props.element.id
    status.modalStatus = 'delete'
};

// 업데이트 메서드
const update = (element: itemType) => {

    updateModal.open = true;
    updateModal.id = props.colId
    updateModal.contentId = props.element.id
    status.modalStatus = 'update'
};
</script>
