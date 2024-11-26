import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import img from './assets/img/logo.png';
import * as styles from './index.module.scss';

// boostrapt component
const App: React.FC = () => {
	console.log('styles', styles);

	return (
		<div className="App text-center text-4xl">
			Merhaba, Dünya2!
			<img src={img} />
			<p className={`${styles.textColor} bg-cyan-300`}>Css Module</p>
			<p className={styles['textColor']}>Css Module2</p>
		</div>
	);
};

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<App />);
