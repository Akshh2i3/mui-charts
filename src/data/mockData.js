export const conversionData = {
  total: 140,
  funded: 120,
  notFunded: 20,
  conversionRate: 85.7,
  monthlyGrowth: 10
};

export const stageWiseData = [
  { stage: 'Front end', value: 140 },
  { stage: 'Underwriting', value: 125 },
  { stage: 'Credit Review', value: 125 },
  { stage: 'Processing', value: 120 },
  { stage: 'Closing', value: 120 },
  { stage: 'Funded', value: 120 }
];

export const regionSalesData = {
  totalLoans: 120,
  totalSales: 92.45,
  monthlyGrowth: 10,
  regions: {
    TX: { sales: 25, rank: 1 },
    AZ: { sales: 20, rank: 2 },
    CA: { sales: 18, rank: 3 },
    OR: { sales: 15, rank: 4 },
    NY: { sales: 14, rank: 5 }
  }
};

export const loanTypesData = {
  totalLoans: 35,
  totalAmount: 67,
  types: [
    { type: 'Fix & Flip', loans: 25, amount: 18 },
    { type: 'Fix & Hold', loans: 14, amount: 20 },
    { type: 'Buy & Hold', loans: 17, amount: 22 },
    { type: 'Commercial', loans: 10, amount: 7 },
    { type: 'New Construction', loans: 23, amount: 18 }
  ]
};

export const loanTrendsData = {
  dates: ['April 1', 'April 2', 'April 3', 'April 4', 'April 5', 'April 6', 'April 7'],
  series: [
    {
      name: 'Fix & Flip',
      data: [8, 14, 13, 20, 19, 24, 25]
    },
    {
      name: 'Fix & Hold',
      data: [6, 10, 9, 17, 10, 14, 11]
    },
    {
      name: 'Buy & Hold',
      data: [5, 9, 8, 9, 11, 11, 12]
    },
    {
      name: 'Commercial',
      data: [3, 6, 5, 6, 2, 6, 3]
    },
    {
      name: 'New Construction',
      data: [2, 2, 3, 2, 6, 2, 2]
    }
  ]
};