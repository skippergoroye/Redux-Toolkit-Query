import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../features/api/productApiSlice';
import authReducer from '../features/auth/authSlice';
import movieReducer from "../features/movies/moviesSlice";


const store = configureStore ({
    reducer: {
        auth: authReducer,
        movie: movieReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
    devTools: true,
})

export default store