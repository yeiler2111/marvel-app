import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    username: string;
    password: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    username: '',
    password: '',
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        verifyUser: (state, action: PayloadAction<{ username: string, password: string }>) => {
            const { username, password } = action.payload;


            const savedUsers = localStorage.getItem('users');
            let users = savedUsers ? JSON.parse(savedUsers) : { users: [{ username: 'user', password: 'user' }] };


            const user = users.users.find((user: { username: string, password: string }) =>
                user.username === username && user.password === password
            );

            if (user) {

                return { ...state, isLoggedIn: true };
            } else {
                // Si no se encuentra, mantener isLoggedIn en false
                return { ...state, isLoggedIn: false };
            }
        },
        resetUser: (state) => {
            state.username = '';
            state.password = '';
            state.isLoggedIn = false; // Agregado para limpiar el estado de login al resetear
        },
    },
});

export const { verifyUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
