import { Component } from 'react'
import { connect } from 'dva'
import style from './companyDetails.less'

const container = {
    height: "100%",
    paddingTop: "56px",
    paddingLeft:"20px",
    paddingRight:"20px"
 }

class CompanyDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div style = { container }>
                CompanyDetails
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(CompanyDetails)