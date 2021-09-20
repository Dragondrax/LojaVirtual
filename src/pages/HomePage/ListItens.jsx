import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link as RouterLink } from 'react-router-dom';
import Product from '../Product/product'
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import {
    CardMedia,
    CardContent,
    TextField,
    Button
} from '@mui/material';
import Grid from '@mui/material/Grid';
import axios from 'axios'
import Typography from '@mui/material/Typography';

const CardItem = styled(Card)(({ theme }) => ({
    margin: theme.spacing(2),
    background: theme.palette.background.default,
}));

const TextItem = styled(TextField)(({ theme }) => ({
    width: '70%',
    margin: '5%'
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function ListItens() {
    const [produtos, setProdutos] = useState([])


    function ItemDetailProps(image, name, price, stock) {
        localStorage.removeItem("@Image", image)
        localStorage.removeItem("@Name", name)
        localStorage.removeItem("@Price", price)
        localStorage.removeItem("@Stock", stock)

        localStorage.setItem("@Image", image)
        localStorage.setItem("@Name", name)
        localStorage.setItem("@Price", price)
        localStorage.setItem("@Stock", stock)
    }

    useEffect(() => {
        axios.get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
            .then((response) => {
                setProdutos(response.data)
            })
    }, [])
    return (
        <>
            <img src="/images/anuncioPrincipal.png" width="100%" style={{ marginBottom: '5%' }} />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    '& > :not(style)': {
                        m: 0,
                        width: '80%',
                    },
                }}
            >
                <Paper style={{ width: '20%', marginRight: '1%', height: '300px' }}>
                    <Typography style={{ marginLeft: '5%', marginTop: '5%' }}>
                        Encontrado {produtos.length} resultados..
                    </Typography>
                    <CardItem>
                        <CardContent>
                            <span>Preço: </span>
                            <TextItem id="standard-basic" label="Preço Mínimo" variant="standard" />
                            <TextItem id="standard-basic" label="Preço Máximo" variant="standard" />
                        </CardContent>
                    </CardItem>
                </Paper>

                <Paper elevation={2} >
                    <Grid container spacing={5} >
                        <Paper>

                        </Paper>
                        {produtos.map((item, index) =>
                        (
                            <Grid item xl={3} lg={4} sm={6} key={index}>
                                <CardItem>
                                    <CardMedia sx={{ width: '100%', height: '100%' }}
                                        component="img"
                                        image={item.image}
                                        alt="Paella dish"
                                    >
                                    </CardMedia>
                                    <Button size="medium" sx={{width: '100%', height: '150px'}} to='/product' component={RouterLink} onClick={() => {ItemDetailProps(item.image, item.name, item.price, item.stock)}}>
                                        <CardContent>
                                            <Typography
                                                variant="h5"
                                            >
                                                R$ {item.price}
                                            </Typography>
                                            <Typography>
                                                {
                                                    item.price  < 50 ?
                                                        <span> em 6x de R$: {(item.price / 6).toFixed(2)} sem juros </span>
                                                    :
                                                        <span> em 12x de R$: {(item.price / 12).toFixed(2)} sem juros </span>

                                                }
                                            </Typography>
                                            <Typography
                                                variant="subtitle1"
                                                sx={{color: "gray"}}
                                            >
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </Button>
                                </CardItem>
                            </Grid>
                        ))
                        }
                    </Grid>
                </Paper>
            </Box>
        </>
    )

}
