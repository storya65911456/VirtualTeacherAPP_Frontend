import { createSlice } from '@reduxjs/toolkit';

const userState = {
    profile: {
        id: '',
        identity: '',
        login: false
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        setLogin(state, action) {
            const { id, identity } = action.payload;
            state.profile = {
                id,
                identity,
                login: true
            };
        },
        setLogout(state) {
            state.profile = { ...userState.profile };
        }
    }
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
