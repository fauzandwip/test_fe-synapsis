'use client';

import { url } from 'inspector';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { title } from 'process';

type Props = {
	url: string;
	title: string;
};
const NavbarLink = ({ url, title }: Props) => {
	const path = usePathname();

	return (
		<Link href={url}>
			<li
				className={` py-2.5 px-4 font-bold hover:bg-lime-500 rounded-lg ${
					path === url
						? 'bg-gray-200 border-2 border-black shadow-neu rounded-lg hover:bg-gray-200'
						: ''
				}`}
			>
				<h1>{title}</h1>
			</li>
		</Link>
	);
};

export default NavbarLink;
