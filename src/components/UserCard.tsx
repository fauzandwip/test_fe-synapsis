import { User } from '@/types/user';
import React, { useState } from 'react';
import IconGenderMale from './icons/IconGenderMale';
import IconGenderFemale from './icons/IconGenderFemale';
import Status from './Status';
import IconEdit from './icons/IconEdit';
import IconTrash from './icons/IconTrash';

type Props = {
	user: User;
	onClickEditButton: () => void;
	onClickDeleteButton: () => void;
};
const UserCard = ({ user, onClickEditButton, onClickDeleteButton }: Props) => {
	const [showAction, setShowAction] = useState(false);

	return (
		<div
			onMouseEnter={() => setShowAction(true)}
			onMouseLeave={() => setShowAction(false)}
			className="min-h-min max-h-28 card-neu hover:bg-teal-300 w-full overflow-x-hidden flex items-center transition-all"
		>
			{/*  */}
			<div
				className={`w-full py-4 px-4 border-r-2 border-black rounded-lg h-full flex flex-col justify-center transition-all ${
					showAction ? '' : 'flex-shrink-0'
				}`}
			>
				<div className="flex justify-between items-start">
					<div className="flex justify-start ">
						<h1 className=" text-base font-bold mb-1 md:text-xl ">
							{user.name}
						</h1>
						{user.gender === 'male' ? (
							<IconGenderMale fill="blue" width={'1.1em'} height={'1.1em'} />
						) : (
							<IconGenderFemale fill="red" width={'1.1em'} height={'1.1em'} />
						)}
					</div>

					{/* status */}
					{user.status === 'active' ? (
						<Status color="bg-green-700" status="Active" />
					) : (
						<Status color="bg-red-700" status="Inactive" />
					)}
				</div>
				<p className="w-full line-clamp-2 text-xs md:text-xs lg:text-sm text-ellipsis">
					{user.email}
				</p>
			</div>

			{/* actions */}
			<div
				className={`w-max flex flex-col lg:flex-row gap-2 p-4 justify-center items-center duration-300 transition-all ${
					showAction ? '' : 'translate-x-4'
				}`}
			>
				{/* edit button */}
				<button
					onClick={onClickEditButton}
					className="p-2 rounded-lg bg-blue-600 shadow-neu-light"
				>
					<IconEdit className=" text-white" width={'1.1em'} height={'1.1em'} />
				</button>

				{/* cancel button */}
				<button
					onClick={onClickDeleteButton}
					className="p-2 rounded-lg bg-red-600 shadow-neu-light"
				>
					<IconTrash className=" text-white" width={'1.1em'} height={'1.1em'} />
				</button>
			</div>
		</div>
	);
};

export default UserCard;
