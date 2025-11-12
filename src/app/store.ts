import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { onboardingApi } from '@/features/onboarding/api/onboardingApi';
import { cleaningApi } from '@/features/cleaning/api/cleaningApi';
import { plumbingApi } from '@/features/plumbing/api/plumbingApi';
import { electricalApi } from '@/features/electrical/api/electricalApi';
import { drivingApi } from '@/features/driving/api/drivingApi';
import { gasApi } from '@/features/gas/api/gasApi';
import { turfApi } from '@/features/turf/api/turfApi';
import { vehicleApi } from '@/features/vehicle/api/vehicleApi';

export const store = configureStore({
  reducer: {
    [onboardingApi.reducerPath]: onboardingApi.reducer,
    [cleaningApi.reducerPath]: cleaningApi.reducer,
    [plumbingApi.reducerPath]: plumbingApi.reducer,
    [electricalApi.reducerPath]: electricalApi.reducer,
    [drivingApi.reducerPath]: drivingApi.reducer,
    [gasApi.reducerPath]: gasApi.reducer,
    [turfApi.reducerPath]: turfApi.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(onboardingApi.middleware)
      .concat(cleaningApi.middleware)
      .concat(plumbingApi.middleware)
      .concat(electricalApi.middleware)
      .concat(drivingApi.middleware)
      .concat(gasApi.middleware)
      .concat(turfApi.middleware)
      .concat(vehicleApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

