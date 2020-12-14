export type FormValue = { firstName: string; lastName: string; email: string };
export type AdressValue = {
  area: string;
  city: string;
  country: string;
};
export type AdressValueType = {
  firstName: string;
  lastName: string;
  email: string;
  area?: string;
  city?: string;
  country?: string;
};
