import { create } from 'zustand'

export const useNameStore = create((set) => ({
    name: '',
    username: '',

    setName: (passedName) => set(() => ({name: passedName})),
    setUsername: (passedUsername) => set (() => ({username: passedUsername}))
}))