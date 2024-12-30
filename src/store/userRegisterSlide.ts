// store/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    password: string;
    email: string
}

const initialState: UserState = {
    username: '',
    password: '',
    email: '',
};
const RegisterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUserRegister: (state, action: PayloadAction<{ username: string, password: string, email: string }>) => {
            state
            const { username, password, email } = action.payload;
            if (!(username && password && email)) {
                return
            }
            const existLocal = localStorage.getItem('users');
            let users = existLocal ? JSON.parse(existLocal) : [];

            if (users.users) {
                users.users.push({ username, password, email });
                localStorage.setItem('users', JSON.stringify(users))

            } else {
                users.push({ username, password, email })
                localStorage.setItem('users', JSON.stringify({ users }))
            }

        },

        resetUserRegister: (state) => {
            state.username = '';
            state.password = '';
            state.email = ''
        },
    },
});

export const { addUserRegister, resetUserRegister } = RegisterSlice.actions;
export default RegisterSlice.reducer;
