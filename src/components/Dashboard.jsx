import { Grid, Container, Divider } from '@mui/material';
import ConversionChart from './charts/ConversionChart';
import StageWiseDistribution from './charts/StageWiseDistribution';
import RegionSalesMap from './charts/RegionSalesMap';
import LoanTypeDistribution from './charts/LoanTypeDistribution';
import LoanTrends from './charts/LoanTrends';
import UsaGeoChart from './charts/UsaGeoChart';
import SalesFunnel from './charts/SalesFunnel';

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid spacing={3}>
        <Grid item xs={12} >
          <ConversionChart />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <StageWiseDistribution />
        </Grid>
        {/* <Divider />
        <Grid item xs={12}>
          <RegionSalesMap />
        </Grid> */}
        <Divider />
        <Grid item xs={12}>
          <LoanTypeDistribution />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <LoanTrends />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <UsaGeoChart />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <SalesFunnel />
        </Grid>
        <Divider />
      </Grid>
    </Container>
  );
};

export default Dashboard;