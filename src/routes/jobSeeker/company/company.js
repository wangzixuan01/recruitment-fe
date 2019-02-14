import { Component } from 'react'
import { connect } from 'dva'
import { Input } from 'antd';
import CompanyList from 'components/CompanyList/CompanyList'
import style from './company.less'

const Search = Input.Search;
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
    },
    {
        "companyLogo":"https://www.lgstatic.com/thumbnail_160x160/i/image/M00/13/A5/CgqKkVbnxCOAbpbTAABF3QXQ2hc576.jpg",
        "companyName":"车轮",
        "companyClassify":"移动互联网",
        "financing":"C轮",
        "companyAd":"车轮，让有车生活更美好！",
        "interviewAssessmentCount":66,
        "positionsNum":4,
        "ResumeProcessingPer":"100%"
    },
    {
        "companyLogo":"https://www.lgstatic.com/thumbnail_160x160/i/image/M00/13/A5/CgqKkVbnxCOAbpbTAABF3QXQ2hc576.jpg",
        "companyName":"车轮",
        "companyClassify":"移动互联网",
        "financing":"C轮",
        "companyAd":"车轮，让有车生活更美好！",
        "interviewAssessmentCount":66,
        "positionsNum":4,
        "ResumeProcessingPer":"100%"
    },
    {
        "companyLogo":"https://www.lgstatic.com/thumbnail_160x160/i/image/M00/13/A5/CgqKkVbnxCOAbpbTAABF3QXQ2hc576.jpg",
        "companyName":"车轮",
        "companyClassify":"移动互联网",
        "financing":"C轮",
        "companyAd":"车轮，让有车生活更美好！",
        "interviewAssessmentCount":66,
        "positionsNum":4,
        "ResumeProcessingPer":"100%"
    },
    {
        "companyLogo":"https://www.lgstatic.com/thumbnail_160x160/i/image/M00/13/A5/CgqKkVbnxCOAbpbTAABF3QXQ2hc576.jpg",
        "companyName":"车轮",
        "companyClassify":"移动互联网",
        "financing":"C轮",
        "companyAd":"车轮，让有车生活更美好！",
        "interviewAssessmentCount":66,
        "positionsNum":4,
        "ResumeProcessingPer":"100%"
    },
    {
        "companyLogo":"https://www.lgstatic.com/thumbnail_160x160/i/image/M00/13/A5/CgqKkVbnxCOAbpbTAABF3QXQ2hc576.jpg",
        "companyName":"车轮",
        "companyClassify":"移动互联网",
        "financing":"C轮",
        "companyAd":"车轮，让有车生活更美好！",
        "interviewAssessmentCount":66,
        "positionsNum":4,
        "ResumeProcessingPer":"100%"
    },
    {
        "companyLogo":"https://www.lgstatic.com/thumbnail_160x160/i/image/M00/13/A5/CgqKkVbnxCOAbpbTAABF3QXQ2hc576.jpg",
        "companyName":"车轮",
        "companyClassify":"移动互联网",
        "financing":"C轮",
        "companyAd":"车轮，让有车生活更美好！",
        "interviewAssessmentCount":66,
        "positionsNum":4,
        "ResumeProcessingPer":"100%"
    },
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
                        <Search placeholder="搜索公司" enterButton="搜索" className = { style.search_input} size="large" />
                    </div>
                </div>
                <div className = { style.containerBody }>
                    <CompanyList companyList={ hotCompany }/>
                </div>
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(Company)