import { create } from 'zustand'
import type { Page } from '@/types'

interface NavigationState {
  currentPage: Page
  navigate: (page: Page) => void
}

export const useNavigation = create<NavigationState>((set) => ({
  currentPage: 'home',
  navigate: (page: Page) => {
    set({ currentPage: page })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
}))
