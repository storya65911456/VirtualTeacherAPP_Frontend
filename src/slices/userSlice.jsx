import { createSlice } from '@reduxjs/toolkit';

const userState = {
    profile: {
        id: '',
        identity: '',
        correct_num: '',
        incorrect_num: '',
        login: false
    }
};

const userSlice = createSlice({
    name: 'user',
    initialState: userState,
    reducers: {
        setLogin(state, action) {
            const { id, identity, correct_num, incorrect_num } = action.payload;
            state.profile = {
                id,
                identity,
                correct_num,
                incorrect_num,
                login: true
            };
            console.log(state.profile);
        },
        setLogout(state) {
            state.profile = { ...userState.profile };
        }
    }
});

export const { setLogin, setLogout } = userSlice.actions;
export default userSlice.reducer;
