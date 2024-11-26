import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sitelayout = () => {
	return (
		<>
			<header className="h-20 bg-cyan-500 flex justify-start">
				<nav>
					<Link className="p-2 text-blue-900 hover:text-blue-500" to="/">
						Anasayfa
					</Link>
					<Link className="p-2 text-blue-900 hover:text-blue-500" to="/about">
						Hakkımızda
					</Link>
					<Link className="p-2 text-blue-900 hover:text-blue-500" to="/admin">
						Admin
					</Link>
				</nav>
			</header>

			<main className="p-10">
				<Outlet />
			</main>

			<footer className="fixed bottom-0 bg-blue-800 h-10 w-full text-white text-center">
				Footer
			</footer>
		</>
	);
};

export default Sitelayout;
