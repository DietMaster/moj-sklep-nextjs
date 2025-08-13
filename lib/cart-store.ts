import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Frame } from './products'

export interface CartItem {
  id: string
  frame: Frame
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (frame: Frame, quantity?: number) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (frame: Frame, quantity = 1) => {
        const items = get().items
        const existingItem = items.find((item) => item.id === frame.id)

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === frame.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          })
        } else {
          set({
            items: [...items, { id: frame.id, frame, quantity }],
          })
        }
      },

      removeItem: (id: string) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        })
      },

      updateQuantity: (id: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(id)
          return
        }

        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        })
      },

      clearCart: () => {
        set({ items: [] })
      },

      getTotalItems: () => {
        return get().items.reduce((total, item) => total + item.quantity, 0)
      },

      getTotalPrice: () => {
        return get().items.reduce(
          (total, item) => total + item.frame.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'eyekhel-cart',
    }
  )
)