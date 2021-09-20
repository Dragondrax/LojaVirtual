import { Box, Grid, Container} from '@mui/material';
import Page from '../../components/Page';
import Product from './product'

export default function ProductPage() {
  return (
    <Page title="Produto | Haydomic Store">
      <Container maxWidth="xl" >
        <Box sx={{ pb: 5 }}>
          <Product />
        </Box>
        <Grid container spacing={3}>
        </Grid>
      </Container>
    </Page>
  );
}
