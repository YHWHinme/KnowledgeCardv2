import { writable } from "svelte/store";

export interface Task {
  id: number;
  task: string;
  expression: string;
  desc: string;
}

export const modalStore = writable({
  isOpen: false,
  currentTask: null as Task | null,
});

export function openModal(task: Task) {
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

