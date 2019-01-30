import { Component } from 'react'
import { connect } from 'dva'
import { Input, Carousel } from 'antd';
import style from './home.less'

const Search = Input.Search;

const searchJobRes = [
    {
        "id":1088420747970359296,
        "userId":9319120,
        "companyId":62,
        "salary":"15k-25k",
        "experience":"经验5-10年",
        "educationBackground":"本科",
        "jobShortDesc":["前端","人工智能"],
        "location":"上海",
        "companyLogo":"//www.lgstatic.com/thumbnail_120x120/image1/M00/30/FF/CgYXBlWKUi2AIoAzAAAl6qNPOOw036.gif",
        "companyShortName":"字节跳动",
        "positionName":"前端开发实习生-核心广告系统",
        "createTime":"20190124T205822+0800",
        "createTimeStr":"2019-01-24 20:58:22",
        "formatTime":"昨天",
        "companyName":"北京字节跳动科技有限公司",
        "positionId":5395192,
        "companyClassify":"电子商务",
        "companyShortDesc":["公平竞争", "发展空间大"]
    },
    {
        "id":1088420747970359296,
        "userId":9319120,
        "companyId":62,
        "salary":"15k-25k",
        "experience":"经验5-10年",
        "educationBackground":"本科",
        "jobShortDesc":["前端","人工智能"],
        "location":"上海",
        "companyLogo":"//www.lgstatic.com/thumbnail_120x120/image1/M00/30/FF/CgYXBlWKUi2AIoAzAAAl6qNPOOw036.gif",
        "companyShortName":"字节跳动",
        "positionName":"前端开发实习生-核心广告系统",
        "createTime":"20190124T205822+0800",
        "createTimeStr":"2019-01-24 20:58:22",
        "formatTime":"昨天",
        "companyName":"北京字节跳动科技有限公司",
        "positionId":5395192,
        "companyClassify":"电子商务",
        "companyShortDesc":["公平竞争", "发展空间大"]
    },
    {
        "id":1088420747970359296,
        "userId":9319120,
        "companyId":62,
        "salary":"15k-25k",
        "experience":"经验5-10年",
        "educationBackground":"本科",
        "jobShortDesc":["前端","人工智能"],
        "location":"上海",
        "companyLogo":"//www.lgstatic.com/thumbnail_120x120/image1/M00/30/FF/CgYXBlWKUi2AIoAzAAAl6qNPOOw036.gif",
        "companyShortName":"字节跳动",
        "positionName":"前端开发实习生-核心广告系统",
        "createTime":"20190124T205822+0800",
        "createTimeStr":"2019-01-24 20:58:22",
        "formatTime":"昨天",
        "companyName":"北京字节跳动科技有限公司",
        "positionId":5395192,
        "companyClassify":"电子商务",
        "companyShortDesc":["公平竞争", "发展空间大"]
    },
    {
        "id":1088420747970359296,
        "userId":9319120,
        "companyId":62,
        "salary":"15k-25k",
        "experience":"经验5-10年",
        "educationBackground":"本科",
        "jobShortDesc":["前端","人工智能"],
        "location":"上海",
        "companyLogo":"//www.lgstatic.com/thumbnail_120x120/image1/M00/30/FF/CgYXBlWKUi2AIoAzAAAl6qNPOOw036.gif",
        "companyShortName":"字节跳动",
        "positionName":"前端开发实习生-核心广告系统",
        "createTime":"20190124T205822+0800",
        "createTimeStr":"2019-01-24 20:58:22",
        "formatTime":"昨天",
        "companyName":"北京字节跳动科技有限公司",
        "positionId":5395192,
        "companyClassify":"电子商务",
        "companyShortDesc":["公平竞争", "发展空间大"]
    }
]

class HomeView extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div className = { style.container }>
                <div className = { style.containHeader}>
                    <div className = { style.searchWrapper }>
                        <Search placeholder="搜索职位" enterButton="搜索" className = { style.search_input} size="large" onSearch={value => console.log(value)}/>
                        <a className = { style.button } href="https://codepen.io/ARS" target="_blank"><span>button</span></a>
                    </div>
                </div>
                <div className = { style.containerBody }>
                    <div className = { style.sidebar }>
                        <ul className = { style.item_con_list }>
                            {
                                searchJobRes.map((item,index)=>{
                                    return <li key = { "list"+index } className = { style.con_list_item }>
                                        <div className = { style.list_item_top }>
                                            <div className = { style.position }>
                                                <div className = { style.p_top }>
                                                    <a className = { style.position_link}>
                                                        <h3>{item.positionName}</h3>
                                                        <span className = { style.location }>[<em>{item.location}</em>]</span>
                                                    </a>
                                                    <span className = { style.formatTime}>{item.formatTime}</span>
                                                </div>
                                                <div className = { style.p_bot}>
                                                    <div className = { style.li_b_l }>
                                                        <span className = { style.money }>{item.salary}</span>
                                                        {item.experience}/{item.educationBackground}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = { style.company }>
                                                <div className = { style.company_name }><a>{item.companyShortName}</a></div>
                                                <div className = { style.industry }>{item.companyClassify}</div>
                                            </div>
                                            <div className = { style.com_logo }><a> <img src = { item.companyLogo} /> </a></div>
                                        </div>
                                        <div className = { style.list_item_bot}>
                                            <div className = { style.li_b_l }>
                                            {
                                                item.jobShortDesc.map((desc,index)=>{
                                                    return <span key = { "desc" + index}>{desc}</span>
                                                })
                                            }
                                            </div>
                                            <div className = {style.li_b_r}>
                                            {
                                                item.companyShortDesc.map((desc,index)=>{
                                                    return <span key = { "comdesc" + index}>{desc}</span>
                                                })
                                            }
                                            </div>
                                        </div>
                                    </li>

                                })
                            }
                        </ul>
                    </div>
                    <div className = { style.carouselStyle}>
                        <Carousel autoplay>
                            <div><img src="https://www.lgstatic.com/i/image2/M01/D5/99/CgoB5lxPxluAU2TvAAq5yi546ok725.PNG" /></div>
                            <div><img src="https://www.lgstatic.com/i/image2/M01/D5/99/CgoB5lxPxluAU2TvAAq5yi546ok725.PNG" /></div>
                            <div><img src="https://www.lgstatic.com/i/image2/M01/D5/99/CgoB5lxPxluAU2TvAAq5yi546ok725.PNG" /></div>
                            <div><img src="https://www.lgstatic.com/i/image2/M01/D5/99/CgoB5lxPxluAU2TvAAq5yi546ok725.PNG" /></div>
                        </Carousel>
                    </div>
                    <div className = { style.moduleTabs}>推荐职位</div>
                    <div className = { style.moduleTabs}>热门公司</div>
                </div>
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(HomeView)