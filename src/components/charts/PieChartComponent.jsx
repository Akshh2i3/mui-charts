import { PieChart } from '@mui/x-charts';
import { Box, Typography } from '@mui/material';
import { conversionData } from '../../data/mockData';

const PieChartComponent = () => {
  const data = [
    { id: 0, value: conversionData.funded, label: 'Funded', color: '#4CAF50' },
    { id: 1, value: conversionData.notFunded, label: 'Not Funded', color: '#2196F3' }
  ];

  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6">MUI X-charts</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <PieChart
          series={[
            {
              data,
              highlightScope: { faded: 'global', highlighted: 'item' },
              faded: { innerRadius: 30, additionalRadius: -30 }
            }
          ]}
          width={500}
          height={300}
        />
        {/* <Box>
          <Typography variant="h4">{conversionData.conversionRate}%</Typography>
          <Typography color="success.main">+ {conversionData.monthlyGrowth}%</Typography>
          <Typography variant="body2">This Month</Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default PieChartComponent;