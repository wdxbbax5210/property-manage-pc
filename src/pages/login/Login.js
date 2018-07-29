
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Act from 'actions';
import './Login.styl';
import { Radio, Input, Button, Form, Tabs, Table, Spin, Modal, message, Icon, Alert,Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.dispatch({
          type: Act.UPLOAD_LOGIN,
            params: {
              phoneNumber: values.userName,
              password: values.password
            },
          cb: (resData) => {
            console.log(resData)
            $(".login").css("display","none")
          }
        })
      }
    });
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
		return (
			<div className="login">
        <div className="content">
          <div className="title">请登录</div>
          <div className="input">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{required: true, message: '请输入正确的手机号码!',pattern: /^(((\+?\d){1,3})|((\(?\d\)?){1,5}))\d{3,15}$/, }
                    ]
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入手机号码"/>
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: '请输入密码' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
                )}
              </FormItem>
            </Form>
            <Button type="primary" className="confirm" onClick={this.handleSubmit}>登录</Button>
          </div>
          
        </div>
      </div>
		);
  }
  
  componentWillMount() {
  // this.props.dispatch({
  // 	type: Act.GET_DEPT_LIST
  // });
  }
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) { return true; }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}
}

// Uncomment properties you need
// PersonmanageComponent.propTypes = {};
// PersonmanageComponent.defaultProps = {};

const mapStateToProps = state => {
	return {
	}
}
function mapDispatchToProps(dispatch) {
  // const actions = {};
  // const actionMap = { actions: bindActionCreators(actions, dispatch) };
  // return actionMap;
  return {}
}
export default connect(mapStateToProps)(Form.create()(Login));
