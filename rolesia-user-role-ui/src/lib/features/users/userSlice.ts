import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { createUserThank, getAllUserThank, getUserByUsernameThank, updateUserAcitvieThunk, updateUserThank } from './userApi';

interface userState {
  users: any[];
  userinfo: any | null;
  role: string;
  loading: boolean;
  error: string | undefined | null; // Allow 'undefined' as a possible value
}

const initialState: userState = {
  users: [],
  userinfo: null,
  role: '',
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setSelectedRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUserThank.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUserThank.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.length > 0) {
          state.users = action.payload;
        } else if (state.users.length > 0) {
          state.users = [];
        }

        state.error = null;
      })
      .addCase(getAllUserThank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
        console.log('getAllUserThank.rejected: ', state.error);
      })
      .addCase(getUserByUsernameThank.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserByUsernameThank.fulfilled, (state, action) => {
        state.loading = false;
        state.userinfo = action.payload;
        state.error = null;
      })
      .addCase(getUserByUsernameThank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
        console.log('getUserByUsernameThank.rejected: ', state.error);
      })
      .addCase(createUserThank.pending || updateUserThank.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUserThank.fulfilled || updateUserThank.fulfilled, (state, action) => {
        state.loading = false;
        if (action.meta.arg.id) {
          state.users = state.users.map(user => user.id === action.meta.arg.id ? action.payload : user);
        } else {
          state.users.push(action.payload)
        }
        state.error = null;
      })
      .addCase(createUserThank.rejected || updateUserThank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
        console.log('createUserThank.rejected: ', state.error);
      })
      .addCase(updateUserAcitvieThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserAcitvieThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.map(user => user.id === action.meta.arg.userId ? action.payload : user);
        state.error = null;
      })
      .addCase(updateUserAcitvieThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
        console.log('updateUserAcitvieThunk.rejected: ', state.error);
      });
  },
  selectors: {
    selectUsers: (state) => state.users,
    selectUserinfo: (state) => state.userinfo,
    selectSelectedRole: (state) => state.role,
    selectUserRoles: (state) => state.userinfo?.roles.map((r: any) => r.name),
    selectFindUser: (state, userId: number) => state.users.find(user => user?.id === userId),
    getUserLoading: (state) => state.loading,
    getUserError: (state) => state.error
  },
})

export const { setUserError, setSelectedRole } = userSlice.actions;

export const {
  selectUsers,
  selectUserinfo,
  selectUserRoles,
  selectSelectedRole,
  selectFindUser,
  getUserLoading,
  getUserError,

} = userSlice.selectors;

export default userSlice.reducer;