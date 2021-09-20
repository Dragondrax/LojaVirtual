import { Box, Grid, Container, Typography } from '@mui/material';
import Page from '../../components/Page';
import Cart from './Cart'
export default function CartPage() {
  return (
    <Page title="Carrinho | Haydomic Store">
      <Container maxWidth="xl" >
        <Box sx={{ pb: 5 }}>
          <Cart />
        </Box>
        <Grid container spacing={3}>
        </Grid>
      </Container>
    </Page>
  );
}
