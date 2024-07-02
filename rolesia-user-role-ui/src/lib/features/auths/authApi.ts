import { RootState } from '@/lib/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import request from "@/utils/request";

export const authSigninThank = createAsyncThunk<any, { username: string, password: string }, { state: RootState }>(
    'auth/signin',
    async ({ username, password }) => {
        
        try {
            const response = await request({
                url: "/auth/signin",
                method: "post",
                data: { username, password }
            });

            return response.data;
        } catch (error) {
            // console.log("fetchAuth: " + error);
            throw error;
        }
    }
);
