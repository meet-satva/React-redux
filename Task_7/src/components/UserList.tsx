import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/thunks/userThunk.ts";
import { useEffect } from "react";
import { AndUI } from "../ui/antd.components";
import { useState } from "react";
import useDebounce from "../customeHooks/useDebounce";
import type { AppDispatch } from "../redux/store.ts";
import type { RootState } from "../redux/store.ts";

function UserList() {
    const [searchItem, setSearchItem] = useState("");
    const {Text} = AndUI.Typography;

    const disPatch = useDispatch<AppDispatch>();cd

    const debounceSearch = useDebounce(searchItem,500);

    const {users, loading, error} = useSelector((state: RootState) => state.UserList);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchItem(e.target.value);
        console.log(e.target.value)
    }

    useEffect(() => {
        if(debounceSearch) {
          disPatch(fetchUsers(debounceSearch));
        }
    },[disPatch, debounceSearch]);

    return (
        <div>
            <AndUI.Input.Search onChange={handleChange}></AndUI.Input.Search>

            {loading && <AndUI.Spin></AndUI.Spin>}
            {error && <Text type="danger">{error}</Text>}

            {!loading && users.length > 0 && (
                <>
                  <AndUI.Row>
                    {users.map((user) => {
                        return (
                        <AndUI.Col key={user.id}>
                            <AndUI.Card hoverable title={`${user.firstName} ${user.lastName}`}>
                                 <p><strong>Email:</strong>{user.email}</p>
                                 <p><strong>Age:</strong> {user.age}</p>
                            </AndUI.Card>
                        </AndUI.Col>
                        )
                    })}
                  </AndUI.Row>
                </>
            )}

            {!loading && users.length == 0 && debounceSearch && (
                <Text>No User Found</Text>
            )}
        </div>
    );
}

export default UserList;