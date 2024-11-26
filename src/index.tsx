import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import img from './assets/img/logo.png';
import * as styles from './index.module.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sitelayout from './layouts/site.layout';
import Adminlayout from './layouts/admin.layout';

const router = createBrowserRouter([
	{
		path: '',
		Component: Sitelayout,
		children: [
			{
				path: '/',
				element: <>Home Page</>,
			},
			{
				path: '/about',
				element: <>About Page</>,
			},
		],
	},
	{
		path: 'admin',
		Component: Adminlayout,
		children: [],
	},
]);

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(<RouterProvider router={router}></RouterProvider>);
