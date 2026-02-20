import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from "../redux/slices/userSlice";
import { AntTable } from '../ui/antd.components';
import { userColumns } from '../ui/properties/antd.table.properties';

function UserDetails() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div>
            <AntTable.Table columns={userColumns({ onDelete: handleDelete })} dataSource={users} pagination={false}/>
        </div>
    );
}

export default UserDetails;