import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {Card} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


@connect(({ profile, loading }) => ({
    profile,
    
  }))
class Manage extends PureComponent {
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'profile/fetchBasic',
    });
  }
  render() {
    const { profile, loading } = this.props;
    const { basicGoods, basicProgress } = profile;
    return (
      <PageHeaderWrapper
        title="基础表单"
        content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
      >
        <Card bordered={false} >
           {basicGoods.map((item)=>{
             return (<div key={item.name}>{item.name}</div>) 
           })}
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Manage