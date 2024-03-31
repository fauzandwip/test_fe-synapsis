import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Synapsis Test',
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
				{children}
			</body>
		</html>
	);
}
