import { writable } from "svelte/store";

export interface Blob {
  id: number;
  task: string;
  expression: string;
  desc: string;
}

export const modalStore = writable({
  isOpen: false,
  currentTask: null as Blob | null,
});

export function openModal(task: Blob) {
  modalStore.set({
    isOpen: true,
    currentTask: task,
  });
}

export function closeModal() {
  modalStore.set({
    isOpen: false,
    currentTask: null,
  });
}
