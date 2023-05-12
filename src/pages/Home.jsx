import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { Row,Col } from 'antd';
import { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([])

    const fetchData = () => {
        fetch(`https://fakestoreapi.com/products`).then(resp => {
            return resp.json()
        }).then(data => {
            setProducts(data)
        })
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (

        <Container maxWidth="lg">
            <Row style={{ marginTop: '3%' }}
                gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}>
                {products.map((product) => {

                    return <Col className="gutter-row" span={6}>
                        <Card sx={{ maxWidth: 300,height:'500px', marginTop: '20px',backgroundColor:'#a4b3b6' }}>
                            <CardMedia
                                sx={{ height: 240,objectFit:'cover' }}
                                image={product.image}
                                

                            />
                            <CardContent>
                                <Typography style={{fontSize:'18px'}} gutterBottom variant="h5" component="div">
                                    {product.title}
                                </Typography>
                                <Typography gutterBottom variant="p" component="div">
                                    {product.price}
                                </Typography>
                                <Typography gutterBottom variant="p" component="div">
                                    {product.category}
                                </Typography>

                                <Typography gutterBottom variant="p" component="div">
                                    {product.rate}
                                </Typography>

                                <Typography gutterBottom variant="p" component="div">
                                    {product.count}
                                </Typography>
                                <Button size="small" style={{marginLeft:'13vw',fontWeight:'700',color:'#d93d86'}}>ADD</Button>
                            </CardContent>
                            <CardActions>
                            </CardActions>
                        </Card>
                    </Col>
                })}
            </Row>
        </Container>
    );
}



export default Home