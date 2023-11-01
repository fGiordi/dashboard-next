import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
	from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
	from 'recharts';
import { useStore } from '../store';
import Card from '../components/Card';
import TextTitle from '../components/TextTitle';

function Home() {
	const { data, productSalesData, competitorData, notificationAmount } = useStore();

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

			<div className='charts overflow-x-scroll lg:overflow-hidden'>
				<div className='flex flex-col'>
					<TextTitle title="Campaign Metrics" />
					<ResponsiveContainer width={500} height={300}>
						<BarChart
							width={500}
							height={300}
							data={data}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}

						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="clickThroughRates" fill="#8884d8" />
							<Bar dataKey="conversionRates" fill="#eee9" />
							<Bar dataKey="totalSales" fill="#82ca9d" />
						</BarChart>
					</ResponsiveContainer>
				</div>


				<div className='flex flex-col'>
					<TextTitle title="Product Sales" />
					<ResponsiveContainer width={500} height={300} >
						<LineChart
							width={500}
							height={300}
							data={productSalesData}
							margin={{
								top: 5,
								right: 30,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="name" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Line type="monotone" dataKey="product1" stroke="red" />
							<Line type="monotone" dataKey="product2" stroke="#3df" />
							<Line type="monotone" dataKey="product3" stroke="#82ca9d" />
						</LineChart>
					</ResponsiveContainer>
				</div>

			</div>

			<div className='charts-full overflow-x-scroll lg:overflow-hidden'>
				<div className='flex flex-col'>
					<TextTitle title="Competitor Comparison"/>
					<ResponsiveContainer width={800} height="100%">
					<LineChart
						width={500}
						height={300}
						data={competitorData}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="competitorA" stroke="#8884d8" />
						<Line type="monotone" dataKey="competitorB" stroke="#3df" />
						<Line type="monotone" dataKey="competitorC" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>

				</div>
			</div>
		</main>
	)
}

export default Home