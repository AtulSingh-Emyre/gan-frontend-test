import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Card} from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';

import Container from 'react-bootstrap/Container';
import { useState } from 'react';
const headerData = [
  {
    img:"https://cdn-icons-png.flaticon.com/512/81/81960.png",
    title:"Products",
    dsc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed efficitur nisi."
  },{
    img:"https://cdn-icons-png.flaticon.com/512/2015/2015969.png",
    title:"Cake Class",
    dsc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed efficitur nisi."
  },{
    img:"https://cdn-icons-png.flaticon.com/512/287/287000.png",
    title:"Recipe",
    dsc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed efficitur nisi."
  }
];

const items = [{
img:"https://static.toiimg.com/thumb/53096885.cms?width=1200&height=900",
title:"Black forest",
inCart: false,
price: 28,
id: 0
},{
  img:"https://nationaltoday.com/wp-content/uploads/2020/01/chocolatecake-1-640x514.jpg",
  title:"Cake 4",
  inCart: false,
  price: 26,
  id: 1
  },{
    img:"https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/2_Hersheys_Perfectly_Chocolate_Cake_11-18.jpeg",
    title:"Dessert Cake",
    inCart: false,
    price: 36,
    id: 2
    },{
      img:"https://www.recipetineats.com/wp-content/uploads/2019/12/Christmas-Cake-decorated-with-fondant-marzipan-and-cherries-SQ.jpg",
      title:"Cake 3",
      inCart: false,
      price: 33,
      id: 3
      },

]


function App() {
  const [cartItem, setCartItem] = useState([0]);
  const isInCart = (id) => {
    for (const k of cartItem) {
      if(k == id) return true;
    }
    return false;
  }

  const addOrRemoveItemFromCart = (id) => {
    const inCart = isInCart(id);
    if(!inCart) {
      setCartItem([...cartItem,id]);
    } else {
      setCartItem(cartItem.filter((itemId) => itemId!=id));
    }
  }

  const checkOut = () => {
    var result = 0;
    for(const id of cartItem) result += items[id].price;
    console.log(result);
  }
  return (
   <div style={{maxWidth:'100%'}}>
   <Container style={{minWidth:"100%",maxWidth:"100%", height:"30vh",backgroundColor:"#b5f3f7", marginLeft:0}}>
   </Container>
   <Container style={{width:"85%",height:"auto",margin:'auto',marginTop:"-20vh",marginBottom:"50px",backgroundColor:"white"}}>
   <Row style={{marginTop:50}}>
    {
      headerData.map((item)=>(
        <Col style={{padding: 30}}>
        <Row>
          <Col>
          <Card.Img variant="top" src={item.img}/>
          </Col>
          <Col>
          <Card.Body style={{margin:"auto"}}>
          <Card.Title style={{marginTop:"10px",marginBottom:"10px"}}>{item.title}</Card.Title>
          <Card.Text>
            {item.dsc}
          </Card.Text>
        </Card.Body>
          </Col>
        </Row>
        </Col>
      ))
    }
   </Row>
    </Container>
    <h5 style={{textAlign:'center',marginTop:"70px"}}>NEW PRODUCTS</h5>
    <Container style={{marginBottom:"50px", marginTop:"50px"}}>
      <Row>
      {
        items.map((item)=>(
<Col style={{display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginHorizontal: 3,
  marginVertical: 20
  }}>
<Card style={{ width: '18rem', zIndex:1 }}>
      <Card.Img variant="top" style={{height:230,width:"100%"}} src={item.img} />
      <Card.Body style={{alignItems:'center'}}>
        <Card.Title style={{textAlign:'center'}}>{item.title}</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
          ${item.price}
        </Card.Text>
        </Card.Body>
    </Card>
    <Button variant="primary"
          style={{margin:'auto',marginTop:'-10px',zIndex:2}}
          onClick={() => addOrRemoveItemFromCart(item.id)}
        >{isInCart(item.id)?"Remove from Cart":"Add to Cart"}</Button>
      
    </Col>

        ))
      }
      </Row>
    </Container>
    <h5 style={{textAlign:'center'}}>CART</h5>
    <Container style={{marginTop:"50px"}}>
      <Row>
      {
        cartItem.map((itemId)=>{
          const item = items[itemId]
          return (
<Col style={{display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginHorizontal: 3,
  marginVertical: 20
  }}>
<Card style={{ width: '18rem', zIndex:1 }}>
      <Card.Img variant="top" style={{height:230,width:"100%"}} src={item.img} />
      <Card.Body style={{alignItems:'center'}}>
        <Card.Title style={{textAlign:'center'}}>{item.title}</Card.Title>
        <Card.Text style={{textAlign:'center'}}>
          ${item.price}
        </Card.Text>
        </Card.Body>
    </Card>
    <Button variant="primary"
          style={{margin:'auto',marginTop:'-10px',zIndex:2}}
          onClick={() => addOrRemoveItemFromCart(item.id)}
        >{isInCart(item.id)?"Remove from Cart":"Add to Cart"}</Button>
      
    </Col>


        )})
      }
      </Row>
    </Container>
    <Container style={{display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  marginHorizontal: 3,
  marginVertical: "20px",
  paddingTop:"50px"}} >
    <Button onClick={() => checkOut()}>CHECK OUT</Button>
    </Container>
   </div>
  );
}

export default App;
