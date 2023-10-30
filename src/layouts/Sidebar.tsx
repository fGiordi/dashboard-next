import React from 'react'

import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
	from 'react-icons/bs'

	interface ISidebar {
		openSidebarToggle: boolean;
		openSidebar: () => void;
	}

function Sidebar({ openSidebarToggle, openSidebar }: ISidebar) {
	return (
		<aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
			<div className='sidebar-title'>
				<div className='sidebar-brand'>
					<BsFillGrid3X3GapFill className='icon_header' /> Dashboard
				</div>
				<span className='icon close_icon' onClick={openSidebar}>X</span>
			</div>
		</aside>
	)
}

export default Sidebar