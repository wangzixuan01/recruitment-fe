import { Component } from 'react'
import style from './JobListings.less'

class JobListings extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        const { jobList } = this.props
        return (
            <div>
                <ul className = { `${style.position_list_ul} ${style.clearfix}` }>
                {
                    jobList.map((item,index)=>{
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
            </div>
        )
    }
}

export default JobListings