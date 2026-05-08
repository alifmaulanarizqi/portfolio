export { default as PhoneFrame } from "./PhoneFrame";
export { default as POSMock } from "./POSMock";
export { default as SuperappMock } from "./SuperappMock";
export { default as LMSMock } from "./LMSMock";
export { default as FarmerMock } from "./FarmerMock";
export { default as SchedulerMock } from "./SchedulerMock";

import POSMock from "./POSMock";
import SuperappMock from "./SuperappMock";
import LMSMock from "./LMSMock";
import FarmerMock from "./FarmerMock";
import SchedulerMock from "./SchedulerMock";

export const MOCKS = {
  pos: POSMock,
  superapp: SuperappMock,
  lms: LMSMock,
  farmer: FarmerMock,
  scheduler: SchedulerMock,
} as const;

export type MockKey = keyof typeof MOCKS;
