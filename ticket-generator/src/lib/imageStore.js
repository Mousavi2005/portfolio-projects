import { create } from 'zustand'

export const useImageStore = create((set) => ({
    preview: null,
    setPreview: (resualt) => set(() => ({preview: resualt}))

}))