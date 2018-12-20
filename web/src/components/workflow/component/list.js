import React from 'react';
import { Table, Button, Input } from 'antd';
import { inject, observer } from 'mobx-react';
import PropTypes from 'prop-types';
const Search = Input.Search;

@inject('workflow')
@observer
class List extends React.Component {
  static propTypes = {
    workflow: PropTypes.object,
  };
  componentDidMount() {
    this.props.workflow.getWorkflowList();
  }
  render() {
    const { workflow } = this.props;
    const columns = [
      {
        title: intl.get('name'),
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: intl.get('workflow.recentVersion'),
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: intl.get('workflow.creator'),
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: intl.get('workflow.creationTime'),
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: intl.get('action'),
        dataIndex: 'name',
        key: 'name',
        render: () => {
          return (
            <div>
              <Button>{intl.get('operation.execute')}</Button>
            </div>
          );
        },
      },
    ];
    return (
      <div>
        <div className="head-bar">
          <Button type="primary">{intl.get('operation.add')}</Button>
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        <Table columns={columns} dataSource={workflow.workflowList} />
      </div>
    );
  }
}

export default List;