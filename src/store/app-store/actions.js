import * as t from './actionTypes';


export const fetchVouchers = (amount) => ({
  type: t.FETCH_VOUCHERS,
  payload: { payload: { amount } }
});