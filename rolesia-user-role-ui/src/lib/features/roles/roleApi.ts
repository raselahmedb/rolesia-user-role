import { RootState } from "@/lib/store";
import request from "@/utils/request";
import { createAsyncThunk } from "@reduxjs/toolkit";

export function getRoles() {
  return request({
    url: `/role`,
    method: 'get'
  });
}

export const getRolesThunk = createAsyncThunk<any, void, { state: RootState }>(
  'role',
  async (_) => {
    try {
      const response = await request({
        url: `/role`,
        method: 'get',
      });
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log("getRolesThunk: " + error);
      throw error;
      // return thunkAPI.rejectWithValue(error || 'An error occurred');
    }
  }
);

export function createRole(data: any) {
  return request({
    url: `/role`,
    method: 'post',
    data
  });
}

export function deleteRole(roleId: number) {
  return request({
    url: `/role/${roleId}`,
    method: 'delete',
  });
}