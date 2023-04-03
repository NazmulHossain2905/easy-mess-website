import axios from "axios";
import { Flex, Input, PageLoading, Total } from "components";
import UserTable from "components/user/UserTable";
import { IUser } from "interfaces/IUser";
import React, { useEffect, useState } from "react";
import { useCustomDispatch, useCustomSelector } from "store";
import { getUsers, clearState } from "store/reducers/usersSlice";
import { theme } from "styles/theme";

const Users = () => {
  const dispatch = useCustomDispatch();
  const { data, error, loading } = useCustomSelector((state) => state.users);

  const [allUser, setAllUser] = useState(data?.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    if (data) {
      setAllUser(data?.users);
    }
  }, [data]);

  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<"all" | "verified" | "notVerified">(
    "all"
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    const search = event.target.value;

    const searchUsers = data?.users.filter(
      (user: IUser) =>
        user?.email.toLowerCase().includes(search.trim().toLowerCase()) ||
        user?.name.toLowerCase().includes(search.trim().toLowerCase()) ||
        user?.phone.includes(search.trim())
    );

    setAllUser(searchUsers);
  };

  const onStatusHandle = (value: "verified" | "notVerified" | "all") => {
    setStatus(value);
    const searchUsers = data?.users.filter((user: IUser) => {
      if (value === "verified") {
        return user.emailVerified;
      } else if (value === "notVerified") {
        return !user.emailVerified;
      } else return user;
    });

    setAllUser(searchUsers);
  };

  const { totalMess, totalUser, users } = data;

  return (
    <div>
      <div
        style={{
          padding: "10px 20px",
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.success,
          borderBottomStyle: "solid",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1
          style={{
            color: theme.colors.success,
          }}
        >
          Users
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Search by name, email & phone"
            style={{ width: "300px" }}
          />
        </div>
      </div>

      <Flex direction="row" justify="space-around">
        <Total label="Total Mess" count={totalMess} />
        <Total label="Total Users" count={totalUser} />
        <Total
          label="Verified User"
          count={users.filter((user) => user.emailVerified).length}
        />
        <Total
          label="Not Verified Users"
          count={users.filter((user) => !user.emailVerified).length}
          labelStyle={{ color: theme.colors.error }}
        />
      </Flex>

      <div
        style={{
          padding: "10px 20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <label
          style={{
            fontWeight: "bold",
            marginRight: 10,
            display: "inline-block",
          }}
          htmlFor="all"
        >
          <input
            style={{ marginRight: 5 }}
            type="radio"
            name="status"
            id="all"
            checked={status === "all"}
            onChange={(event) => onStatusHandle("all")}
          />
          All
        </label>
        <label
          htmlFor="verified"
          style={{
            fontWeight: "bold",
            marginRight: 10,
            display: "inline-block",
          }}
        >
          <input
            style={{ marginRight: 5 }}
            type="radio"
            name="status"
            id="verified"
            checked={status === "verified"}
            onChange={(event) => onStatusHandle("verified")}
          />
          Verified
        </label>
        <label
          htmlFor="notVerified"
          style={{
            fontWeight: "bold",
            marginRight: 10,
            display: "inline-block",
          }}
        >
          <input
            style={{ marginRight: 5 }}
            type="radio"
            name="status"
            id="notVerified"
            checked={status === "notVerified"}
            onChange={(event) => onStatusHandle("notVerified")}
          />
          Not Verified
        </label>
      </div>
      <PageLoading isLoading={loading} />
      <UserTable users={allUser} />
    </div>
  );
};

export default Users;
