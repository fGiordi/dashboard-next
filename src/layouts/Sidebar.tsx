import {
	BsFillGearFill,
	BsFillGrid3X3GapFill,  BsMenuButtonWideFill
} from 'react-icons/bs'

interface ISidebar {
	openSidebar: boolean;
	openSidebarToggle: () => void;
}

function Sidebar({ openSidebarToggle, openSidebar }: ISidebar) {
	return (
		<aside id="sidebar" className={openSidebar ? "sidebar-responsive" : ""}>
			<div className='sidebar-title'>
				<div className='sidebar-brand'>
					<BsFillGrid3X3GapFill className='icon_header' /> Admin
				</div>
				<span className='icon close_icon' onClick={openSidebarToggle}>X</span>
			</div>
			<ul className='sidebar-list'>
				
				<li className='sidebar-list-item cursor-not-allowed'>
					<a href="" className='cursor-not-allowed'>
						<BsMenuButtonWideFill className='icon' /> Reports
					</a>
				</li>
				<li className='sidebar-list-item'>
					<a href="" className='cursor-not-allowed'>
						<BsFillGearFill className='icon' /> Analytics
					</a>
				</li>
			</ul>
		</aside>
	)
}

export default Sidebar