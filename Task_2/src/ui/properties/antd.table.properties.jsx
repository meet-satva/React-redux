import { AntTable } from "../antd.components";

export const userColumns = ({onDelete}) => [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <AntTable.Space>
        <AntTable.Popconfirm
          title="Delete user"
          description="Are you sure you want to delete this user?"
          okText="Yes"
          cancelText="No"
          onConfirm={() => onDelete(record.id)}
        >
          <AntTable.Button danger type="primary">
            Delete
          </AntTable.Button>
        </AntTable.Popconfirm>
      </AntTable.Space>
    ),
  },
];