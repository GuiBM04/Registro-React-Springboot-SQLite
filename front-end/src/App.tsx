import React from 'react';

import './App.css';

import AddWorker from './components/AddWorker/AddWorker';
import Workers from './components/Workers/Workers';

const App: React.FC = () => {
    return (
        <div>
            <section>
                <AddWorker/>
            </section>

            <section>
                <Workers/>
            </section>
        </div>
    );
}

export default App;
