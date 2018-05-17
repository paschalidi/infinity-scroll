import * as t from './actionTypes';


export const fetchVouchers = (amount = 10) => ({
  type: t.FETCH_VOUCHERS,
  payload: { amount }
});