import { create } from "zustand";

const useStore = create((set) => ({
  age: "",
  color: "",
  setAge: (age) => set({ age }),
  setColor: (color) => set({ color }),
}));

export default useStore;
