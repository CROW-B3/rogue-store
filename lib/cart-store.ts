"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartItem, Product, OrderSummary } from "./types";

interface CartStore {
  items: CartItem[];
  isOpen: boolean;

  // Actions
  addItem: (
    product: Product,
    selectedVariants?: Record<string, string>,
  ) => void;
  removeItem: (
    productId: string,
    selectedVariants?: Record<string, string>,
  ) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    selectedVariants?: Record<string, string>,
  ) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;

  // Computed
  itemCount: number;
  summary: OrderSummary;
}

const SHIPPING_COST = 500; // LKR
const TAX_RATE = 0.08; // 8%

function calculateSummary(items: CartItem[]): OrderSummary {
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const shipping = items.length > 0 ? SHIPPING_COST : 0;
  const tax = subtotal * TAX_RATE;
  const total = subtotal + shipping + tax;

  return { subtotal, shipping, tax, total };
}

function itemsMatch(
  a?: Record<string, string>,
  b?: Record<string, string>,
): boolean {
  if (!a && !b) return true;
  if (!a || !b) return false;
  return JSON.stringify(a) === JSON.stringify(b);
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      itemCount: 0,
      summary: { subtotal: 0, shipping: 0, tax: 0, total: 0 },

      addItem: (product, selectedVariants) => {
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) =>
              item.product.id === product.id &&
              itemsMatch(item.selectedVariants, selectedVariants),
          );

          let newItems: CartItem[];

          if (existingItemIndex > -1) {
            newItems = [...state.items];
            newItems[existingItemIndex].quantity += 1;
          } else {
            newItems = [
              ...state.items,
              { product, quantity: 1, selectedVariants },
            ];
          }

          return {
            items: newItems,
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
            summary: calculateSummary(newItems),
          };
        });
      },

      removeItem: (productId, selectedVariants) => {
        set((state) => {
          const newItems = state.items.filter(
            (item) =>
              !(
                item.product.id === productId &&
                itemsMatch(item.selectedVariants, selectedVariants)
              ),
          );

          return {
            items: newItems,
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
            summary: calculateSummary(newItems),
          };
        });
      },

      updateQuantity: (productId, quantity, selectedVariants) => {
        if (quantity <= 0) {
          get().removeItem(productId, selectedVariants);
          return;
        }

        set((state) => {
          const newItems = state.items.map((item) =>
            item.product.id === productId &&
            itemsMatch(item.selectedVariants, selectedVariants)
              ? { ...item, quantity }
              : item,
          );

          return {
            items: newItems,
            itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
            summary: calculateSummary(newItems),
          };
        });
      },

      clearCart: () => {
        set({
          items: [],
          itemCount: 0,
          summary: { subtotal: 0, shipping: 0, tax: 0, total: 0 },
        });
      },

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
    }),
    {
      name: "cart-storage",
    },
  ),
);
