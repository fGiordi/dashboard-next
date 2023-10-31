import {
	BsFillGearFill,
BsFillGrid3X3GapFill, BsGrid1X2Fill, BsListCheck, BsMenuButtonWideFill
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
					<BsFillGrid3X3GapFill className='icon_header' /> Admin
				</div>
				<span className='icon close_icon' onClick={openSidebarToggle}>X</span>
			</div>
			<ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
		</aside>
	)
}

export default Sidebar