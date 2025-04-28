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

export const usMapData = [
  ["State", "Popularity"],
  ["Alabama", 5],
  ["Alaska", 1],
  ["Arizona", 7],
  ["Arkansas", 3],
  ["California", 40],
  ["Colorado", 6],
  ["Connecticut", 4],
  ["Delaware", 1],
  ["Florida", 22],
  ["Georgia", 11],
  ["Hawaii", 1],
  ["Idaho", 2],
  ["Illinois", 13],
  ["Indiana", 7],
  ["Iowa", 3],
  ["Kansas", 3],
  ["Kentucky", 5],
  ["Louisiana", 5],
  ["Maine", 1],
  ["Maryland", 6],
  ["Massachusetts", 7],
  ["Michigan", 10],
  ["Minnesota", 6],
  ["Mississippi", 3],
  ["Missouri", 6],
  ["Montana", 1],
  ["Nebraska", 2],
  ["Nevada", 3],
  ["New Hampshire", 1],
  ["New Jersey", 9],
  ["New Mexico", 2],
  ["New York", 20],
  ["North Carolina", 11],
  ["North Dakota", 1],
  ["Ohio", 12],
  ["Oklahoma", 4],
  ["Oregon", 4],
  ["Pennsylvania", 13],
  ["Rhode Island", 1],
  ["South Carolina", 5],
  ["South Dakota", 1],
  ["Tennessee", 7],
  ["Texas", 29],
  ["Utah", 3],
  ["Vermont", 1],
  ["Virginia", 9],
  ["Washington", 8],
  ["West Virginia", 2],
  ["Wisconsin", 6],
  ["Wyoming", 1]
];

export const usaUnemploymentData = {
  usTopoJson: {
    type: "Topology",
    objects: {
      counties: {},
      states: {
        type: "GeometryCollection",
        geometries: [
          {
            type: "Polygon",
            id: "01",
            arcs: [[0, 1, 2, 3]],
            properties: { name: "Alabama" }
          },
          {
            type: "MultiPolygon",
            id: "02",
            arcs: [[[4, 5]], [[6, 7]]],
            properties: { name: "Alaska" }
          },
          {
            type: "Polygon",
            id: "04",
            arcs: [[8, 9, 10]],
            properties: { name: "Arizona" }
          },
          {
            type: "Polygon",
            id: "06",
            arcs: [[11, 12, 13]],
            properties: { name: "California" }
          }
        ]
      }
    },
    arcs: [
      [[100, 200], [150, 250], [200, 300]],
      [[200, 300], [250, 350], [300, 400]],
    ],
    transform: {
      scale: [0.035896033450880604, 0.005251163636665131],
      translate: [-179.14350338367416, 18.906117143691233]
    }
  },
  unemployment: [
    { name: "Alabama", rate: 3.5 },
    { name: "Alaska", rate: 5.2 },
    { name: "Arizona", rate: 4.1 },
    { name: "California", rate: 4.8 },
    { name: "Colorado", rate: 3.3 },
    { name: "Connecticut", rate: 4.2 },
    { name: "Delaware", rate: 4.5 },
    { name: "Florida", rate: 2.8 },
    { name: "Georgia", rate: 3.1 },
    { name: "Hawaii", rate: 3.7 },
    { name: "Idaho", rate: 3.2 },
    { name: "Illinois", rate: 4.6 },
    { name: "Indiana", rate: 3.4 },
    { name: "Iowa", rate: 3.0 },
    { name: "Kansas", rate: 2.9 },
    { name: "Kentucky", rate: 4.0 },
    { name: "Louisiana", rate: 3.8 },
    { name: "Maine", rate: 3.3 },
    { name: "Maryland", rate: 3.7 },
    { name: "Massachusetts", rate: 3.5 },
    { name: "Michigan", rate: 4.3 },
    { name: "Minnesota", rate: 2.9 },
    { name: "Mississippi", rate: 4.4 },
    { name: "Missouri", rate: 3.1 },
    { name: "Montana", rate: 2.8 },
    { name: "Nebraska", rate: 2.6 },
    { name: "Nevada", rate: 5.4 },
    { name: "New Hampshire", rate: 2.7 },
    { name: "New Jersey", rate: 4.1 },
    { name: "New Mexico", rate: 3.9 },
    { name: "New York", rate: 4.3 },
    { name: "North Carolina", rate: 3.8 },
    { name: "North Dakota", rate: 2.5 },
    { name: "Ohio", rate: 4.0 },
    { name: "Oklahoma", rate: 3.2 },
    { name: "Oregon", rate: 4.4 },
    { name: "Pennsylvania", rate: 4.3 },
    { name: "Rhode Island", rate: 3.7 },
    { name: "South Carolina", rate: 3.2 },
    { name: "South Dakota", rate: 2.4 },
    { name: "Tennessee", rate: 3.5 },
    { name: "Texas", rate: 4.1 },
    { name: "Utah", rate: 2.7 },
    { name: "Vermont", rate: 2.9 },
    { name: "Virginia", rate: 3.2 },
    { name: "Washington", rate: 4.5 },
    { name: "West Virginia", rate: 4.1 },
    { name: "Wisconsin", rate: 3.2 },
    { name: "Wyoming", rate: 3.7 }
  ],
  namemap: new Map([
    ["Alabama", "01"],
    ["Alaska", "02"],
    ["Arizona", "04"],
    ["California", "06"],
    ["Colorado", "08"],
    ["Connecticut", "09"],
    ["Delaware", "10"],
    ["Florida", "12"],
    ["Georgia", "13"],
    ["Hawaii", "15"],
    ["Idaho", "16"],
    ["Illinois", "17"],
    ["Indiana", "18"],
    ["Iowa", "19"],
    ["Kansas", "20"],
    ["Kentucky", "21"],
    ["Louisiana", "22"],
    ["Maine", "23"],
    ["Maryland", "24"],
    ["Massachusetts", "25"],
    ["Michigan", "26"],
    ["Minnesota", "27"],
    ["Mississippi", "28"],
    ["Missouri", "29"],
    ["Montana", "30"],
    ["Nebraska", "31"],
    ["Nevada", "32"],
    ["New Hampshire", "33"],
    ["New Jersey", "34"],
    ["New Mexico", "35"],
    ["New York", "36"],
    ["North Carolina", "37"],
    ["North Dakota", "38"],
    ["Ohio", "39"],
    ["Oklahoma", "40"],
    ["Oregon", "41"],
    ["Pennsylvania", "42"],
    ["Rhode Island", "44"],
    ["South Carolina", "45"],
    ["South Dakota", "46"],
    ["Tennessee", "47"],
    ["Texas", "48"],
    ["Utah", "49"],
    ["Vermont", "50"],
    ["Virginia", "51"],
    ["Washington", "53"],
    ["West Virginia", "54"],
    ["Wisconsin", "55"],
    ["Wyoming", "56"]
  ])
};
