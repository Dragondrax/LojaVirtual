import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import Logo from '../../components/Logo'
import CartPopover from './Cart';
import {Link as RouterLink} from 'react-router-dom'

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 0;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.navbar, 0.99),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <Box sx={{ flexGrow: 1 }} component={RouterLink} to="/">
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            <Logo />
          </Stack>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            <CartPopover />
          </Stack>
        </Box>

      </ToolbarStyle>
      </RootStyle>
    );  
}
