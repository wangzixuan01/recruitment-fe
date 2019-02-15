import { Component } from 'react'
import { connect } from 'dva'
import { Table,Input } from 'antd';
import style from './campusJob.less'
const Search = Input.Search;

const columns = [
    { title: 'logo', dataIndex: 'logo', key: 'logo',render:(record) => {
        return <img src={record} alt="" style={{width:'40px',height:'40px',borderRadius:'50%'}}/>} 
    },
    { title: '公司', dataIndex: 'company', key: 'company' },
    { title: '时间', dataIndex: 'holdtime', key: 'holdtime' },
    { title: '学校', dataIndex: 'school', key: 'school' },
    { title: '地点', dataIndex: 'address', key: 'address' },
    {
      title: '操作', dataIndex: '', key: 'x', render: () => <a href="javascript:;">投递简历</a>,
    },
  ];

const data = [
    {
        key: 1, logo: "https://cdn6.haitou.cc/university/12.png", company: "中国国家博物馆",holdtime: "2019-03-18 10:00:00",school:"华中科技大学",address: "就业中心419报告厅-北区食堂419室", description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
        key: 2, logo: "https://cdn6.haitou.cc/university/12.png", company: "中国国家博物馆",holdtime: "2019-03-18 10:00:00",school:"华中科技大学",address: "就业中心419报告厅-北区食堂419室", description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
        key: 3, logo: "https://cdn6.haitou.cc/university/12.png", company: "中国国家博物馆",holdtime: "2019-03-18 10:00:00",school:"华中科技大学",address: "就业中心419报告厅-北区食堂419室", description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
        key: 4, logo: "https://cdn6.haitou.cc/university/12.png", company: "中国国家博物馆",holdtime: "2019-03-18 10:00:00",school:"华中科技大学",address: "就业中心419报告厅-北区食堂419室", description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
        key: 5, logo: "https://cdn6.haitou.cc/university/12.png", company: "中国国家博物馆",holdtime: "2019-03-18 10:00:00",school:"华中科技大学",address: "就业中心419报告厅-北区食堂419室", description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
    {
        key: 6, logo: "https://cdn6.haitou.cc/university/12.png", company: "中国国家博物馆",holdtime: "2019-03-18 10:00:00",school:"华中科技大学",address: "就业中心419报告厅-北区食堂419室", description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
    },
]

class CampusJob extends Component {

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
                <Table
                    columns={columns}
                    expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                    dataSource={data}
                />
                </div>
            </div>
        )
    }
}

export default connect(state => {
	return { ...state.home, loading: state.loading}
})(CampusJob)