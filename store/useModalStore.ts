import { defineStore } from 'pinia';

interface ModalsState {
  product: boolean;
}

export const useModalStore = defineStore('global/modal', {
  state: (): { modals: ModalsState } => ({
    modals: {
      product: false,
    },
  }),
  actions: {
    openModal(modalName: keyof ModalsState) {
      this.modals[modalName] = !this.modals[modalName];
    },
    closeModal(modalName: keyof ModalsState) {
      this.modals[modalName] = false;
    },
  },
});


export const useModalStoreRefs = () => storeToRefs(useModalStore());
