import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'dva';

const nameSpace = 'test';
class Test extends Component {
  test = params => {
    this.props.dispatch({
      type: `${nameSpace}/init`,
      payload: {},
    });
  };
  user = params => {
    this.props.dispatch({
      type: `${nameSpace}/user`,
      payload: {},
    });
  };
  render() {
    return (
      <div>
        <Button onClick={this.test}>test</Button>
        <Button onClick={this.user}>user</Button>
      </div>
    );
  }
}

function mapStateToProps({ test }) {
  return { test };
}

export default connect(mapStateToProps)(Test);
