import react, { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Divider,
    Button,
    Grid,
    Box,
    Hidden,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material'
import { Icon } from '@iconify/react';
import { useCart } from '../../context/Cart'

export default function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("@Cart")))
    const { updateItem } = new useCart();
    
    const valorFinal = cart.reduce((acc, obj) => { return acc + (obj.Price * obj.Item) }, 0)

    function setLocalStorageCart (cart) {
        localStorage.setItem("@Cart", JSON.stringify(cart));
    }

    function handleClickExcluir(id) {
        const newCart = cart.filter((obj) => { return id != obj.id })
        setCart(newCart)
        setLocalStorageCart(newCart)
        updateItem(newCart)
    }

    function handleUnitsItemChange(id, item) {
        const newCart = [...cart]
        const existingProduct = newCart.find((obj) => { return obj.id == id; })
        if (existingProduct) {
            existingProduct.Item = item
            setCart(newCart)
            setLocalStorageCart(newCart)
            updateItem(newCart)
        }
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
                            Carrinho ({cart.length})
                        </Typography>
                        <br />
                        <Divider />
                        {
                            cart.map((obj, index) => (
                                <Grid item xl={12} md={12} sm={12} key={ index }>
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
                                                <InputLabel id="qtdItens">Qtd Itens</InputLabel>
                                                <Select
                                                    labelId="qtdItens"
                                                    id="qtdItens"
                                                    value={obj.Item}
                                                    onChange={(event) => handleUnitsItemChange(obj.id, event.target.value)}
                                                    label="Qtd Itens"
                                                    key={index}
                                                >
                                                    <MenuItem value={1}>1 unidade</MenuItem>
                                                    <MenuItem value={2}>2 unidades</MenuItem>
                                                    <MenuItem value={3}>3 unidades</MenuItem>
                                                    <MenuItem value={4}>4 unidades</MenuItem>
                                                    <MenuItem value={5}>5 unidades</MenuItem>
                                                    <MenuItem value={6}>6 unidades</MenuItem>
                                                    <MenuItem value={7}>7 unidades</MenuItem>
                                                    <MenuItem value={8}>8 unidades</MenuItem>
                                                    <MenuItem value={9}>9 unidades</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <Button onClick={() => { handleClickExcluir(obj.id) }} endIcon={<Icon icon="bx:bxs-trash" width="34" height="34" sx={{ zIndex: "5" }} />} />
                                        </CardContent>
                                    </Card>
                                    <br />
                                    <Divider />
                                    <br />
                                </Grid>
                            ))
                        }
                        <Typography
                            variant="h5"
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            Preço Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorFinal)}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                            color="#00a650"
                        >
                            {valorFinal < 50 ? <span> Em até 6x de {(valorFinal / 6).toFixed(2)}</span> : <span> Em até 12x de {(valorFinal / 12).toFixed(2)}</span> }
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2%" }}
                            color="#00a650"
                        >
                            <Button
                                variant="contained"
                                endIcon={<Icon icon="icons8:buy" width="32" height="32" />}
                            >
                                Finalizar Compra
                            </Button>
                        </Typography>
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
                            Carrinho ({cart.length})
                        </Typography>
                        <br />
                        <Divider />
                        {
                            cart.map((obj, index) => (
                                <Grid item xl={12} md={12} sm={12} key={ index }>
                                    <br />
                                    <Card sx={{ display: 'flex', flexWrap: 'wrap', width: "100%", height: "100%" }}>
                                        <Box component="img" src={obj.Image} sx={{ width: "300px", height: "100%" }} alt="imagem_Visa" />
                                        <CardContent sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "auto", zIndex: "1" }} >
                                            <Grid item sm={6}>
                                                <Typography sx={{ display: 'flex', marginTop: "10px", flexWrap: 'wrap' }}
                                                    variant="h6"
                                                    color="gray"
                                                >
                                                    {obj.Name}
                                                </Typography>
                                                <Typography sx={{ display: 'flex', marginTop: "10px", flexWrap: 'wrap' }}
                                                    variant="subtitle1"
                                                    color="gray"
                                                >
                                                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(obj.Price * obj.Item)}
                                                </Typography>
                                            </Grid>
                                            <Grid>
                                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                    <InputLabel id="qtdItens2">Qtd Itens</InputLabel>
                                                    <Select
                                                        labelId="qtdItens2"
                                                        id="qtdItens2"
                                                        value={obj.Item}
                                                        onChange={(event) => handleUnitsItemChange(obj.id, event.target.value)}
                                                        label="Qtd Itens"
                                                        key={index}
                                                    >
                                                        <MenuItem value={1}>1 unidade</MenuItem>
                                                        <MenuItem value={2}>2 unidades</MenuItem>
                                                        <MenuItem value={3}>3 unidades</MenuItem>
                                                        <MenuItem value={4}>4 unidades</MenuItem>
                                                        <MenuItem value={5}>5 unidades</MenuItem>
                                                        <MenuItem value={6}>6 unidades</MenuItem>
                                                        <MenuItem value={7}>7 unidades</MenuItem>
                                                        <MenuItem value={8}>8 unidades</MenuItem>
                                                        <MenuItem value={9}>9 unidades</MenuItem>
                                                    </Select>
                                                </FormControl>
                                                <Button onClick={() => { handleClickExcluir(obj.id) }} sx={{ justifyContent: "center", alignItems: "center", alignText: "center", marginLeft: "auto", marginTop: "auto" }} endIcon={<Icon icon="bx:bxs-trash" width="50" height="50" />} />
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                    <br />
                                    <Divider />
                                    <br />
                                </Grid>
                            ))
                        }
                       <Typography
                            variant="h5"
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                        >
                            Preço Total: {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorFinal)}
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ display: "flex", justifyContent: "flex-end" }}
                            color="#00a650"
                        >
                            {valorFinal < 50 ? <span> Em até 6x de {(valorFinal / 6).toFixed(2)}</span> : <span> Em até 12x de {(valorFinal / 12).toFixed(2)}</span> }
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ display: "flex", justifyContent: "flex-end", marginTop: "2%" }}
                            color="#00a650"
                        >
                            <Button
                                variant="contained"
                                endIcon={<Icon icon="icons8:buy" width="32" height="32" />}
                            >
                                Finalizar Compra
                            </Button>
                        </Typography>
                    </CardContent>
                </Card>
            </Hidden>
        </>
    )
}