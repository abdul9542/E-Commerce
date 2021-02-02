import { Form, Input, Button, Checkbox } from "antd";
import "../App.css";
import { submit, cred } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Component } from "react";
import Notification from "./Notification";
class LoginUI extends Component {
  constructor(props) {
    super(props);

    this.state = {

      email: "",
      pwd: "",
      mail: "abdul",
      pass: "rub",
      show: 0,
    };
  }

  layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  final = () => {
    // console.log("log is", this.props.islogged);
    const {  submit, cred } = this.props;
    const { email, pwd, mail, pass } = this.state;
    // if (email === mail) {
    //   logged(true);
    //   console.log("it is true");
    //   this.setState({
    //     show: true,
    //   });
    // } else {
    //   console.log("it is false");
    //   logged(false);
    //   this.setState({
    //     show: false,
    //   });
    // }
    submit({ email: email, pwd: pwd });
    console.log("onsubmit", email, pwd);
    cred({ mail: mail, pass: pass });
    console.log("actual", mail, pass);
  };

  render() {
    let button = 'button1';
    const { email, pwd, mail, pass, show } = this.state;
    // const info = 'Please input your Username!';
    // if(this.state.email !== '' && this.state.email !== this.state.mail){
    //   info= 'Incorrect Username'
    // }
    if(email === mail){
      if(pwd === pass){
        button = 'button2';

      }
    }
    return (
      <div className="login">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              value={this.state.email}
              placeholder="Username"
              onChange={(event) => this.setState({ email: event.target.value })}
            />
          </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                value={this.state.pwd}
                onChange={(event) => this.setState({ pwd: event.target.value })}
              />
            </Form.Item>
          {/* <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item> */}
         
            <Form.Item>
              <Link to="/homepage">
                <Button
                  type="primary"
                  htmlType="submit"
                  // style={{opacity:show}}
                  className={button}
                  onClick={() => this.final()}
                >
                  Log in
                </Button>
              </Link>
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
        </Form>
        {this.state.email !== "" && this.state.email !== this.state.mail ? (
          <Notification type="incorrect username" />
        ) : null}
        {this.state.pwd !== "" && this.state.pwd !== this.state.pass ? (
          <Notification type="incorrect password" />
        ) : null}
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   const islogged = state.islogged;
//   return {
//     islogged,
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (payload) => dispatch(submit(payload)),
    cred: (payload) => dispatch(cred(payload)),
  };
};
export default connect(null, mapDispatchToProps)(LoginUI);
