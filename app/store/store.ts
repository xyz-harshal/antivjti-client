import { create } from "zustand";

interface presenceState{
    active:boolean
    toggle:()=>void
}
export const usePresenceStore=create<presenceState>()((set)=>({
    active:false,
    toggle:()=>set((state)=>({active:!state.active}))
}));