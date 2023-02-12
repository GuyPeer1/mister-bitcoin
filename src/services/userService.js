export const userService = {
    getUser,
}

function getUser(id) {
    return {
        name: "Puki Ben David",
        balance: 100,
        transactions: []
    }
}
