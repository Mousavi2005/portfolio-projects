import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {v4 as uuidv4} from 'uuid'

export const useEmailStore = create(
  persist(
    (set) => ({
      email: '',
      ticketId: '', // Start empty
      setEmail: (email) => set({ 
        email,
        ticketId: `#${uuidv4().slice(0,6)}` // Generate only when setting email
      }),
    }),
    { name: 'email-storage' }
  )
);


