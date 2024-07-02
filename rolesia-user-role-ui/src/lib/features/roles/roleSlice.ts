import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getRolesThunk } from './roleApi';

interface roleState {
  roles: any[];
  loading: boolean;
  error: string | undefined | null; // Allow 'undefined' as a possible value
}

const initialState: roleState = {
  roles: [],
  loading: false,
  error: null,
};

const roleSlice = createSlice({
  name: "role",
  initialState,
  reducers: {
    setRoleError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRolesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getRolesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action?.payload;
        state.error = null;
      })
      .addCase(getRolesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
        console.log('getRolesThunk.rejected: ', state.error);
      });
  },
  selectors: {
    selectRoles: (state) => state.roles,
    selectFindRole: (state, id: number) => state.roles.find(m => m?.id === id),
    getRoleLoading: (state) => state.loading,
    getRoleError: (state) => state.error
  },

});

export const {
  setRoleError,
} = roleSlice.actions;

export const {
  selectRoles,
  selectFindRole,
  getRoleLoading,
  getRoleError,

} = roleSlice.selectors;

export default roleSlice.reducer;