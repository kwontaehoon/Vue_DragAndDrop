import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment() {
    this.count++
  }
})

export const addModal = reactive({
  id: 0,
  open: false,
  content: ''
})