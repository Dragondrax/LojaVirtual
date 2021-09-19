import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../../components/Page';
import ListItens from './ListItens'
export default function HomePage() {
  return (
    <Page title="Home | Haydomic Store">
      <Container maxWidth="xl" >
        <Box sx={{ pb: 5 }}>
          <ListItens />
        </Box>
        <Grid container spacing={3}>
        </Grid>
      </Container>
    </Page>
  );
}
