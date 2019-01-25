import React, { Component } from 'react';
import { connect } from 'dva'
import { Link, withRouter } from 'dva/router'
import style from './header.less'

const barData = [
    {
        name:"我的简历",
        link:"/myResume"
    },
    {
        name:"投递箱",
        link:"/dropBox"
    },
    {
        name:"收藏夹",
        link:"/bookmarks"
    }
]

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{}
        }
    }
 
    render () {
        return (
            <div className={style.header} >
                <div className = { style.bar }>
                    <div className = { style.inner }>
                        <div className = { style.tbar_l}>
                            <a className = { style.app } target="_blank">校园招聘平台</a>
                            <Link className={ style.os } to={"/home"} >进入企业版</Link>
                        </div>
                        <ul className = { style.tbar_r}>
                        {
                            barData.map((item,index)=>{
                                return <li key = { index }><Link className={ style.os } to={item.link} >{item.name}</Link></li>
                            })
                        }
                            <li className={ style.userInfo }>
                                <img alt="avatar" src = { "https://pic5.40017.cn/01/000/18/69/rBANC1vQHdiAAeB2AAE2L6PL76E836.jpg" }  className={ style.avatar } />
                            </li>
                            <li><div className={ style.os }>李白</div></li>
                            <li><span className = { style.exit }>退出</span></li>
                        </ul>
                    </div>
                </div>
                <div className = { style.nav }>
                    
                </div>
            </div>
        );
    }
} 
export default Header