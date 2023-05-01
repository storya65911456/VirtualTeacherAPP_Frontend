import { createSlice } from '@reduxjs/toolkit';
import { isValidElement } from 'react';

const VTState = {
    data: [
        {
            date: '',
            val: '你好',
            fromUser: false
        }
    ]
};

const VTSlice = createSlice({
    name: 'VT',
    initialState: VTState,
    reducers: {
        setVTData(state, action) {
            const { date, val, fromUser } = action.payload;
            const copyState = state.data;
            switch (fromUser) {
                case true:
                    copyState.push({ date: date, val: val, fromUser: true });
                    break;
                case false:
                    copyState.push({ date: date, val: val + '---test', fromUser: false });
                    break;
            }
        },
        setDefaultVTData(state) {
            state.data = VTState.data;
        }
    }
});

export const { setVTData, setDefaultVTData } = VTSlice.actions;
export default VTSlice.reducer;
