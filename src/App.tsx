// App.tsx
import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Modern Vite + React App</h1>
            </header>
            <main className="app-main">
                <p className="app-description">
                    This is a modernized version of your React application.
                </p>
                <button className="count-button" onClick={() => setCount(count + 1)}>
                    Count is {count}
                </button>
            </main>
            <footer className="app-footer">
                <p>&copy; 2025 Modernized App. All Rights Reserved.</p>
            </footer>
        </div>
    );
}

export default App;