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
	const [selectedSalesOption, setSelectedSalesOption] = useState('Product Sales filter')

	const handleCampaign = (event: React.ChangeEvent<HTMLSelectElement>) => {
		handleCampaignChange(event.target.value as CampaignValues)
		setSelectedCampaign(event.target.value as CampaignValues)
  };

	const handleNumSales = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const {value} = event.target
		setSelectedSalesOption(event.target.value)
		if(value === 'highest') {
			findHighestSaleMonth()
		} else if(value === 'lowest') {
			findLowestSaleMonth()
		}
  };

	const handleMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
		handleMonthChange(event.target.value)
		setSelectedMonth(event.target.value)
  };

	useEffect(() => {
		if(!hasFiltered) {
			setSelectedMonth('Choose a Month')
			setSelectedSalesOption('Product Sales filter')
		} if(hasFiltered) {
			// when filtering by month reset the product sales option
			setSelectedSalesOption('Product Sales filter')
		}
	}, [hasFiltered])

	return (
		<header className='header'>
			<div className='menu-icon'>
				<BsJustify className='icon' onClick={openSidebar} />
			</div>
			<div className='header-left'>
			<select value={selectedCampaign} onChange={handleCampaign} id="campaign" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option selected disabled>Choose a Campaign</option>
				<option value="move">Campaign Move</option>
				<option value="shooters">Campaign Shooters</option>
			</select>
			
			</div>

			<div className='header-center'>
				<select value={selectedSalesOption} onChange={handleNumSales} id="sales" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option selected disabled>Product Sales filter</option>
				<option value="highest">Highest Month for Product Sales</option>
				<option value="lowest">Lowest Month for Product Sales</option>
			</select>
			</div>
			
			<div className='header-right'>
			<select onChange={handleMonth} value={selectedMonth} id="month" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
				<option selected disabled>Choose a Month</option>
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