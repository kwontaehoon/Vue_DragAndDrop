export interface storeType {
    count: number,
    increment: () => void
}

export interface addModalType {
    id: number,
    open: boolean,
    content: string
}