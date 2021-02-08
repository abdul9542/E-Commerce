import { Layout } from 'antd';
import { carded, named, getCart } from "../actions";

import { connect } from "react-redux";
import '../App.css';

import React, { Component } from 'react'
import { Card } from 'antd';
import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';

const { Header, Footer, Sider, Content } = Layout;

export class checkout extends Component {
    render() {
        const cards=this.props.cards;
        const mycards=cards.filter((item)=>item.selected === true)
        // const {cart}= this.props.cart;
    console.log("sample cart", mycards);
    // const card= this.props.cards[2]
        return (
            <div>
                <Card title="Shopping Cart">
                    <div className='price'><p>Price</p></div>
                    {mycards.map((item,index)=>(
                <Layout key={index} className='finalcard'>
      <Sider><h3 className='dp'><img src={item.images[2]}/></h3></Sider>
      <Layout>
        <Header className='ant-layout-header'><h1>{item.name}</h1><h1>{item.price}</h1></Header>
        <Content className='ant-layout-header'><h1>{item.username}</h1></Content>
        <Content className='ant-layout-header'><h4>{item.username}</h4></Content>
      </Layout>
    </Layout>))}
                
    
  </Card>
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
  

 
  