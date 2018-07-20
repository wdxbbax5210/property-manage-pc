import React, {
    Component,
    PropTypes
  } from 'react';
  import { connect } from 'react-redux';
  import { bindActionCreators } from 'redux';
  import * as Act from 'actions';
  import dingApi from '../lib/dingApi';
  
  class login extends Component {
    componentDidMount() {
    
    }
    render() {
      const { actions } = this.props;
      return (
        <div className="login">
            登录页
        </div>
      );
    }
  
  }
  
  function mapStateToProps(state) {
    const props = {};
    return props;
  }
  
  function mapDispatchToProps(dispatch) {
    return {}
  }
  
  export default connect(mapStateToProps)(login);
  