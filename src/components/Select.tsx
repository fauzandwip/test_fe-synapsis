import React from 'react';

type Props = {
	id: string;
	labelText: string;
	data: string[][];
};

const Select = ({ labelText, id, data }: Props) => {
	return (
		<div>
			<label htmlFor={id} className=" font-semibold ml-1">
				{labelText}
			</label>
			<select
				name={id}
				id={id}
				className="w-full p-2 rounded-lg border-2 border-black shadow-neu outline-none"
			>
				{data.map((el, idx) => {
					return (
						<option key={idx} value={el[0]}>
							{el[1]}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Select;
