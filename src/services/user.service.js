import { storageService } from './async-storage.service'

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    update,
    getEmptyCredentials,
    updateUser,
    getUser
}

async function updateUser(transaction) {
    const userId = getLoggedinUser()._id
    let userFromData = await storageService.get('users', userId)
    userFromData.transactions.push(transaction)
    userFromData.balance -= transaction.amount
    const userToUpdate = { ...userFromData }
    await storageService.put('users', userToUpdate)
    if (getLoggedinUser()._id === userToUpdate._id) saveLocalUser(userToUpdate)
    return userToUpdate
}

function getUser(id) {
    return {
        name: "Kramer",
        balance: 100,
        transactions: [],
        imgUrl: 'https://assets.mycast.io/actor_images/actor-cosmo-kramer-148577_large.jpg?1606447562',
    }
}
function getEmptyCredentials() {
    return {
        username: "",
        password: "",
        fullname: "",
    }
}

function getUsers() {
    return storageService.query('user')
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    return user
}

function remove(userId) {
    return storageService.remove('user', userId)
}

async function update({ user }) {
    const userToSave = await storageService.get('user', user._id)
    await storageService.put('user', user)
    if (getLoggedinUser()._id === user._id) saveLocalUser(user)
    return user
}

async function login(userCred) {
    console.log(userCred)
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    if (user) {
        return saveLocalUser(user)
    }
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await storageService.post('user', userCred)
    return saveLocalUser(user)
}

async function logout() {
    sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
}



function saveLocalUser(user) {
    user = { _id: user._id, fullname: user.fullname, imgUrl: user.imgUrl }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}
