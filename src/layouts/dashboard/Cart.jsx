import { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { alpha } from '@mui/material/styles';
import {
  Box,
  List,
  Badge,
  Button,
  Divider,
  IconButton,
  Typography,
  ListItemText,
  Card,
  Paper
} from '@mui/material';
import MenuPopover from '../../components/MenuPopover';
import { useCart } from '../../context/Cart'
import { Link as RouterLink } from 'react-router-dom';

export default function CartPopover() {
  const Cart = JSON.parse(localStorage.getItem("@Cart"));
  if(!Cart){
    localStorage.setItem("@Cart", JSON.stringify([]))
  }
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem("@Cart")));
  const [produtosCarrinho, setProdutoCarrinho] = useState(notifications.filter((item) => item.Name).length)  
  const { item } = new useCart();

  useEffect(() => {
    setProdutoCarrinho(notifications.filter((item) => item.Name).length);
  }, [item])

  useEffect(() => {
    setNotifications(JSON.parse(localStorage.getItem("@Cart")))
  }, [item])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => { 
    localStorage.removeItem("@Cart")
    localStorage.setItem("@Cart", JSON.stringify([]))
  }


  return (
    <>
      <IconButton
        ref={anchorRef}
        size="large"
        color={open ? 'primary' : 'default'}
        onClick={handleOpen}
        sx={{
          ...(open && {
            bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.focusOpacity)
          })
        }}
      >
        <Badge badgeContent={produtosCarrinho} color="error">
          <Icon icon="entypo:shopping-cart" />
        </Badge>
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 360 }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">Carrinho</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Você tem {produtosCarrinho} {produtosCarrinho == 1 ? <span>item no carrinho </span> : <span>itens no carrinho </span>}
            </Typography>
          </Box>
        </Box>

        <Divider />

        <List
          disablePadding
        >
          {
            notifications.map((obj) => (
              <Paper>
                <br />
                
                <Card sx={{ width: "90%", display: "flex", justifyContent: "space-between", marginLeft: "5%" }}>
                  <Button sx={{ width: "100%"}} to='/cart' component={RouterLink}>  
                    <Box component="img" src={obj.Image} sx={{ width: "50px", height: "50px" }} alt={obj.Name} />
                    <ListItemText sx={{ paddingLeft: "5%" }} color="gray">
                      {obj.Name}: <br />Qtd: {obj.Item}  <br />{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(obj.Price * obj.Item)}
                    </ListItemText>
                  </Button>
                </Card>
                <br />
                <Divider />
                <br />
              </Paper >
            ))
          }

        </List>
        <Divider />
      </MenuPopover>
    </>
  );
}
