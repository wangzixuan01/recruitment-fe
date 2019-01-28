import { Component } from 'react'
import { connect } from 'dva'
import style from './jobTitle.less'

const container = {
    height: "100%",
    paddingTop: "56px",
    paddingLeft:"20px",
    paddingRight:"20px"
 }

class JobTitle extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div style = { container }>
                JobTitle
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(JobTitle)