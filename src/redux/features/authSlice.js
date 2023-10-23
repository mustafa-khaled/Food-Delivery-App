import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding";

// Initial state from local storage, if available
const storedUser = JSON.parse(localStorage.getItem("user"));

function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const fetchAddress = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    // 1) We get the user's geolocation position
    const positionObj = await getPosition();
    const position = {
      latitude: positionObj.coords.latitude,
      longitude: positionObj.coords.longitude,
    };

    // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
    const addressObj = await getAddress(position);
    const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

    // 3) Then we return an object with the data that we are interested in
    return { position, address };
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: storedUser || null,
  },
  reducers: {
    setUser: (state, action) => {
      const user = action.payload;
      state.user = user;

      // Save user data to localStorage
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
