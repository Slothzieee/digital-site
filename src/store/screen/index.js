import {devtools} from 'zustand/middleware'
import create from "zustand";
import produce from 'immer';

const useStore = create(
    devtools((set) => ({
        screenView: null,
        setScreenView: (payload) => 
            set(
                produce((state) => {
                    state.screenView = payload
                })
            )
    }))
)

export default useStore