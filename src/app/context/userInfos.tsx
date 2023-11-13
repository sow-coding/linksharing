"use client"

import { createContext } from 'react';

const UserInfosContext = createContext<object>({
    firstName :"",
    lastName: "",
    email: ""
});

export default UserInfosContext