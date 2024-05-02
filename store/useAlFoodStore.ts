// Central information website
import api from '@/api/api'

import type { ItemTypes } from '~/types/ItemTypes';

export const useAlFoodStore = defineStore('food', {
  state: () => ({
    food: [] as ItemTypes[],
    product: {} as ItemTypes
  }),

  actions: {
    async fetchFood() {
      try {
        const { data } = await api.get('/productos')
        this.food = data.productos
      } catch (error) {
          console.log(error);
      };
      
    },
    async setCurrentProduct(id: number) {
      const product = this.food.find(product => product.id === id);
      if (product) {
        this.product = product;
      } else {
        console.log("Product not found:", id);
        this.product = {} as ItemTypes;
      }
    },
    clearProductModal() {
      this.product = {} as ItemTypes
    }
  }
})

export const useAlFoodStoreRefs = () => storeToRefs(useAlFoodStore());