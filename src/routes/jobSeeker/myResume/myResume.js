import { Component } from 'react'
import { connect } from 'dva'
import style from './myResume.less'

const container = {
    height: "100%",
    paddingTop: "56px",
    paddingLeft:"20px",
    paddingRight:"20px"
 }

class MyResume extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div style = { container }>
                <div className={`${style.container} ${style.clearfix}`}>
                    <div className={`${style.clearfixs} ${style.mrWrapper}`}>
                        <div className={style.myresume}>
                            <div className={style.basic}>
                                <div className={style.basicPhoto}>
                                    <img src={"SSSS"} className={`${style.mr_headimg} ${style.userAvatar}`}/>
                                </div>
                                <div className={style.basicInfo}>
                                    <em className={`${style.editBtn} ${style.basicInfo__edit}`}>
                                        <i className={`${style.iconIcon_resume_editor} ${style.activeColor}`}></i>
                                        编辑
                                    </em>
                                    <div className={style.basicNameArea}>
                                        <p className={`${style.basicName} ${style.female}`}></p>
                                        <i className={`${style.iconSex} ${style.iconSex__male}`}></i>
                                    </div>
                                    <div className={style.basicSelf}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(MyResume)