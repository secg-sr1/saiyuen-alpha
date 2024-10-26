import { create } from "zustand";



export let useStore = create((set, get) => ({


    value: 'RGB', 
    currentValue: () => set(state => ({ value: state.value })),
    setValue: (newValue) => set({ value: newValue }),

    showTrace: false, 
    setShowTrace: (show) => set({ showTrace: show }),

    showBase:true,
    setShowBase: (showbase) => set({ showBase: showbase}),

    showStructure:true,
    setShowStructure: (showstructure) => set({ showStructure: showstructure})


}))