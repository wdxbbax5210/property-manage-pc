
import React from 'react';
require('./home.styl');

import { Input } from 'antd';
import Import from 'components/import/Import';
import Login from '../login/Login';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isShopwFilter : true
        };
    }
    render() {
        return (
            <div className="home">
                <div className="header">首页</div>
                <Import type="manage"/>
                <Login/>
								<div className="number" onClick={()=>{window.open('http://www.beian.miit.gov.cn/')}}>沪ICP备18028154号-1</div>
            </div>
        );
    }
}

module.exports = Home;
