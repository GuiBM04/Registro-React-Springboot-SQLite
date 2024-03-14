import React, { useState } from 'react';

import './App.css';

import AddWorker from './components/AddWorker/AddWorker';
import Workers from './components/Workers/Workers';

const App: React.FC = () => {
    const [update, setUpdate] = useState<boolean>(false);

    const handlePost = () => {
        setUpdate(!update);
    }


    return (
        <div>
            <section>
                <AddWorker onPost={handlePost}/>
            </section>

            <section>
                <Workers reload={update}/>
            </section>
        </div>
    );
}

export default App;
