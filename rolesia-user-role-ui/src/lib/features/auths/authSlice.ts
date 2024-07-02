import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authSigninThank } from './authApi';
import { store } from "@/lib/store";
import { useAuthToken } from "@/utils/userAuthToken";

interface AuthState {
  username: string | null;
  user: any | null;
  token: string | null;
  message: string | null;
  loading: boolean;
  error: string | undefined | null; // Allow 'undefined' as a possible value
}

const initialState: AuthState = {
  username: '',
  user: null,
  token: '',
  message: null,
  loading: false,
  error: null,
}

const { setToken, removeToken, parseJwt } = useAuthToken();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // state.status = true;
      const token = action.payload;
      const data = parseJwt(token);
      state.user = { data, accessToken:token };
      state.token = token;
    },
    logout: (state) => {
      // state.status = false;
      state.token = '';
      state.username = '';
      state.user = null;
      state.loading = false;
      state.error = null;
      removeToken();
      state.message = null;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
      removeToken()
    },
    setMessage: (state, action: PayloadAction<string | null>) => {
      state.message = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authSigninThank.pending, (state) => {
        // console.log('fetchAuth.pending', state);
        state.loading = true;
      })
      .addCase(authSigninThank.fulfilled, (state, action) => {
        state.loading = false;
        // console.log(action);
        const token = action.payload;
        state.token = token;
        const data = parseJwt(token);
        state.user = { data, accessToken:token };
        setToken(token);
        state.username = action.meta.arg.username;
        state.error = null;
        state.message = "Success"
      })
      .addCase(authSigninThank.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error?.message;
        state.message = "error"
      });
  },
})

export const { login, logout, setError, setMessage } = authSlice.actions;

export const getToken = (state: ReturnType<typeof store.getState>) => state.auth.token;
export const selectIsUser = (state: ReturnType<typeof store.getState>) => state.auth.user?.data?.rol[0] === 'USER';
export const selectIsAdmin = (state: ReturnType<typeof store.getState>) => state.auth.user?.data?.rol[0] === 'ADMIN';
export const selectUsername = (state: ReturnType<typeof store.getState>) => state.auth.username;
export const selectUser = (state: ReturnType<typeof store.getState>) => state.auth.user;
export const getMessage = (state: ReturnType<typeof store.getState>) => state.auth.message;
export const getLoading = (state: ReturnType<typeof store.getState>) => state.auth.loading;
export const getError = (state: ReturnType<typeof store.getState>) => state.auth.error;

export default authSlice.reducer;