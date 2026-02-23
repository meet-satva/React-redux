import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from "../redux/slices/userSlice";
import { AntTable } from '../ui/antd.components.ts';
import { userColumns } from '../ui/properties/antd.table.properties.tsx';
import type { RootState, AppDispatch } from '../redux/store.ts';

const UserDetails: React.FC  = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [messageApi, contextHolder] = AntTable.message.useMessage();
    const { users } = useSelector((state: RootState) => state.users);

    const handleDelete = (id: number) => {
        dispatch(deleteUser(id));
        messageApi.success("User deleted successfully");

    };

    return (
        <div>
            {contextHolder}
            <AntTable.Table columns={userColumns({ onDelete: handleDelete })} dataSource={users} pagination={false}/>
        </div>
    );
}

export default UserDetails;