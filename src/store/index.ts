import { Reactive, reactive } from 'vue'
import { storeType, addModalType } from './type'


export const store:Reactive<storeType> = reactive({
  count: 0,
  increment() {
    this.count++
  }
})

export const addModal:Reactive<addModalType> = reactive({
  id: null,
  open: false,
  content: ''
})