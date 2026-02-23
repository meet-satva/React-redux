import { AntTable } from "../antd.components.ts";

type ChildProps = {
  onDelete: (id: number) => void;
};


export const userColumns = ({onDelete}: ChildProps) => [
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
    render: (_: unknown, record: {id: number}) => (
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