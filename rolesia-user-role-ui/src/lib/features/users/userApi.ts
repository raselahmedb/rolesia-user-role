import { RootState } from "@/lib/store";
import request from "@/utils/request";
import { createAsyncThunk } from "@reduxjs/toolkit";


export function createUser(name: string,
  email: string,
  phone: string,
  password: string) {
  return request({
    url: `/auth/register`,
    method: 'post',
    data: {
      name, email, phone, password
    }
  });
}


export const createUserThank = createAsyncThunk<any, any, { state: RootState }>(
  'user/create',
  async (data) => {
    try {
      const response = await request({
        url: "/user/create",
        method: "post",
        data
      });
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log("createUserThank: " + error);
      throw error;
      // return thunkAPI.rejectWithValue(error || 'An error occurred');
    }
  }
);


export const updateUserThank = createAsyncThunk<any, any, { state: RootState }>(
  'user/update',
  async (data) => {
    try {
      const response = await request({
        url: "/user/update",
        method: "put",
        data
      });
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log("createUserThank: " + error);
      throw error;
      // return thunkAPI.rejectWithValue(error || 'An error occurred');
    }
  }
);

export const getAllUserThank = createAsyncThunk<any, void, { state: RootState }>(
  'user',
  async (_) => {
    try {
      const response = await request({
        url: "/user",
        method: "get"
      });
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log("getAllUserThank: " + error);
      throw error;
      // return thunkAPI.rejectWithValue(error || 'An error occurred');
    }
  }
);

export const getUserByUsernameThank = createAsyncThunk<any, {username: string}, { state: RootState }>(
  'user/username',
  async (username) => {
    try {
      const response = await request({
        url: `/user/${username}`,
        method: "get"
      });
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log("getUserByUsernameThank: " + error);
      throw error;
      // return thunkAPI.rejectWithValue(error || 'An error occurred');
    }
  }
);

export function signIn(username: string, password: string) {
  return request({
    url: "/auth/signin",
    method: "post",
    data: { username, password }
  })
}

export function getUsers() {
  return request({
    url: "/user",
    method: "GET",
  });
}


export const updateUserAcitvieThunk = createAsyncThunk<any, { userId: number }, { state: RootState }>(
  'user/activeinactive',
  async ({ userId }) => {
    try {
      const response = await request({
        url: `/user/activeinactive/${userId}`,
        method: 'post',
      });
      // console.log(response);

      return response.data;
    } catch (error) {
      console.log("updateUserAcitvieThunk: " + error);
      throw error;
      // return thunkAPI.rejectWithValue(error || 'An error occurred');
    }
  }
);