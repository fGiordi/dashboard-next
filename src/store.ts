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
				data: filteredData,
				productSalesData: filteredProductSales,
				competitorData: filteredCompetitor
			}
		})
	},
	hasFiltered: false,
	filteredProps: {
		data: [],
		productSalesData: [],
		competitorData: []
	}
}));