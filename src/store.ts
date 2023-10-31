import {create} from 'zustand';
import { CampaignValues, Store } from './types';
import campaignMove from './data/campaign-move.json'
import campaignShooters from './data/campaign-shooters.json'

export const useStore = create<Store>((set) => ({
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
				notificationAmount: Math.ceil(Math.random() * 40 + 1)
			})
		}else if (name === 'shooters') {
			set({
				data: campaignShooters.campaignInfo,
				productSalesData: campaignShooters.productInfo,
				competitorData: campaignShooters.competitorInfo,
				notificationAmount: Math.ceil(Math.random() * 40 + 1) 
			})
		}
	}
}));