import { Box, Grid, Container} from '@mui/material';
import Page from '../../components/Page';
import Product from './product'
import { useParams } from 'react-router-dom';

export default function ProductPage() {
  const { id } = useParams()
  return (
    <Page title="Produto | Haydomic Store">
      <Container maxWidth="xl" >
        <Box sx={{ pb: 5 }}>
          <Product id={id}/>
        </Box>
        <Grid container spacing={3}>
        </Grid>
      </Container>
    </Page>
  );
}
