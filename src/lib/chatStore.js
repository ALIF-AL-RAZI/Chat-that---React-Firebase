import {doc, getDoc } from "firebase/firestore";
    import { create } from "zustand";
    import { db } from "./firebase";
import { useUserStore } from "./userStore";
    export const useChatStore = create ((set) => ({
    chatId: null,
    user: null,
    isCurrentUserBlocked: false,
    isreceiverBlocked: false,
    changeChat: (chatId, user)=>{
        const currentUser = useUserStore.getState().currentUser;

        if(user.blocked.includes(currentUser.id)){
            return set({
                chatId,
                user: null,
                isCurrentUserBlocked: true,
                isreceiverBlocked: false,
            })
        }

        else if(currentUser.blocked.includes(user.id)){
            return set({
                chatId,
                user: user,
                isCurrentUserBlocked: false,
                isreceiverBlocked: true,
            })
        }
        else{
            return set({
                chatId,
                user,
                isCurrentUserBlocked: false,
                isreceiverBlocked: false,
            })
        }
    },
    changeBlock: ()=>{
        set((state)=>({...state, isreceiverBlocked: !state.isreceiverBlocked}));
    }
    }));