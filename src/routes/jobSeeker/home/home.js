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

const recommendList = [
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
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
        "companyShortDesc":["公平竞争", "发展空间大"],
        "financing":"未融资"
    },
]

const hotCompany = [
    {
        "companyLogo":"https://www.lgstatic.com/thumbnail_160x160/i/image/M00/13/A5/CgqKkVbnxCOAbpbTAABF3QXQ2hc576.jpg",
        "companyName":"车轮",
        "companyClassify":"移动互联网",
        "financing":"C轮",
        "companyAd":"车轮，让有车生活更美好！",
        "interviewAssessmentCount":66,
        "positionsNum":4,
        "ResumeProcessingPer":"100%"
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
                        <Search placeholder="搜索职位" enterButton="搜索" className = { style.search_input} size="large" />
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
                    <div className = { `${style.job_list_rapper}  ${style.clearfix}` }>
                        <ul className = { `${style.position_list_ul} ${style.clearfix}` }>
                            {
                                recommendList.map((item,index)=>{
                                    return <li key = { "listItem" +index} className={`${style.position_list_item}`}>
                                    <div className={style.pli_top}>
                                        <div className={`${style.clearfix} ${style.pli_top_l}`}>
                                            <div className={`${style.position_name} ${style.fl}`}>
                                                <h2 className={style.dib}>
                                                    <a href="https://www.lagou.com/jobs/5525272.html" target="_blank" className={`${style.position_link} ${style.fl} ${style.wordCut}`}>{item.positionName}</a>
                                                </h2>
                                                <span className={`${style.dib} ${style.createTime}`}> [{item.formatTime}] </span>
                                            </div>
                                            <span className={`${style.salary} ${style.fr}`}>{item.salary}</span>
                                        </div>
                                        <div className={`${style.position_main_info} ${style.wordCut}`}>
                                            <span>{item.experience}</span>
                                            <span>{item.educationBackground}</span>
                                        </div>
                                        <div className={style.labels}>
                                            <div className={style.pli_btm_l}>
                                            {
                                                item.companyShortDesc.map((shortDesc,idx)=>{
                                                    return <span key = { "word" + idx } className={style.wordCut} >{shortDesc}</span>
                                                })
                                            }
                                            </div>
                                        </div>
                                        <div className={`${style.pli_btm} ${style.clearfix}`}>
                                        <a href="https://www.lagou.com/gongsi/57382.html" className={style.fl} target="_blank" >
                                           <img src={item.companyLogo} alt="公司logo" className={style.companyLogo} />
                                        </a>
                                        <div className={style.bottomRight}>
                                            <div className={`${style.company_name} ${style.wordCut}`}>
                                                <a href="https://www.lagou.com/gongsi/57382.html" target="_blank" >元笛</a>
                                            </div>
                                            <div className={`${style.industry} ${style.wordCut}`}>
                                                <span>{item.companyClassify}</span>
                                                <span>{item.financing}</span>
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </li>})
                            }
                        </ul>
                        <a href="/" className={ style.list_more} >查看更多</a>
                    </div>
                    <div className = { style.moduleTabs}>热门公司</div> 
                    <div className="ad-companys">
                        <ul className="ad-company-list clearfix" >
                        {
                            hotCompany.map((item,index)=>{
                                return <li className="company-item">
                                <div className="top">
                                    <p>
                                        <a href="https://www.lagou.com/gongsi/34863.html" target="_blank" className="" data-lg-tj-id="19we" data-lg-tj-no="0001" data-lg-tj-cid="">
                                            <img src="" alt="公司logo" width="80" height="80" />
                                        </a>
                                    </p>
                                    <p className="company-name wordCut">
                                        <a href="https://www.lagou.com/gongsi/34863.html" target="_blank" data-lg-tj-id="19wf" data-lg-tj-no="0001" data-lg-tj-cid="">车轮</a>
                                    </p>
                                    <p className="indus-stage wordCut">
                                        <span>移动互联网</span>
                                        <span>C轮</span>
                                    </p>
                                    <p className="advantage wordCut">车轮，让有车生活更美好！</p>
                                </div>
                                <div className="bottom clearfix">
                                    <a className="bottom-item bottom-1 fl" href="https://www.lagou.com/gongsi/interviewExperiences.html?companyId=34863" target="_blank" >
                                    <p className="green">
                                        <span>69</span>
                                    </p>
                                    <p className="gray">面试评价</p>
                                    </a>
                                    <a className="bottom-item bottom-2 fl" href="https://www.lagou.com/gongsi/j34863.html" target="_blank" data-lg-tj-id="19wh" data-lg-tj-no="0001" data-lg-tj-cid="">
                                        <p className="green">
                                            <span>30</span>
                                        </p>
                                        <p className="gray">在招职位</p>
                                    </a>
                                    <a className="bottom-item bottom-3 fl" href="https://www.lagou.com/gongsi/34863.html" target="_blank" >
                                        <p className="green">
                                            <span>77%</span>
                                        </p>
                                        <p className="gray">简历处理率</p>
                                    </a>
                                </div>
                            </li>
                            })
                        }
                        </ul>
                        <a href="https://www.lagou.com/gongsi/" class="list_more" target="_blank" >查看更多</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(HomeView)