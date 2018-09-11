import React, { PureComponent } from 'react';
import { connect } from 'dva';
import {Card} from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import styles from './style.less';

@connect(({ dec, loading }) => ({
  dec,
  submitting: loading.effects['home/getHomeDec'],
}))
class Home extends PureComponent {
  componentDidMount(){
    const { dispatch, submitting } = this.props;
    dispatch({
      type: 'home/getHomeDec'
    });
  }
  render() {
    return (
      <PageHeaderWrapper
        title="基础表单"
        content="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
      >
        <Card bordered={false} >
           {this.props.dec}
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default Home