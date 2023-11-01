import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsJustify }
	from 'react-icons/bs'
import { useStore } from '../store';
import { CampaignValues } from '../types';

interface IHeader {
	openSidebar: () => void;
}

function Header({ openSidebar }: IHeader) {
	const {handleCampaignChange} = useStore()
	return (
		<header className='header '>
			<div className='menu-icon'>
				<BsJustify className='icon' onClick={openSidebar} />
			</div>
			<div className='header-left'>
			<select onChange={(e) => handleCampaignChange(e.target.value as CampaignValues)} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option selected disabled>Choose a Campaign</option>
				<option value="move">Campaign Move</option>
				<option value="shooters">Campaign Shooters</option>
			</select>
			</div>
			<div className='header-right'>
				<BsFillBellFill className='icon cursor-not-allowed' />
				<BsFillEnvelopeFill className='icon cursor-not-allowed' />
				<BsPersonCircle className='icon cursor-not-allowed' />
			</div>
		</header>
	)
}

export default Header