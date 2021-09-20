import react, { useState } from 'react';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Divider,
    Button,
    Grid,
    Box,
    Hidden,
    IconButton,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material'
import { Icon } from '@iconify/react';



export default function Cart() {
    const [Cart, setCart] = useState(JSON.parse(localStorage.getItem("@Cart")))
    const [Itens, setItens] = useState(0)
    const [test, setTest] = useState()

    function handleClickExcluir(name) {
        const newCart = Cart.filter((obj) => {return name != obj.Name})
        setCart(newCart)
        localStorage.setItem("@Cart", JSON.stringify(newCart));
    }

    function handleChange (name, item) {
        const newCart = [...Cart]
        const existingProduct = newCart.find((obj) => {return obj.Name == name; })
        if(existingProduct){
            existingProduct.Item = item
            setCart(newCart)
        }
        localStorage.setItem("@Cart", JSON.stringify(newCart))
    }
    
    return (
        <>
            <Hidden xlDown >
                <Card>
                    <CardContent>
                        <Typography
                            variant="h5"
                            sx={{ marginTop: "5%", marginLeft: "10%" }}
                        >
                            Carrinho ({Cart.length})
                        </Typography>
                        <br />
                        <Divider />
                        {
                            Cart.map((obj, index) => (
                                <Grid xl={12} md={12} sm={12}>
                                    <br />
                                    <Card sx={{ display: 'flex', flexWrap: 'nowrap', width: "100%", height: "100%", padding: "15px" }}>
                                        <Box component="img" src={obj.Image} sx={{ width: "300px", height: "100%" }} alt="imagem_Visa" />
                                        <CardContent sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "auto", zIndex: "1" }} >
                                            <Typography sx={{ display: 'inline', marginTop: "10px" }}
                                                variant="h5"
                                                color="gray"
                                            >
                                                {obj.Name}
                                            </Typography>
                                            <Typography sx={{ display: 'inline', marginTop: "10px" }}
                                                variant="h5"
                                                color="gray"
                                            >
                                               {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(obj.Price * obj.Item)}
                                            </Typography>
                                            <Typography sx={{ display: 'inline', marginTop: "10px" }}
                                                variant="h5"
                                                color="gray"
                                            >
                                                Qtd: {obj.Item}
                                            </Typography>
                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                <InputLabel id="demo-simple-select-standard-label">Qtd Itens</InputLabel>
                                                <Select 
                                                    labelId="demo-simple-select-standard-label"
                                                    id="demo-simple-select-standard"
                                                    value={obj.Item}
                                                    onChange={(event) => handleChange(obj.Name, event.target.value)}
                                                    label="Qtd Itens"
                                                    key={index}
                                                >
                                                    <MenuItem value={1}>1 unidade</MenuItem>
                                                    <MenuItem value={2}>2 unidade</MenuItem>
                                                    <MenuItem value={3}>3 unidade</MenuItem>
                                                    <MenuItem value={4}>4 unidade</MenuItem>
                                                    <MenuItem value={5}>5 unidade</MenuItem>
                                                    <MenuItem value={6}>6 unidade</MenuItem>
                                                    <MenuItem value={7}>7 unidade</MenuItem>
                                                    <MenuItem value={8}>8 unidade</MenuItem>
                                                    <MenuItem value={9}>9 unidade</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Button onClick={() => {handleClickExcluir(obj.Name)}} endIcon={<Icon icon="bx:bxs-trash" width="34" height="34" sx={{ zIndex: "5" }} />} />
                                        </CardContent>
                                    </Card>
                                    <br />
                                    <Divider />
                                    <br />
                                </Grid>
                            ))
                        }
                    </CardContent>
                </Card>
            </Hidden>
            <Hidden smUp >
                <Card>
                    <CardContent>
                        <Typography
                            variant="h5"
                            sx={{ marginTop: "5%", marginLeft: "10%" }}
                        >
                            Carrinho ({Cart.length})
                        </Typography>
                        <br />
                        <Divider />
                        {
                            Cart.map((obj, index) => (
                                <Grid xl={12} md={12} sm={12}>
                                    <br />
                                    <Card sx={{ display: 'flex', flexWrap: 'wrap', width: "100%", height: "100%", padding: "15px" }}>
                                        <Box component="img" src={obj.Image} sx={{ width: "300px", height: "100%" }} alt="imagem_Visa" />
                                        <Button sx={{ width: "100%", display: "flex", justifyContent: "space-between", marginLeft: "auto" }}>
                                            <Typography sx={{ display: 'inline', marginTop: "10px" }}
                                                variant="h6"
                                                color="gray"
                                            >
                                                {obj.Name}
                                            </Typography>

                                            <Typography sx={{ display: 'inline', marginTop: "10px" }}
                                                variant="subtitle1"
                                                color="gray"
                                            >
                                                R$:  {obj.Price}
                                            </Typography>
                                            <Typography sx={{ display: 'inline', marginTop: "10px" }}
                                                variant="subtitle1"
                                                color="gray"
                                            >
                                                Qtd: {obj.Item}
                                            </Typography>
                                        </Button>
                                    </Card>
                                    <br />
                                    <Divider />
                                    <br />

                                </Grid>
                            ))
                        }
                    </CardContent>
                </Card>
            </Hidden>
        </>
    )
}