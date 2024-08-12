import { addModal, deleteModal, updateModal, status } from "@/store";

export const addFunc = (dummy1: object[], dummy2: object[], dummy3: object[]) => {

    if(addModal.id === 0){
        dummy1.push({id: 0, content: addModal.content});
    }else if(addModal.id === 1){
        dummy2.push({id: 1, content: addModal.content});
    }else 
        dummy3.push({id: 2, content: addModal.content});
}

export const delFunc = (dummy1: object[], dummy2: object[], dummy3: object[]) => {
    if(deleteModal.id === 0){
        dummy1.splice(deleteModal.contentId, 1)
    }else if(deleteModal.id === 1){
        dummy2.splice(deleteModal.contentId, 1)
    }else
        dummy3.splice(deleteModal.contentId, 1)
}

export const updateFunc = (dummy1: object[], dummy2: object[], dummy3: object[]) => {


}