const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            users: null
        },
        actions: {
            getUsers: () => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then((response) => response.json())
                    .then((data) => setStore({ users: data }))
            }
        }
    }
}

export default getState