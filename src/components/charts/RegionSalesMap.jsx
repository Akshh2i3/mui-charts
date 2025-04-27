import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { regionSalesData } from '../../data/mockData';

const RegionSalesMap = () => {
  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6">Region Wise Sales Breakdown</Typography>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
        <Box>
          <Typography variant="h4">{regionSalesData.totalLoans} Loans</Typography>
          <Typography>Funded</Typography>
          <Typography variant="h4">${regionSalesData.totalSales}M</Typography>
          <Typography>Total Sales</Typography>
          <Typography color="success.main" sx={{ mt: 1 }}>
            + {regionSalesData.monthlyGrowth}%
          </Typography>
          <Typography variant="body2">This Month</Typography>
        </Box>
        {/* Note: For the actual US map visualization, you would need to use a more specialized mapping library */}
      </Box>
    </Box>
  );
};

export default RegionSalesMap;