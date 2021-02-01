import { Layout, Menu, Breadcrumb } from "antd";
import "../App.css";

import { connect } from "react-redux";
import { carded } from "../actions";
import { Card, Col, Row, Avatar } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import React, { Component } from "react";
import user from "../user.webp";
import "antd/dist/antd.css";

// import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Item from "antd/lib/list/Item";

const { Meta } = Card;
// const { Header, Footer, Sider, Content } = Layout;
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
      ],
    };
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
        {this.state.name === "" ? (
          <Row gutter={16}>
            {this.state.cards.map((item, index) => (
              <Col
                span={8}
                key={index}
                onClick={() => this.setState({ name: item.name })}
              >
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                  }
                  actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                >
                  <Meta
                    avatar={
                      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                    title={item.name}
                    description="This is the description"
                  />
                </Card>
              </Col>
            ))}
          </Row>
        ) : null}
        {this.state.name !== "" ? (
          <div>
            <button onClick={() => this.setState({ name: "" })}>Cards</button>
            {filtered.map((item, index) => (
              <Layout key={index}>
                <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
                  <div className="logo" />
                  <Menu theme="light" mode="horizontal">
                    <Menu.Item key="1">{item.name}</Menu.Item>
                  </Menu>
                  <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                  <h2>Username : {item.username}</h2>
                  <h2>Email : {item.email}</h2>
                  <h2>Phone :{item.phone}</h2>
                  <h2>
                    Address :{item.address.street},{item.address.city}
                  </h2>
                  <h2>Pin :{item.address.zipcode}</h2>
                </Header>

                <Footer style={{ textAlign: "center" }}>
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
            ))}
          </div>
        ) : null}
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
