import React from 'react';
import Home from './pages/Home';
import Full from './pages/Full';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    // const [theme, settheme] = useState('red');

    // useEffect(() => {
    //     settheme(localStorage.getItem('theme'));
    //     if (theme === 'blue') {
    //         import('./css/blue.css');
    //     } else if (theme === 'red') {
    //         import('./css/style.css');
    //     }
    // }, []);

    return (
        <Router>
            <Switch>
                <Route path="/full">
                    <Full />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
