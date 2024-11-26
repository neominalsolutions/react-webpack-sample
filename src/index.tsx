import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import img from './assets/img/logo.png';
import * as styles from './index.module.css';

// boostrapt component
const App: React.FC = () => {
	console.log('styles', styles);

	return (
		<div className="App">
			Merhaba, Dünya2!
			<img src={img} />
			<p className={styles.textColor}>Css Module</p>
			<p className={styles['textColor']}>Css Module2</p>
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<App />);
