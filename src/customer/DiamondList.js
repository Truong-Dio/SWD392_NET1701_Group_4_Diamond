import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Card, CardContent, CardMedia, Typography, Button, IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const DiamondList = ({ cartItems = [], setCartItems }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://dss-cactgjg2a9ascrek.southeastasia-01.azurewebsites.net/api/Diamonds/GetAll');
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('accountID');
    navigate('/login');
  };

  return (
    <Container>
      <IconButton color="inherit" onClick={handleLogout}>
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCart />
        </Badge>
      </IconButton>
      <Grid container spacing={4} style={{ marginTop: '20px' }}>
        {products.map((product) => (
          <Grid item key={product.diamondID} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.imageURL}
                alt={product.description}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`Price: $${product.price}`}
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={() => addToCart(product)} 
                  style={{ marginTop: '10px' }}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DiamondList;
