import React from 'react';
import NavbarLink from './NavbarLink';
import Link from 'next/link';

const Navbar = () => {
	return (
		<div className="w-full left-0 top-0 px-8 md:px-16 lg:px-24 fixed flex justify-between items-center bg-teal-400 border-b border-b-black shadow-neu py-2 z-20">
			<Link href={'/'} className=" cursor-pointer">
				<h1 className=" text-xl font-bold">Test Synapsis</h1>
			</Link>
			<ul className="h-auto flex items-center gap-4">
				<NavbarLink url="/posts" title="Post" />
				<NavbarLink url="/users" title="User" />
			</ul>
		</div>
	);
};

export default Navbar;
