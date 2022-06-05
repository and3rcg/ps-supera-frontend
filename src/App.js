import AppRouter from './components/AppRouter';
import Layout from './components/Layout';

import './styles/App.css';

function App() {
    return (
        <div className="App">
            <Layout />
            <AppRouter />
        </div>
    );
}

export default App;
