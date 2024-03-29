import React from 'react';

type Props = {
	labelText: string;
	id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({ labelText, id, ...props }: Props) => {
	return (
		<div className="flex flex-col gap-1">
			<label htmlFor={id} className="font-semibold ml-1">
				{labelText}
			</label>
			<input
				id={id}
				name={id}
				{...props}
				className=" border-2 border-black shadow-neu rounded-md w-full py-2 px-4 focus:bg-gray-300 focus:shadow-neu outline-none"
			/>
		</div>
	);
};

export default Input;
