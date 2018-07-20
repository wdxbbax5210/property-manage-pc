
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Act from 'actions';
import './Login.styl';
import { Radio, Input, Button, Tabs, Table, Spin, Modal, message, Icon, Alert } from 'antd';

class Login extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      visible: true
    };
  }
  
	render() {
		return (
			<div className="login">
        <div className="content">
          <div className="title">请登录</div>
          <Input placeholder="测试测试"/>
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
export default connect(mapStateToProps)(Login);
