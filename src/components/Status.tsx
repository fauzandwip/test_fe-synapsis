import React from 'react';

type Props = {
	color: string;
	status: string;
};
const Status = ({ color, status }: Props) => {
	return (
		<div className="flex items-center gap-1">
			<div className={' w-2 h-2 rounded-full ' + color}></div>
			<p className=" text-[11px] font-semibold">{status}</p>
		</div>
	);
};

export default Status;
