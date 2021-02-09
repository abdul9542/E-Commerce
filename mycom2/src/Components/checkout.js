import { Layout } from 'antd';
import { carded, named, getCart } from "../actions";
import { Link } from "react-router-dom";
import {ArrowLeftOutlined  } from '@ant-design/icons';
import { Popover, Button } from 'antd';
// import { BiRupee } from "react-icons/bi";
import { connect } from "react-redux";
// import './checkout.css'; 
import '../App.css'
import React, { Component } from 'react'
import { Card } from 'antd';
import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';

const { Header, Footer, Sider, Content } = Layout;

export class checkout extends Component {
  total=(mycards)=>{
    let j=0;
    console.log("got function", mycards)
    for (let i=0; i<=mycards.length-1;i++){
      console.log("price",mycards[i].price )
      j+= parseInt(mycards[i].price)
    }
    return j;
  }
  render() {
    const cards=this.props.cards;
    const mycards=cards.filter((item)=>item.selected === true)
    const bill= this.total(mycards);
    console.log("total",bill)
    // console.log("sample cart",parseInt(mycards[0].price)  + parseInt(mycards[1].price)+parseInt(mycards[2].price));
    return (
      <div className='bg'>
        <div className="return"  >
            <Link to="/homepage">
              <ArrowLeftOutlined/>
            </Link>
        </div>
        <div className='items'>
          <div className='cart'>
            <Card title="Shopping Cart">
              <div className='price'>
                <p>
                  Product Price
                </p>
              </div>
              {mycards.map((item,index)=>(
                <Layout key={index} className='finalcard'>
                  <Sider>
                    <h3 className='dp'>
                      <img src={item.images[2]}/>
                    </h3>
                  </Sider>
                  <Layout>
                    <Header className='ant-layout-header'>
                      <h1>
                        {item.name}
                      </h1>
                      <h1>
                        {item.price}
                      </h1>
                    </Header>
                    <Content className='ant-layout-header'>
                      <h1>
                        {item.username}
                      </h1>
                    </Content>
                    <Content className='ant-layout-header'>
                      <h4>
                        {item.username}
                      </h4>
                    </Content>
                  </Layout>
                </Layout>
              ))}
              <div className='total'>
                <h3>
                  Subtotal ({mycards.length}items) : {bill} Rupees
                </h3>
              </div>
            </Card>
          </div>
          <div>
            <Card title="Total Bill">
              <h3>
                Subtotal ({mycards.length}items) :  {bill} Rupees
              </h3>
              <Button block>
                proceed to buy
              </Button>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    const name = state.data;
    // const cart = state.cart;
    const cards= state.cards.cardetails;

    // console.log("cart recieved",cart);
  
    return {
      name,
      cards,
    //   cart,  
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      carded: (payload) => dispatch(carded(payload)),
      named: (payload) => dispatch(named(payload)),
      getCart:(payload) => dispatch(getCart(payload)),
  
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(checkout);
  

 
  