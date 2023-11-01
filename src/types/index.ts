export type DataPoint = {
  name: string;
  clickThroughRates: number;
  conversionRates: number;
  totalSales: number;
};

export type ProductSales = {
	name: string,
	product1: number,
	product2: number,
	product3: number
}
export type Competitor = {
	name: string;
	competitorA: number;
	competitorB: number;
	competitorC: number;
}

export type CampaignValues = 'move'| 'shooters'

interface IFilteredProps  {
	data: DataPoint[];
	productSalesData: ProductSales[];
  competitorData: Competitor[];
}

export type Store = {
  data: DataPoint[];
  productSalesData: ProductSales[];
  competitorData: Competitor[];
	handleCampaignChange: (name: CampaignValues) => void
	notificationAmount: number,
	handleMonthChange: (month: string) => void
	filteredProps: IFilteredProps,
	hasFiltered: boolean,
	findHighestSaleMonth: () => void;

};


