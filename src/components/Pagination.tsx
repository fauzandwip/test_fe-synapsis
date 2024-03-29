import React from 'react';
import IconChevronRight from './icons/IconChevronRight';
import IconChevronLeft from './icons/IconChevronLeft';

type Props = {
	page: number;
	totalPage: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ page, totalPage, setPage }: Props) => {
	const handleMiddlePagination = (
		page: number,
		totalPage: number,
		i: number
	) => {
		return page === totalPage
			? page > 3
				? i - 2 + page
				: page === 1
				? i + page
				: i - 1 + page
			: page > 1
			? i - 1 + page
			: i + page;
	};

	return (
		<div className="flex gap-3 my-6 overflow-auto justify-center">
			{/* prev button page */}
			<button
				onClick={() => page > 1 && setPage((prev) => prev - 1)}
				className={`${
					page > 1 ? 'opacity-1' : 'opacity-0 cursor-default'
				} px-1 mr-6 border-2 border-black shadow-neu-light`}
			>
				<IconChevronLeft width={'1.8em'} height={'1.8em'} />
			</button>

			{/* 1 page */}
			{page > 2 && (
				<button
					onClick={() => setPage(1)}
					className={`px-3 py-1 border-2 border-black shadow-neu-light ${
						page === 1 ? 'bg-black text-white shadow-sm' : ''
					}`}
				>
					<p>{1}</p>
				</button>
			)}
			{page > 3 && <p>...</p>}
			{/* middle pagination */}
			{Array(
				totalPage > 5
					? 3
					: page === 3 && totalPage === 3
					? 2
					: page > 2
					? 3
					: totalPage
			)
				.fill(0)
				.map((_, i) => {
					return (
						<button
							key={i}
							onClick={() =>
								setPage((prev) => handleMiddlePagination(prev, totalPage, i))
							}
							className={`px-3 py-1 border-2 border-black shadow-neu-light ${
								page === handleMiddlePagination(page, totalPage, i)
									? 'bg-black text-white shadow-sm'
									: ''
							}`}
						>
							<p>{handleMiddlePagination(page, totalPage, i)}</p>
						</button>
					);
				})}
			{page < totalPage - 2 && totalPage > 5 && <p>...</p>}
			{/* total page */}
			{page < totalPage - 1 && (totalPage > 5 ? true : page > 2) && (
				<button
					onClick={() => setPage(totalPage)}
					className={`px-3 py-1 border-2 border-black shadow-neu-light ${
						page === totalPage ? 'bg-black text-white  shadow-sm' : ''
					}`}
				>
					<p>{totalPage}</p>
				</button>
			)}
			{/* next button page */}
			<button
				onClick={() => page < totalPage && setPage((prev) => prev + 1)}
				className={`${
					page < totalPage ? 'opacity-1' : ' opacity-0 cursor-default'
				} px-1 ml-6 border-2 border-black shadow-neu-light`}
			>
				<IconChevronRight width={'1.8em'} height={'1.8em'} />
			</button>
		</div>
	);
};

export default Pagination;
