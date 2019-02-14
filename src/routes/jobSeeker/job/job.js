import { Component } from 'react'
import { connect } from 'dva'
import { Input } from 'antd';
import JobList from 'components/JobListings/JobListings'
import style from './job.less'

const Search = Input.Search;

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

class Company extends Component {

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
                    <JobList jobList={ recommendList }/>
                </div>
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(Company)