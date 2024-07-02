"use client";

import { useAuthToken } from "@/utils/userAuthToken";
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react";

export default function Oauth2RedirectPage() {

    const receiveToken = async () => {
        const searchParams = await useSearchParams();
        const router = await useRouter();
        const { setToken } = await useAuthToken();

        const token = await searchParams.get('token');
        if (token) {
            await setToken(token || "");
            router.push("/");
        }
    }

    useEffect(() => {
        receiveToken();
    }, [receiveToken])
    // URL -> `/dashboard?search=my-project`
    // `search` -> 'my-project'
    return <></>
}