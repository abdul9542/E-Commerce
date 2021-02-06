
import React, { Component } from 'react'
import { connect } from "react-redux";
import { useHistory,Link } from "react-router-dom";

// import { Form, Input, Button, Checkbox } from "antd";
import { Popover, Button } from 'antd';
import { carded, named } from "../actions";

import { Layout, Menu, Breadcrumb } from "antd";
import {ArrowLeftOutlined} from '@ant-design/icons';
import '../App.css';
import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';
import { Avatar, Image } from 'antd';
import { Carousel, Radio } from 'antd';

import { Descriptions } from 'antd';
import Homepage from './Homepage';

const { Header, Content, Footer } = Layout;


export class Card extends Component {
  constructor(props) {
    super(props)
      this.state = {
        images:[dp1,dp2,dp3],
        index:0,
        card:[],   
        contentStyle : {
          // height: '160px',
          color: '#fff',
          lineHeight: '160px',
          textAlign: 'flex-end',
          // background: '#364d79',
        },
          // name: 0,
          // cards: [],
      }
  }
  // getParam(param){
  //   return new URLSearchParams(window.location.search).get(param);
  // }
  // getValue=(value)=>{
  //   console.log("id got",this.state.index)
  //   this.setState({
  //     index:value,
  //     // card: this.props.cards[value-1].name
  //   })
  //   // console.log('values given', value),
  //   console.log("id got",this.state.index)
  // }
  async componentDidMount(){
    var url=new URL(window.location);
    console.log("url", url.pathname)
    const path=url.pathname;
    const length= path.length-1;
    const id=path[length];
    // console.log("path", id);
    this.props.named(id-1);
    console.log('name state',id)
  }
  setIndex=(value)=>{
    this.setState({
      index:value,
    })
    console.log("set index", this.state.index)
  }
  resetIndex=(value)=>{
    this.setState({
      index:'',
    })
    console.log("reset index", this.state.index, value)
  }
  render() {
    let opac =0;

    const name= this.props.name.data;
    console.log("name is ", name);
    // console.log("name render", name)
    const card= this.props.cards[name];
    console.log("filter card", card.name)
    return (
      <div className="cardpage" >
        <div className="input">
          <Link to="/homepage">
            <Button
              type="primary"
              htmlType="submit"
              style={{borderRadius:"18px"}}
              // className="title"
            >
              <ArrowLeftOutlined/>
            </Button>
          </Link>
        </div>
           <div >
            <div className="title">
              <Popover content={card.name}  trigger="hover">
                <Avatar
                  style={{
                    color: '#f56a00',
                    backgroundColor: '#fde3cf',
                  }}
                >
                  {card.name[0]}
                </Avatar>
              </Popover>
              <h2>
                {card.name}
              </h2>
            </div>
            <div className='carousal'>
              <div className='photos'>
                {card.images.map((item,index)=>
                  (
                    <div key={index} className='leftphoto'><Popover title={`image${index+1}`} trigger="hover">
                      <h2  onClick={()=>this.setIndex(index)}>
                        <img src={item}/>
                      </h2>
                    </Popover></div>
                  ))
                }
              </div>
              {this.state.index !== '' ?
                <div className="photo" onClick={()=>this.resetIndex()}>
                  <Popover title="image1" trigger="hover">
                    <h2 >
                      <img src={card.images[this.state.index]}/>
                    </h2>
                  </Popover>
                </div>
                :
                <div className='photo'>
                  <Carousel autoplay dotPosition={'left'} >
                    {card.images.map((item,index)=>(
                      <div  key={index} >
                        <h2 style={this.state.contentStyle} >
                          <img src={item} />
                        </h2>
                      </div>
                    ))}
                  </Carousel>
                </div>
              }
            </div>
            <Descriptions title={`${card.name}'s Info`}>
              <Descriptions.Item label="Name">
                {card.name}
              </Descriptions.Item>
              <Descriptions.Item label="UserName">
                {card.username}
              </Descriptions.Item>
              <Descriptions.Item label="Telephone">
                {card.phone}
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                {card.email}
              </Descriptions.Item>
              <Descriptions.Item label="Company">
                {card.company.name}
              </Descriptions.Item>
              <Descriptions.Item label="Address">
                {card.address.street}, {card.address.suite}, {card.address.city},
              </Descriptions.Item>
              <Descriptions.Item label="zip code">
                {card.address.zipcode}
              </Descriptions.Item>
            </Descriptions>
          </div> 
          

         
          
          <div>
            <Homepage/>
          </div>
      </div>
    )
  }  
}
const mapStateToProps = (state) => {
    const name = state.data;
    const cards= state.cards.cardetails;

    console.log("red cards recieved",cards);
  
    return {
      name,
      cards,  
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      carded: (payload) => dispatch(carded(payload)),
      named: (payload) => dispatch(named(payload)),
  
    };
  };
  export default connect(mapStateToProps,mapDispatchToProps)(Card);
  

 
  