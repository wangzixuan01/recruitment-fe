import { Component } from 'react'
import { connect } from 'dva'
import style from './home.less'

const container = {
    paddingBottom: "39px"
 }

class HomeView extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div style = { container }>
                <div className = { style.containHeader}>

                </div>
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(HomeView)