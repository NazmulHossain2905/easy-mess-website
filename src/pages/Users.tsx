import axios from "axios";
import { Flex, PageLoading, Total } from "components";
import UserTable from "components/user/UserTable";
import { IUser } from "interfaces/IUser";
import React, { useEffect, useState } from "react";
import { theme } from "styles/theme";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAllUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://easy-mess-pro.onrender.com/api/v1/user"
      );
      setUsers(response.data.data.users);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
      <h1
        style={{
          padding: "10px 20px",
          color: theme.colors.success,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.success,
          borderBottomStyle: "solid",
        }}
      >
        Users
      </h1>
      <Flex direction="row" justify="space-around">
        <Total label="Total Users" count={users.length} />
        <Total
          label="Total Mess"
          count={467}
          style={
            {
              // borderWidth: 1,
              // borderColor: "#ccc",
              // borderStyle: "solid",
              // borderTopWidth: 0,
              // borderBottomWidth: 0,
              // backgroundColor: "#fff",
            }
          }
        />
        <Total
          label="Unverified Users"
          count={users.filter((user) => !user.emailVerified).length}
          style={
            {
              // borderRightWidth: 1,
              // borderRightColor: "#ccc",
              // borderRightStyle: "solid",
              // backgroundColor: "#fff",
            }
          }
        />
        <Total
          label="Verified User"
          count={users.filter((user) => user.emailVerified).length}
        />
      </Flex>
      {loading ? <PageLoading /> : <UserTable users={users} />}
    </div>
  );
};

export default Users;
