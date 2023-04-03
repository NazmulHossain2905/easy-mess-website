import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import useCustomAxios from "apis";
import { IMess } from "interfaces/IMess";
import { IUser } from "interfaces/IUser";

export const getUsers = createAsyncThunk("getUsers", async (query) => {
  const response = await useCustomAxios(`/user`, {
    params: query,
  });
  return response.data.data;
});

export interface UserState {
  data: {
    totalMess: number;
    totalUser: number;
    mess: IMess[];
    users: IUser[];
  };
  loading: boolean;
  error: string | undefined;
}

const initialState: UserState = {
  data: {
    totalMess: 0,
    totalUser: 0,
    mess: [],
    users: [],
  },
  loading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    clearState: (state, action) => {
      return {
        ...state,
        data: { totalMess: 0, totalUser: 0, mess: [], users: [] },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.data = { totalMess: 0, totalUser: 0, mess: [], users: [] };
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { clearState } = usersSlice.actions;
export default usersSlice.reducer;
