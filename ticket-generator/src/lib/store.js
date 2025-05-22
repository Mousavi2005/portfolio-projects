import { create } from 'zustand'

export const useStore = create((set) => ({
    email: '',
    setEmail: (newEmail) => set(() => {email: newEmail})
}))