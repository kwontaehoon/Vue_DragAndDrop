import { Reactive, reactive } from 'vue'
import { storeType, statusType, modalType, deleteModalType, updateModalType } from './type'


export const store:Reactive<storeType> = reactive({
  count: 0,
  increment() {
    this.count++
  }
})

export const status:Reactive<statusType> = reactive({
  modalStatus: ''
})

export const addModal:Reactive<modalType> = reactive({
  id: null,
  open: false,
  content: ''
})

export const deleteModal:Reactive<deleteModalType> = reactive({
  id: null,
  open: false,
  content: '',
  contentId: 0,
})

export const updateModal:Reactive<updateModalType> = reactive({
  id: null,
  open: false,
  content: '',
  contentId: 0,
})