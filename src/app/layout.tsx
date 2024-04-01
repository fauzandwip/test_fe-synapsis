import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		absolute: '',
		default: 'Blog - Synapsis Test',
		template: '%s | Synapsis',
	},
	description: 'Technicall Test Frontend Engineer Internship - Synapsis.id',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className + ' bg-gray-300'}>
				<Navbar />
				<div className="px-8 md:px-10 lg:px-24 min-h-screen">{children}</div>
			</body>
		</html>
	);
}
