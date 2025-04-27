import { Grid, Container, Divider } from '@mui/material';
import ConversionChart from './charts/ConversionChart';
import StageWiseDistribution from './charts/StageWiseDistribution';
import RegionSalesMap from './charts/RegionSalesMap';
import LoanTypeDistribution from './charts/LoanTypeDistribution';
import LoanTrends from './charts/LoanTrends';

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ConversionChart />
        </Grid>
        <Divider />
        <Grid item xs={12} md={6}>
          <StageWiseDistribution />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <RegionSalesMap />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <LoanTypeDistribution />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <LoanTrends />
        </Grid>
        <Divider />
      </Grid>
    </Container>
  );
};

export default Dashboard;