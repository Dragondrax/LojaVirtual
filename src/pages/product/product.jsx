import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
    CardMedia,
    CardContent,
    Card,
    Paper,
    Typography,
    Button,
    Divider,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    Box
} from '@mui/material';


export default function Product(props) {
    const [image, setImage] = useState(localStorage.getItem("@Image"))
    const [stock, setStock] = useState(localStorage.getItem("@Stock"))
    const [name, setName] = useState(localStorage.getItem("@Name"))
    const [price, setPrice] = useState(localStorage.getItem("@Price"))
    const [item, setItens] = useState(1);

    const handleChange = (event) => {
        setItens(event.target.value);
    };

    const handleClickAddCart = (event) => {
        const Item = {Name: name, Price: price, Item: item, Image: image}
        const Cart = JSON.parse(localStorage.getItem("@Cart")) || [];
        
        let VerifyItem = Cart.find((obj) => {return obj.Name == name})

        if(VerifyItem) {
            VerifyItem = {...VerifyItem, Item: item}
            let newCart = Cart.filter((obj) => {return obj.Name != name})
            newCart.push(VerifyItem)
            localStorage.setItem("@Cart", JSON.stringify(newCart))
        }else{
            Cart.push(Item);
            localStorage.setItem("@Cart", JSON.stringify(Cart))
        }
    }

    return (
        <>
            <Paper sx={{ height: '1500px', backgroundColor: "#F1F1F1", padding: '25px' }}>
                <br /><br />
                <Grid item xl={12} lg={12} sm={12}>
                    <Card sx={{ paddingLeft: "15%", paddingTop: "5%", display: 'flex', flexWrap: 'wrap', }}>
                        <CardMedia sx={{ width: '40rem', height: '35rem' }}
                            component="img"
                            image={image}
                            alt="Paella dish"
                        >
                        </CardMedia>
                        <Card sx={{ paddingLeft: "2%", width: "350px" }}>
                            <CardContent sx={{ marginBottom: "50%" }}>
                                <Typography
                                    variant="subtitle1"
                                >
                                    Novo | Estoque: {stock}
                                </Typography>
                                <br />
                                <Typography
                                    variant="h3"
                                >
                                    {name}
                                    <Divider />
                                </Typography>
                                <Typography
                                    variant="h4"
                                >
                                    <br />
                                    R$: {price * item} á vista ou
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="#00a650"
                                >
                                    {
                                        price < 50 ?
                                            <span> 6x de R$: {((price * item) / 6).toFixed(2)} sem juros</span>
                                            :
                                            <span> 12x de R$: {((price * item) / 12).toFixed(2)} sem juros</span>
                                    }
                                    <br />
                                </Typography>
                                <br />
                                <Typography
                                    variant="subtitle1"
                                >
                                    Estoque Disponivel <br />
                                    Compra Limitada à 9 itens

                                </Typography>
                                <br />
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Quantidade</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={item}
                                        onChange={handleChange}
                                        label="Quantidade"
                                    >
                                        <MenuItem value="">
                                            <em></em>
                                        </MenuItem>
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
                                <Divider />
                                <br />
                                <Button variant="contained" size="large" sx={{ width: "100%", height: "100%", marginBottom: "2%" }}>Comprar</Button>
                                <Button variant="contained" size="large" sx={{ width: "100%", height: "100%" }} onClick={handleClickAddCart}>Adicionar ao Carrinho</Button>
                            </CardContent>
                        </Card>
                    </Card>
                    <br />
                    <Card>
                        <CardContent>
                            <Typography
                                variant="h5"
                                align="center"
                            >
                                Meios de Pagamento
                            </Typography>
                            <br /><br />
                            <Typography
                                variant="subtitle1"
                                align="center"
                            >
                                Cartões de crédito
                            </Typography>
                            <Grid item xl={12} sm={5} md={5}>
                                <Card sx={{ display: 'flex', flexWrap: 'wrap', alignItems: "center", textAlign: 'center', justifyContent: 'center' }}>
                                    <Box component="img" src="/images/visa_logo.png" sx={{ width: "300px", height: "100%" }} alt="imagem_Visa" />
                                    <Box component="img" src="/images/mastercard-logo.png" sx={{ width: "300px", height: "100%" }} alt="imagem_Mastercard" />
                                    <Box component="img" src="/images/hipercard-logo-1.png" sx={{ width: "300px", height: "100%" }} alt="imagem_Hipercard" />
                                </Card>
                            </Grid>
                        </CardContent>
                    </Card>
                    <br />
                    <Card>
                        <CardContent>
                            <Typography
                                variant="h5"
                                align="center"
                            >
                                Garantia
                            </Typography>
                            <Typography
                                variant="body1"
                                align="center"
                            >
                                Compra Garantida com a Haydomic Store <br />
                                Receba o produto que está esperando ou devolvemos o seu dinheiro <br />
                                Você tem 30 dias a contar da data de recebimento. <br />
                                Você pode enviá-lo da agência de Correios mais próxima. <br />
                                Para devolver, o produto deve estar nas mesmas condições nas quais você o recebeu
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Paper>
        </>
    )

}
