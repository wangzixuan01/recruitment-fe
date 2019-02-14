import { Component } from 'react'
import style from './CompanyList.less'

class CompanyList extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { companyList } = this.props
        return (
            <div className={style.adCompanys}>
                <ul className={`${style.adCompanyList} ${style.clearfix}`} >
                {
                    companyList.map((item,index)=>{
                        return <li key={ "hotCopany" + index} className={style.companyItem}>
                        <div className={style.top}>
                            <p>
                                <a href="https://www.lagou.com/gongsi/34863.html" target="_blank" className="" >
                                    <img src={item.companyLogo} alt="公司logo"/>
                                </a>
                            </p>
                            <p className={`${style.companyName} ${style.wordCut}`}>
                                <a href="https://www.lagou.com/gongsi/34863.html" target="_blank" >{item.companyName}</a>
                            </p>
                            <p className={`${style.indusStage} ${style.wordCut}`}>
                                <span>{item.companyClassify}</span>
                                <span>{item.financing}</span>
                            </p>
                            <p className={`${style.advantage} ${style.wordCut}`}>{item.companyAd}</p>
                        </div>
                        <div className={`${style.bottom} ${style.clearfix}`}>
                            <a className={`${style.bottomItem} ${style.bottom1} ${style.fl}`} href="https://www.lagou.com/gongsi/interviewExperiences.html?companyId=34863" target="_blank" >
                            <p className={style.green}>
                                <span>{item.interviewAssessmentCount}</span>
                            </p>
                            <p className={style.gray}>面试评价</p>
                            </a>
                            <a className={`${style.bottomItem} ${style.bottom2} ${style.fl}`} href="https://www.lagou.com/gongsi/j34863.html" target="_blank" data-lg-tj-id="19wh" data-lg-tj-no="0001" data-lg-tj-cid="">
                                <p className={style.green}>
                                    <span>{item.positionsNum}</span>
                                </p>
                                <p className={style.gray}>在招职位</p>
                            </a>
                            <a className={`${style.bottomItem} ${style.bottom3} ${style.fl}`} href="https://www.lagou.com/gongsi/34863.html" target="_blank" >
                                <p className={style.green}>
                                    <span>{item.ResumeProcessingPer}</span>
                                </p>
                                <p className={style.gray}>简历处理率</p>
                            </a>
                        </div>
                    </li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default CompanyList