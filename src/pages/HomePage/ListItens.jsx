import react, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import {
    InputLabel,
    CardMedia,
    CardContent,
    Switch,
    TextField,
    MenuItem,
    FormControl,
    Select,
    Button
} from '@mui/material';
import CardActions from '@mui/material/CardActions';
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
    const [checked, setChecked] = useState(false);
    const [ordernar, setOrdernar] = useState(false);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const handleChangeOrdem = (event) => {
        setOrdernar(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        axios.get("https://5d6da1df777f670014036125.mockapi.io/api/v1/product")
            .then((response) => {
                setProdutos(response.data)
            })
    }, [ordernar])

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
                <Paper style={{ width: '20%', marginRight: '1%', height: '600px' }}>
                    <Typography style={{ marginLeft: '5%', marginTop: '5%' }}>
                        {produtos.length} resultados..
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
                            <Grid item xl={3} lg={4} sm={6}>
                                <CardItem>
                                    <CardMedia sx={{ width: '100%' }}
                                        component="img"
                                        image={item.image}
                                        alt="Paella dish"
                                    >
                                    </CardMedia>
                                    <CardContent>
                                        <Typography
                                            variant="h5"
                                        >
                                            R$ {item.price}

                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                        >
                                            {item.name}
                                        </Typography>
                                    </CardContent>
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
