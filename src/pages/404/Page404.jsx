import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Button, Typography, Container } from '@mui/material';
import { MotionContainer, varBounceIn } from '../../components/animate';
import Page from '../../components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(15),
  paddingBottom: theme.spacing(10)
}));

// ----------------------------------------------------------------------

export default function Page404() {
  return (
    <RootStyle title="404 Page Not Found | Minimal-UI">
      <Container>
        <MotionContainer initial="initial" open>
          <Box sx={{ maxWidth: 480, margin: 'auto', textAlign: 'center' }}>
            <motion.div variants={varBounceIn}>
              <Typography variant="h3" paragraph>
                Desculpa, página não encontrada
              </Typography>
            </motion.div>
            <Typography sx={{ color: 'text.secondary' }}>
              Que estranho né ? Tente verificar a url de acesso. 
            </Typography>

            <Button to="/" size="large" variant="contained" component={RouterLink} sx={{marginTop: "5%"}}>
              Vá para a Home
            </Button>
          </Box>
        </MotionContainer>
      </Container>
    </RootStyle>
  );
}
