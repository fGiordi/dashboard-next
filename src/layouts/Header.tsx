import { BsJustify }
	from 'react-icons/bs'
import { useStore } from '../store';
import { CampaignValues } from '../types';
import React, {useEffect, useState} from 'react';

interface IHeader {
	openSidebar: () => void;
}

function Header({ openSidebar }: IHeader) {
	const {handleCampaignChange, handleMonthChange, hasFiltered, findHighestSaleMonth, findLowestSaleMonth} = useStore()

	const [selectedCampaign, setSelectedCampaign] = useState('move')
	const [selectedMonth, setSelectedMonth] = useState('Choose a Month')

	const handleCampaign = (event: React.ChangeEvent<HTMLSelectElement>) => {
		handleCampaignChange(event.target.value as CampaignValues)
		setSelectedCampaign(event.target.value as CampaignValues)
  };

	const handleMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const {value} = event.target
		if(value === 'highest') {
			findHighestSaleMonth()
			setSelectedMonth(value)
		} else if(value === 'lowest') {
			findLowestSaleMonth()
			setSelectedMonth(value)
		} else {
			handleMonthChange(value)
			setSelectedMonth(value)
		}
  };

	useEffect(() => {
		if(!hasFiltered) {
			setSelectedMonth('Choose a Month')
		}
	}, [hasFiltered])

	return (
		<header className='header'>
			<div className='menu-icon'>
				<BsJustify className='icon' onClick={openSidebar} />
			</div>
			<div className='header-left'>
			<select value={selectedCampaign} onChange={handleCampaign} id="campaign" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
				<option selected disabled>Choose a Campaign</option>
				<option value="move">Campaign Move</option>
				<option value="shooters">Campaign Shooters</option>
			</select>
			</div>

			<div className='header-right'>
			<select onChange={handleMonth} value={selectedMonth} id="month" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option selected disabled>Choose a Month</option>
				<option value="highest" className='bg-green-500 text-white'>Highest Month for Product Sales</option>
				<option value="lowest" className='bg-red-500 text-white'>Lowest Month for Product Sales</option>
				<option value="Jan">Jan</option>
				<option value="Feb">Feb</option>
				<option value="Mar">March</option>
				<option value="Apr">April</option>
				<option value="May">May</option>
				<option value="Jun">June</option>
				<option value="Jul">July</option>
			</select>
			</div>
		</header>
	)
}

export default Header