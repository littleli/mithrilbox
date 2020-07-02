import m from 'mithril';

const User = {
    list: [],
    loadList: async () => Promise.resolve([
            {firstName: "John",  lastName: "Doe"},
            {firstName: "Alice", lastName: "Cooper"}
        ])
        .then(list => User.list = list)
        .then(() => m.redraw())
}

export default User;
