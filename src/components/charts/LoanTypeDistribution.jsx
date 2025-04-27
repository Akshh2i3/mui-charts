import { Box, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';
import { loanTypesData } from '../../data/mockData';

const LoanTypeDistribution = () => {
  const chartData = loanTypesData.types.map(type => ({
    type: type.type,
    loans: type.loans,
    amount: type.amount
  }));

  return (
    <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 2 }}>
      <Typography variant="h6">Across Loan Types</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography variant="subtitle1">
          {loanTypesData.totalLoans} LOANS
        </Typography>
        <Typography variant="subtitle1">
          ${loanTypesData.totalAmount}M LOAN AMT.
        </Typography>
      </Box>
      <BarChart
        dataset={chartData}
        xAxis={[{ scaleType: 'band', dataKey: 'type' }]}
        series={[
          { dataKey: 'loans', label: 'No. of Loans', color: '#E3F2FD' },
          { dataKey: 'amount', label: 'Loan Amount', color: '#2196F3' }
        ]}
        width={800}
        height={300}
      />
    </Box>
  );
};

export default LoanTypeDistribution;