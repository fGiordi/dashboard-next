import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
	from 'react-icons/bs'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
	from 'recharts';
import { useStore } from '../store';

function Home() {
	const { data, productSalesData, competitorData } = useStore();
	// Pulling data from the store

	return (
		<main className='main-container'>
			<div className='main-title'>
				<h3>DASHBOARD</h3>
			</div>

			<div className='main-cards'>
				<div className='card'>
					<div className='card-inner'>
						<h3>Campaign Performance Metrics</h3>
						<BsFillArchiveFill className='card_icon' />
					</div>
					<h1>300</h1>
				</div>
				<div className='card'>
					<div className='card-inner'>
						<h3>Product Sales Data</h3>
						<BsFillGrid3X3GapFill className='card_icon' />
					</div>
					<h1>12</h1>
				</div>
				<div className='card'>
					<div className='card-inner'>
						<h3>Competitor/Market Trends</h3>
						<BsPeopleFill className='card_icon' />
					</div>
					<h1>33</h1>
				</div>
				<div className='card'>
					<div className='card-inner'>
						<h3>Notifications</h3>
						<BsFillBellFill className='card_icon' />
					</div>
					<h1>42</h1>
				</div>
			</div>

			<div className='charts'>
				<ResponsiveContainer width="100%" height="100%">
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
						<Bar dataKey="conversionRates" fill="#df3" />
						<Bar dataKey="totalSales" fill="#82ca9d" />
					</BarChart>
				</ResponsiveContainer>

				<ResponsiveContainer width="100%" height="100%">
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
						<Line type="monotone" dataKey="product1" stroke="#8884d8" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="product2" stroke="#3df" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="product3" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>
			</div>

			<div className='charts'>
				<ResponsiveContainer width="100%" height="100%">
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
						<Line type="monotone" dataKey="competitorA" stroke="#8884d8" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="competitorB" stroke="#3df" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="competitorC" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</main>
	)
}

export default Home