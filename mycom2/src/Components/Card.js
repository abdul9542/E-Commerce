import React, { Component } from 'react'
import { connect } from "react-redux";
import { Layout, Menu, Breadcrumb } from "antd";


import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const { Header, Content, Footer } = Layout;

export class Card extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: "",
            cards: [
              {
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                  street: "Kulas Light",
                  suite: "Apt. 556",
                  city: "Gwenborough",
                  zipcode: "92998-3874",
                  geo: {
                    lat: "-37.3159",
                    lng: "81.1496",
                  },
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                  name: "Romaguera-Crona",
                  catchPhrase: "Multi-layered client-server neural-net",
                  bs: "harness real-time e-markets",
                },
              },
              {
                name: "Ervin Howell",
                username: "Antonette",
                email: "Shanna@melissa.tv",
                address: {
                  street: "Victor Plains",
                  suite: "Suite 879",
                  city: "Wisokyburgh",
                  zipcode: "90566-7771",
                  geo: {
                    lat: "-43.9509",
                    lng: "-34.4618",
                  },
                },
                phone: "010-692-6593 x09125",
                website: "anastasia.net",
                company: {
                  name: "Deckow-Crist",
                  catchPhrase: "Proactive didactic contingency",
                  bs: "synergize scalable supply-chains",
                },
              },
              {
                name: "Clementine Bauch",
                username: "Samantha",
                email: "Nathan@yesenia.net",
                address: {
                  street: "Douglas Extension",
                  suite: "Suite 847",
                  city: "McKenziehaven",
                  zipcode: "59590-4157",
                  geo: {
                    lat: "-68.6102",
                    lng: "-47.0653",
                  },
                },
                phone: "1-463-123-4447",
                website: "ramiro.info",
                company: {
                  name: "Romaguera-Jacobson",
                  catchPhrase: "Face to face bifurcated interface",
                  bs: "e-enable strategic applications",
                },
              },
              {
                name: "Patricia Lebsack",
                username: "Karianne",
                email: "Julianne.OConner@kory.org",
                address: {
                  street: "Hoeger Mall",
                  suite: "Apt. 692",
                  city: "South Elvis",
                  zipcode: "53919-4257",
                  geo: {
                    lat: "29.4572",
                    lng: "-164.2990",
                  },
                },
                phone: "493-170-9623 x156",
                website: "kale.biz",
                company: {
                  name: "Robel-Corkery",
                  catchPhrase: "Multi-tiered zero tolerance productivity",
                  bs: "transition cutting-edge web services",
                },
              },
              {
                name: "Chelsey Dietrich",
                username: "Kamren",
                email: "Lucio_Hettinger@annie.ca",
                address: {
                  street: "Skiles Walks",
                  suite: "Suite 351",
                  city: "Roscoeview",
                  zipcode: "33263",
                  geo: {
                    lat: "-31.8129",
                    lng: "62.5342",
                  },
                },
                phone: "(254)954-1289",
                website: "demarco.info",
                company: {
                  name: "Keebler LLC",
                  catchPhrase: "User-centric fault-tolerant solution",
                  bs: "revolutionize end-to-end systems",
                },
              },
              
            ]
        }
    }
    
    render() {
        const name= this.props.name;
        console.log("name render", name)
        const card= this.state.cards.filter((item)=>item.name === name.data)
        console.log("filter card", card)
        return (
            <div >
                {card.map((item,index)=>(
                     <Carousel autoplay>
                     <div>
                     <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                     <h1>{item.name}</h1>
                     </div>
                     <div>
                     <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                     <h1>{item.username}</h1>
                    </div>
                     <div>
                     <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                     <h1>{item.phone}</h1>

                     </div>
                     <div>
                     <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
                     <h1>{item.email}</h1>

                     </div>
                   </Carousel>
                ))}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const name = state.data;
    const cards= state.cardetails;

    console.log("index recieved", name);
  
    return {
      name,
      cards,
    };
  };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       carded: (payload) => dispatch(carded(payload)),
//       named: (payload) => dispatch(named(payload)),
  
//     };
//   };
  export default connect(mapStateToProps, null)(Card);
  
