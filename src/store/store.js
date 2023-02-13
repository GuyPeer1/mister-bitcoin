
import { contactStore } from './contact.store.js'
import Vuex from 'vuex';

export const myStore = Vuex.createStore({
    strict: true,
    state() {
        return {
            count: 200000,
        }
    },
    getters: {
        // Reusable accessing logic
        countForDisplay(state) {
            return state.count.toLocaleString()
        },
    },
    mutations: {
        changeCount(state, payload) {
            // console.log('payload: ', payload)
            state.count += payload.by
        },
    },
    actions: {
        incrementAsync(context, payload) {
            console.log('context', context)
            setTimeout(() => {
                context.commit({ type: 'changeCount', by: payload.by })
            }, 2500)
        },
    },
    modules: {
        contactStore
    }
})

myStore.subscribe((cmd, state) => {
    console.log('**** Store state changed: ****')
    console.log('Command:', cmd.payload)
    console.log('storeState:\n', state)
    console.log('*******************************')
})

