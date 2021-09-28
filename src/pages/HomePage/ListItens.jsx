import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link as RouterLink } from 'react-router-dom';
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

    useEffect(() => {
        axios.get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
            .then((response) => {
                setProdutos(response.data)
            })
    }, [])
    return (
        <>
            <img src="/images/anuncioPrincipal2.jfif" width="100%" style={{ marginBottom: '5%' }} />
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    '& > :not(style)': {
                        m: 0,
                        width: '100%',
                    },
                }}
            >
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
                                    <Button size="medium" sx={{width: '100%', height: '150px'}} to= {`/product/${item.id}`} component={RouterLink}>
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
