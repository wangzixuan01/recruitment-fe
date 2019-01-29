import React, { Component } from 'react';
import { connect } from 'dva'
import { Link, withRouter } from 'dva/router'
import style from './header.less'

const jobSeekerData = [
        {
            name:"首页",
            link:"/jobSeeker/home"
        },
        {
            name:"公司",
            link:"/jobSeeker/company"
        },
        {
            name:"岗位",
            link:"/jobSeeker/job"
        },
        {
            name:"校园招聘会",
            link:"/jobSeeker/campusJob"
        },
        {
            name:"我的简历",
            link:"/jobSeeker/myResume"
        },
        {
            name:"投递箱",
            link:"/jobSeeker/dropBox"
        },
        {
            name:"收藏夹",
            link:"/jobSeeker/bookmarks"
        }
    ]

const enterpriseData = [
        {
            name:"公司详情",
            link:"/enterprise/companyDetails"

        },
        {
            name:"职位",
            link:"/enterprise/jobTitle"
        },
        {
            name:"简历列表",
            link:"/enterprise/resumeList"
        },
        {
            name:"宣讲会",
            link:"/enterprise/careerTalk"
        }
    ]

const enterpriseEnter = {
    to:"/enterprise",
    desc:"进入企业版",
    location:"当前求职版"
}

const jobSeekerEnter = {
    to:"/jobSeeker",
    desc:"进入求职版",
    location:"当前企业版"
}
class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo:{},
            version:"jobSeeker",
            navData:jobSeekerData,
            entrance:enterpriseEnter
        }
    }

    changeVersion(){
        if(this.state.version==="jobSeeker"){
            this.setState({version:"enterprise",navData:enterpriseData,entrance:jobSeekerEnter})
        }else if(this.state.version==="enterprise"){
            this.setState({version:"jobSeeker",navData:jobSeekerData,entrance:enterpriseEnter})
        }
    }

    renderFace(){
        var f = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'];
        function loop() {
            let face = f[Math.floor((Date.now()/100)%f.length)];
            setTimeout(loop, 50);
            return face
        }
        return loop();
    }
 
    render () {
        const { pathname } = this.props.location
        return (
            <div className={style.header} >
                <div className = { style.bar }>
                    <div className = { style.inner }>
                        <div className = { style.tbar_l}>
                            <a className = { style.app } target="_blank">校园招聘平台</a>
                            <span className = { style.location } >{ this.state.entrance.location }</span>
                            <Link className={ style.os } to={this.state.entrance.to} onClick = { this.changeVersion.bind(this)}>{this.state.entrance.desc}</Link>
                        </div>
                        <ul className = { style.tbar_r}>
                            <li className={ style.userInfo }>
                                <img alt="avatar" src = { "https://pic5.40017.cn/01/000/18/69/rBANC1vQHdiAAeB2AAE2L6PL76E836.jpg" }  className={ style.avatar } />
                            </li>
                            <li><div className={ style.os }>李白</div></li>
                            <li><span className = { style.exit }>退出</span></li>
                        </ul>
                    </div>
                </div>
                <div className = { style.nav }>
                    <div className = { style.inner}>
                        <div className = { style.tnav_l}>
                            <div className = { style.suggestCity }>
                                <span>{this.renderFace()}</span>
                                <strong>上海站</strong>
                                <em className = { style.changeCity_btn }>[切换城市]</em>
                            </div>
                            <ul className = { style.tnav_wrap }>
                            {
                                this.state.navData.map((item,index)=>{
                                    return <li key = { index }><Link className={ pathname.indexOf(item.link) !== -1 ? style.current : style.normal} to={item.link} >{item.name}</Link></li>
                                })
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 
export default withRouter(connect((state) => {
	return {userInfo:state.userInfo, loading: state.loading }
})(Header))