import { Component } from 'react'
import { connect } from 'dva'
import style from './bookmarks.less'

const container = {
    height: "100%",
    paddingTop: "56px",
    paddingLeft:"20px",
    paddingRight:"20px"
 }

class Bookmarks extends Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div style = { container }>
                Bookmarks
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(Bookmarks)