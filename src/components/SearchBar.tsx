import React from 'react';

type Props = {
	setSearch: React.Dispatch<React.SetStateAction<string>>;
};
const SearchBar = ({ setSearch }: Props) => {
	return (
		<div className="w-full p-2">
			<input
				onChange={async (e) => {
					setTimeout(() => {
						setSearch(e.target.value);
					}, 600);
				}}
				type="text"
				name="search"
				id="search"
				className="w-full px-4 py-2 card-neu outline-none focus:bg-lime-500 bg-white focus:placeholder-slate-200 placeholder-slate-400"
				placeholder="search by name"
			/>
		</div>
	);
};

export default SearchBar;
