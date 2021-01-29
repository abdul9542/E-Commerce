import { Button, notification } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import {connect} from 'react-redux';
import {log} from '../actions';

import React, { Component } from 'react'

export class Notification extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:'',
        }
    }
    
    render() {
        const data = this.state.data
        if(this.props.log === true){
            this.setState({
                data:'LOGIN SUCCESSFULL',
            })
        }else{
            this.setState({
                data:'INCORRECT USERNAME OR PASSWORD',
            })
        }
        return (
            <div>
                {
                    notification.open({
                        message: 'Notification Title',
                        description:
                          data,
                        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                    })
                }
            </div>
        )
    }
}


const mapStateToProps = state =>{
    const {log} = state.islogged;
    return{
        log
    }
}

export default connect(mapStateToProps,null)( Notification);

