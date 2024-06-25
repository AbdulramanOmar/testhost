
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export const programData = createAsyncThunk("program/fetch", async () => {
  try {
    const collectionRef = collection(db, "programs");
    const querySnapshot = await getDocs(collectionRef);
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ ...doc.data(), id: doc.id });
    });
    return data;
  } catch (error) {
    throw error;
  }
});

const programSlice = createSlice({
  name: "data",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(programData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(programData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(programData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default programSlice.reducer;
