import m from 'mithril';
import UserList from './UserList';

const App = {
    view: () => m('.text-gray-900.antialiased.leading-tight', m('.min-h-screen.bg-gray-100', m(UserList))),
}

export default App;
