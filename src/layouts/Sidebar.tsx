import React from 'react'
import {
BsFillGrid3X3GapFill
}
	from 'react-icons/bs'

	interface ISidebar {
		openSidebar: boolean;
		openSidebarToggle: () => void;
	}

function Sidebar({ openSidebarToggle, openSidebar }: ISidebar) {
	return (
		<aside id="sidebar" className={openSidebar ? "sidebar-responsive" : ""}>
			<div className='sidebar-title'>
				<div className='sidebar-brand'>
					<BsFillGrid3X3GapFill className='icon_header' /> Dashboard
				</div>
				<span className='icon close_icon' onClick={openSidebarToggle}>X</span>
			</div>
		</aside>
	)
}

export default Sidebar