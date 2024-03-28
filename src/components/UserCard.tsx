import { User } from '@/types/user';
import React from 'react';
import IconGenderMale from './icons/IconGenderMale';
import IconGenderFemale from './icons/IconGenderFemale';
import Status from './Status';

const UserCard = ({ user }: { user: User }) => {
	return (
		<div className=" border-2 border-black p-4 shadow-neu rounded-lg hover:bg-lime-400 cursor-pointer">
			<div className="flex justify-between items-start">
				<div className="flex">
					<h1 className=" text-xl font-bold mb-1">{user.name}</h1>
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
			<p className=" w-full line-clamp-2 text-sm">{user.email}</p>
		</div>
	);
};

export default UserCard;
