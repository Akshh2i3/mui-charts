import { BarChart } from '@mui/x-charts';
import { Box, Typography } from '@mui/material';
import { stageWiseData } from '../../data/mockData';

const HorizontalBarChart = () => {
  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6">MUI X-charts</Typography>
      <BarChart
        dataset={stageWiseData}
        yAxis={[{ scaleType: 'band', dataKey: 'stage'}]}
        series={[{ dataKey: 'value', color: '#3f51b5' }]}
        layout="horizontal"
        width={500}
        height={400}
      />
    </Box>
    
  );
};

export default HorizontalBarChart;