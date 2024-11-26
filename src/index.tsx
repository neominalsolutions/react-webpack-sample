import React from 'react';
import ReactDOM from 'react-dom/client';

// boostrapt component
const App: React.FC = () => {
	return <div>Merhaba, Dünya2!</div>;
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<App />);
