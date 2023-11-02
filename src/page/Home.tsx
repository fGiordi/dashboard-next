import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
	from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
	from 'recharts';
import { useStore } from '../store';
import Card from '../components/Card';
import TextTitle from '../components/TextTitle';
import { useMediaQuery } from '../hooks/useMediaQuery';

function Home() {
	const { data, productSalesData, competitorData, notificationAmount, hasFiltered, filteredProps } = useStore();

	const { isMobile } = useMediaQuery();

	console.log('filteredProps', filteredProps)

	const updatedCampaign = hasFiltered ? filteredProps.data : data
	const updatedProducts = hasFiltered ? filteredProps.productSalesData : productSalesData
	const updatedCompetitor = hasFiltered ? filteredProps.competitorData : competitorData

	return (
		<main className='main-container'>
			<div className='main-title'>
				<h3>DASHBOARD</h3>
			</div>

			<div className='main-cards'>
				<Card title="Campaign Performance Metrics" icon={<BsFillArchiveFill className='card_icon' />} totalItems={data.length} />
				<Card title="Product Sales Data" icon={<BsFillGrid3X3GapFill className='card_icon' />} totalItems={productSalesData.length} />
				<Card title="Competitor/Market Trends" icon={<BsPeopleFill className='card_icon' />} totalItems={competitorData.length} />
				<Card title="Notifications" icon={<BsFillBellFill className='card_icon' />} totalItems={notificationAmount} />
			</div>

			<div className='charts overflow-x-scroll 2xl:overflow-hidden'>
				<div className='flex flex-col'>
					<TextTitle title="Campaign Metrics" />
					<ResponsiveContainer width={isMobile ? 500 : '100%'} height={300}>
						<BarChart
							width={500}
							height={300}
							data={updatedCampaign}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name"  />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="clickThroughRates" name='Click Through Rates' fill="#8884d8" />
							<Bar dataKey="conversionRates" name="Conversion Rates" fill="#882" />
							<Bar dataKey="totalSales" name="Total Sales" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>
				</div>


				<div className='flex flex-col'>
					<TextTitle title="Product Sales" />
					<ResponsiveContainer width={isMobile ? 500 : '100%'} height={300} >
						<LineChart
							width={500}
							height={300}
							data={updatedProducts}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis  />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="product1"  name='Sneezy Kicks' stroke="red" />
							<Line type="monotone" dataKey="product2"  name='Dada Jackets' stroke="#3df" />
							<Line type="monotone" dataKey="product3"  name="Mini Shirts" stroke="#82ca9d" />
						</LineChart>
					</ResponsiveContainer>
				</div>

			</div>

			<div className='charts-full overflow-x-scroll xl:overflow-hidden'>
				<div className='flex flex-col items-center justify-center'>
					<TextTitle title="Competitor Comparison"/>
					<ResponsiveContainer width={isMobile ? 500 : '100%'} height="100%">
					<LineChart
						width={400}
						height={300}
						data={updatedCompetitor}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name"  />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="competitorA" name="Global Stores PTY" stroke="#8884d8" />
						<Line type="monotone" dataKey="competitorB" name="Le Brand PTY " stroke="#3df" />
						<Line type="monotone" dataKey="competitorC" name="Coast Line Stores PTY" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>

				</div>
			</div>
		</main>
	)
}

export default Home