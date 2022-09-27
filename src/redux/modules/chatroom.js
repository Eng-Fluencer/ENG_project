import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../shared/api";


//채팅방 목록 가져오기
export const getChatrooms = createAsyncThunk(
    "chatroom/getChatrooms",
    async (_, thunkAPI) => {
      try {
        const data = await instance.get("/auth/chat/rooms");
        return data.data.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );


//방 생성하기  
export const createRoom = createAsyncThunk(
"chatroom/createRoom",
async (payload, thunkApI) => {
    try {
    const data = await instance.post("/auth/chat/room" , payload);
    window.alert("방을 생성하였습니다");
    window.location.assign("/list"); 
    return data
    } catch (error) {
    return thunkApI.rejectWithValue(error);
    }
}
);

//타이머 공부시간기록 저장하기
export const postTimer = createAsyncThunk(
  "chatroom/timer",
  async (payload, thunkApI) => {
      try {
      const data = await instance.post("/auth/timer" , payload);
      return data
      } catch (error) {
      return thunkApI.rejectWithValue(error);
      }
  }
  );

const initialState = {
  roomlist:[],
  };

export const chatroom = createSlice({
    name: "chatroom",
    initialState,
    reducers: {},

    extraReducers: {
        [getChatrooms.pending]: (state) => {
          state.isLoading = true; 
        },
        [getChatrooms.fulfilled]: (state, action) => {
          state.isLoading = false; 
          state.roomlist = action.payload;    
        },
        [getChatrooms.rejected]: (state, action) => {
          state.isLoading = false; 
          state.error = action.payload; 
        },
    }
  });


export default chatroom.reducer;