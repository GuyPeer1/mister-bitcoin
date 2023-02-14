export const userService = {
    getUser,
}

function getUser(id) {
    return {
        name: "Kramer",
        balance: 100,
        transactions: [],
        imgUrl: 'https://assets.mycast.io/actor_images/actor-cosmo-kramer-148577_large.jpg?1606447562',
    }
}
