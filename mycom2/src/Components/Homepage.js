import { Layout, Menu, Breadcrumb } from "antd";
import "../App.css";
import { Link } from "react-router-dom";
import { Image } from 'antd';
import { connect } from "react-redux";
import { carded, named } from "../actions";
import { Card, Col, Row, Avatar } from "antd";
import dp1 from '../dp1.jpg';
import dp2 from '../dp2.jpg';
import dp3 from '../dp3.jpg';
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import user from "../user.webp";
import "antd/dist/antd.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Item from "antd/lib/list/Item";


const { Meta } = Card;
const { Header, Content, Footer } = Layout;

const gridStyle = {
  width: "25%",
  textAlign: "center",
};
export class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      cards: [
        {
          name: "Leanne Graham",
          username: "Bret",
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", email: "Sincere@april.biz",
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
          image:dp1, email: "Shanna@melissa.tv",
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
          image:dp2, email: "Nathan@yesenia.net",
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
          image:dp3, email: "Julianne.OConner@kory.org",
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
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", email: "Lucio_Hettinger@annie.ca",
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
        {
          name: "Leanne Graham",
          username: "Bret",
          image:dp1, email: "Sincere@april.biz",
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
          image:dp3, email: "Shanna@melissa.tv",
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
          image:dp2, email: "Nathan@yesenia.net",
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
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", email: "Julianne.OConner@kory.org",
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
          name: "Ervin Howell",
          username: "Antonette",
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", email: "Shanna@melissa.tv",
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
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", email: "Nathan@yesenia.net",
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
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", email: "Julianne.OConner@kory.org",
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
          image:"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", email: "Lucio_Hettinger@annie.ca",
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
      ],
    };
  }
  naming=(name)=>{
    this.props.named(name);
    console.log("value", name);
  }
  render() {
    let card = [];
    const filtered = this.state.cards.filter(
      (item) => item.name === this.state.name
    );
    console.log("cards", this.state.cards);
    if (this.state.id !== "") {
      card = this.state.cards[this.state.id];
      console.log("card", card);
    }
    console.log("index", this.state.id);
    return (
      <div className="site-card-border-less-wrapper">
        <Row  className="row">
          {this.state.cards.map((item, index) =>
          (
            <Link to={`/homepage/${index+1}`}>
              <Col
                className="item"
                key={index}
                onClick={() => this.naming(item.name)}
              >
                <Card
                  hoverable
                  style={{ width: 250 }}
                  cover={<img alt="example" src={item.image} />}
                >
                  <Meta title={item.name} description="www.instagram.com" />
                </Card>
              </Col>
            </Link>
          ))}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const cardetails = state.cardetails;
  console.log("cards recieved", cardetails);

  return {
    cardetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    carded: (payload) => dispatch(carded(payload)),
    named: (payload) => dispatch(named(payload)),

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

