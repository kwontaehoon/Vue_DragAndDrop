export interface statusType {
    modalStatus: string
}

export interface storeType {
    count: number,
    increment: () => void
}

export interface modalType {
    id: number
    open: boolean
    content: string
}

export interface deleteModalType {
    id: number
    open: boolean
    content: string
    contentId: number
}

export interface updateModalType {
    id: number
    open: boolean
    content: string
    contentId: number
}