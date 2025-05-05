import { Box, Typography } from '@mui/material';
import { LineChart } from '@mui/x-charts';
import { loanTrendsData } from '../../data/mockData';

const LineChartComponent = () => {
  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6">MUI X-charts</Typography>
      <LineChart
        xAxis={[{ data: loanTrendsData.dates, scaleType: 'band' }]}
        series={loanTrendsData.series.map(series => ({
          data: series.data,
          label: series.name
        }))}
        width={800}
        height={400}
      />
    </Box>
  );
};

export default LineChartComponent;