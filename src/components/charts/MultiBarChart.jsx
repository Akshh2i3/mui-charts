import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { loanTypesData } from '../../data/mockData';

const MultiBarChart = () => {
  const chartData = loanTypesData.types.map(type => ({
    type: type.type,
    loans: type.loans,
    amount: type.amount
  }));

  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6">MUI X-charts</Typography>
      <BarChart
        dataset={chartData}
        xAxis={[{
          scaleType: 'band',
          dataKey: 'type',
          categoryGapRatio: 0.5,
          tickLabelPlacement: 'middle',
          tickPlacement: 'middle'
        }]}
        yAxis={[{
          id: 'left',
          scaleType: 'linear',
          dataKey: 'loans',
          axisLine: false,
          position: 'left',
        },
        {
          id: 'right',
          scaleType: 'linear',
          dataKey: 'amount',
          axisLine: false,
          position: 'right',
        }
        ]}
        series={[
          { dataKey: 'loans', label: 'No. of Loans', color: '#E3F2FD', yAxisId: 'left' },
          { dataKey: 'amount', label: 'Loan Amount', color: '#2196F3', yAxisId: 'right' }
        ]}
        sx={{
          '.MuiChartsAxis-line': {
            display: 'none',
          },
          '.MuiChartsAxis-tick': {
            display: 'none',
          },
        }}
        width={1200}
        height={400}
        grid={{ horizontal: true }}
        borderRadius={6}
      />
    </Box>
  );
};

export default MultiBarChart;