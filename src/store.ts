import {create} from 'zustand';
import { CampaignValues, Store } from './types';
import campaignMove from './data/campaign-move.json'
import campaignShooters from './data/campaign-shooters.json'

export const useStore = create<Store>((set, get) => ({
  data: campaignMove.campaignInfo,
  productSalesData: campaignMove.productInfo,
  competitorData: campaignMove.competitorInfo,
	notificationAmount: 42,
	handleCampaignChange: (name: CampaignValues) => {
		if(name === 'move') {
			set({
				data: campaignMove.campaignInfo,
				productSalesData: campaignMove.productInfo,
				competitorData: campaignMove.competitorInfo,
				notificationAmount: Math.ceil(Math.random() * 40 + 1),
				hasFiltered: false,
			})
		}else if (name === 'shooters') {
			set({
				data: campaignShooters.campaignInfo,
				productSalesData: campaignShooters.productInfo,
				competitorData: campaignShooters.competitorInfo,
				notificationAmount: Math.ceil(Math.random() * 40 + 1),
				hasFiltered: false,
			})
		}
	},
	handleMonthChange: (month: string) => {
		const {data, productSalesData, competitorData} = get()
		const filteredData = data.filter((value) => value.name === month)
		const filteredProductSales = productSalesData.filter((value) => value.name === month)
		const filteredCompetitor = competitorData.filter((value) => value.name === month)

		set({
			hasFiltered: true,
			filteredProps: {
				...get().filteredProps,
				data: filteredData,
				productSalesData: filteredProductSales,
				competitorData: filteredCompetitor
			}
		})
	},
	hasFiltered: false,
	hasProductSalesFiltered: false,
	filteredProps: {
		data: [],
		productSalesData: [],
		competitorData: [],
		lowestMonth: '',
		highestMonth: '',
	},
	findHighestSaleMonth: () => {
    const { productSalesData, handleMonthChange } = get();
    let highestSales = 0;
    let highestMonth = '';

    productSalesData.forEach((monthData) => {
      if (monthData.product1 + monthData.product2 + monthData.product3 > highestSales) {
        highestSales = monthData.product1 + monthData.product2 + monthData.product3;
        highestMonth = monthData.name;
      }
    });
		handleMonthChange(highestMonth)
  },
	findLowestSaleMonth: () => {
		const { productSalesData, handleMonthChange } = get();
		let lowestSales = Infinity;
		let lowestMonth = '';
	
		productSalesData.forEach((monthData) => {
			const totalSales = monthData.product1 + monthData.product2 + monthData.product3;
			if (totalSales < lowestSales) {
				lowestSales = totalSales;
				lowestMonth = monthData.name;
			}
		});
		handleMonthChange(lowestMonth)
	},
}));