import React, { useState } from 'react';

import logo from '../../images/logo.png';
import robo from '../../images/robo.png';
import read from '../../images/read.png';
import suppo from '../../images/suppo.png';
import logout from '../../images/logout.png';

const SideBar = () => {
	const [isCollapse, setIsCollapse] = useState(false)

	const menuList = [
		{
			title: 'My music list',
			icon: robo,
		},
		{
			title: 'My lyrics collection',
			icon: read,
		},
		{
			title: 'Chat with musicians',
			icon: suppo,
		},
		{
			title: 'Logout',
			icon: logout,
		},
	];

	return (
		<div className="relative">
			<div className="absolute inset-y-0 right-0 flex items-center">
				<button className="bg-solid-black py-2 px-1 h-48 rounded-full space-y-2" onClick={() => setIsCollapse(!isCollapse)}>
					<div className="bg-white rounded-full h-2 w-2" />
					<div className="bg-white rounded-full h-2 w-2" />
					<div className="bg-white rounded-full h-2 w-2" />
				</button>
			</div>
			<aside className={`${isCollapse ? "w-24" : "w-80"} h-screen transition duration-200`} aria-label="Sidebar">
				<div className="overflow-y-auto py-4 px-3 pr-6 bg-primary h-screen">
					<img src={logo} alt="logo" className="mt-5 mb-20" />
					<ul className="space-y-2">
						{menuList.map((menu, id) => (
							<li key={id}>
								<span className="flex items-center p-4 text-base font-normal text-white rounded-lg hover:bg-white hover:bg-opacity-10 hover:cursor-pointer hover:font-semibold mb-8">
									<img src={menu.icon} alt={menu.title} className="h-5 w-5" />
									{!isCollapse && (
										<span className="ml-5">{menu.title}</span>
									)}
								</span>
							</li>
						))}
					</ul>
				</div>
			</aside>
		</div>
	);
}
 
export default SideBar;