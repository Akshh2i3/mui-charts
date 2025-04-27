import { Grid, Container } from '@mui/material';
import ConversionChart from './charts/ConversionChart';
import StageWiseDistribution from './charts/StageWiseDistribution';

const Dashboard = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ConversionChart />
        </Grid>
        <Grid item xs={12} md={6}>
          <StageWiseDistribution />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;