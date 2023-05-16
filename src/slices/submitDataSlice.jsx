import { createSlice } from '@reduxjs/toolkit';

const submitState = {
    data: [
        {
            ID: 1,
            Question: '?',
            A: '核仁',
            B: '內質網 ',
            C: '核糖體',
            D: '中心粒',
            Answer: 'B',
            Click: null,
            Finish: 0,
            Correct: null
        }
    ]
};

const submitSlice = createSlice({
    name: 'submit',
    initialState: submitState,
    reducers: {
        setSubmitData(state, action) {
            const { QAId, Click } = action.payload;
            const copyData = state.data;
            const data = copyData[QAId - 1];
            if (data.Answer == Click) {
                data.Correct = true;
            } else {
                data.Correct = false;
            }
            data.Finish = 1;
            data.Click = Click;
        },
        setSubmitDataNew(state, action) {
            const { data } = action.payload;
            state.data = data;
        },
        setSubmitDataDefault(state) {
            state.data = { ...submitState.data };
        }
    }
});

export const { setSubmitData, setSubmitDataDefault, setSubmitDataNew } =
    submitSlice.actions;
export default submitSlice.reducer;
