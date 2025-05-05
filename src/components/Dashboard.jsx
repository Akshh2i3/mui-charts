import { Grid, Container, Divider } from '@mui/material';
import PieChartComponent from './charts/PieChartComponent';
import HorizontalBarChart from './charts/HorizontalBarChart';
import MultiBarChart from './charts/MultiBarChart';
import LineChartComponent from './charts/LineChartComponent';
import UsGeoChart from './charts/USGeoChart';
import FunnelChartComponent from './charts/FunnelChartComponent';

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid spacing={3}>
        <Grid item xs={12} >
          <PieChartComponent />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <HorizontalBarChart />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <MultiBarChart />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <LineChartComponent />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <UsGeoChart />
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <FunnelChartComponent />
        </Grid>
        <Divider />
      </Grid>
    </Container>
  );
};

export default Dashboard;