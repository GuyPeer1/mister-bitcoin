import { contactService } from '../services/contact-service.js'
import {createStore } from 'vuex'

export const store = createStore({
    state: {
        contacts: [],
        lastRemovedContact: null
    },
    getters: {
        contacts({ contacts }) {
            return contacts
        },
        contactCount({ contacts }) {
            return contacts.length
        },
    },
    mutations: {
        setContacts(state, { contacts }) {
            state.contacts = contacts
        },
        removeContact(state, { id }) {
            const idx = state.contacts.findIndex(c => c._id === id)
            state.lastRemovedContact = state.contacts[idx]
            state.contacts.splice(idx, 1)
        },
        addContact(state, { contact }) {
            state.contacts.push(contact)
        },
        updateContact(state, { contact }) {
            const idx = state.contacts.findIndex(c => c._id === contact._id)
            state.contacts.splice(idx, 1, contact)
        },
        clearRemoveContact(state) {
            state.lastRemovedContact = null
        },
        undoRemoveContact(state) {
            state.contacts.unshift(state.lastRemovedContact)
            state.lastRemovedContact = null
        },

    },
    actions: {
        loadContacts({ commit }) {
            contactService.query()
                .then((contacts) => {
                    commit({ type: 'setContacts', contacts })
                })
        },
        async removeContact({ commit }, payload) {
            commit(payload)
            try {
                await contactService.remove(payload.id)
                commit({ type:  'clearRemoveContact' })
            } catch (err) {
                commit({ type: 'undoRemoveContact' })
                throw err
            }
        },
        saveContact({ commit }, { contact }) {
            const actionType = (contact._id) ? 'updateContact' : 'addContact'
            return contactService.save(contact)
                .then((savedContact) => {
                    commit({ type: actionType, contact: savedContact })
                    return savedContact
                })
        },
    }
})