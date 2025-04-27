import { BarChart } from '@mui/x-charts';
import { Box, Typography } from '@mui/material';
import { stageWiseData } from '../../data/mockData';

const StageWiseDistribution = () => {
  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6">Stage Wise Loan Distribution</Typography>
      <BarChart
        dataset={stageWiseData}
        xAxis={[{ scaleType: 'band', dataKey: 'stage' }]}
        series={[{ dataKey: 'value', color: '#3f51b5' }]}
        width={500}
        height={300}
      />
    </Box>
  );
};

export default StageWiseDistribution;