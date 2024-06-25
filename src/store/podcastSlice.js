import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

export const fetchPodcasts = createAsyncThunk("podcasts/fetch", async () => {
  try {
    const collectionRef = collection(db, "podcasts");
    const querySnapshot = await getDocs(collectionRef);
    const pod = [];
    querySnapshot.forEach((doc) => {
      pod.push({ ...doc.data(), id: doc.id });
    });
    return pod;
  } catch (error) {
    throw error;
  }
});

const podcastSlice = createSlice({
  name: "podcasts",
  initialState: {
    podcasts: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodcasts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPodcasts.fulfilled, (state, action) => {
        state.loading = false;
        state.podcasts = action.payload;
      })
      .addCase(fetchPodcasts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default podcastSlice.reducer;
