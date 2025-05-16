import { defineStore } from "pinia";
import { ref } from "vue";
import type { Component } from "vue";

type DialogType = "confirm" | "category" | "product" | string;

interface DialogState {
  isOpen: boolean;
  type: DialogType;
  title: string;
  message?: string;
  component?: Component;
  props?: Record<string, any>;
  resolve?: (value: any) => void;
}

export const useDialogStore = defineStore("dialog", () => {
  const dialogState = ref<DialogState>({
    isOpen: false,
    type: "",
    title: "",
    message: "",
    component: undefined,
    props: undefined,
  });

  const openDialog = <T>(options: {
    type: DialogType;
    title: string;
    message?: string;
    component?: Component;
    props?: Record<string, any>;
  }): Promise<T> => {
    return new Promise((resolve) => {
      dialogState.value = {
        isOpen: true,
        type: options.type,
        title: options.title,
        message: options.message,
        component: options.component,
        props: options.props,
        resolve,
      };
    });
  };

  const closeDialog = (result?: any) => {
    if (dialogState.value.resolve) {
      dialogState.value.resolve(result);
    }
    resetDialog();
  };

  const resetDialog = () => {
    dialogState.value = {
      isOpen: false,
      type: "",
      title: "",
      component: undefined,
      props: undefined,
    };
  };

  return {
    dialogState,
    openDialog,
    closeDialog,
  };
});
