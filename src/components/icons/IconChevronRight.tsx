import * as React from 'react';

function IconChevronRight(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			height="1em"
			width="1em"
			{...props}
		>
			<path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z" />
		</svg>
	);
}

export default IconChevronRight;
