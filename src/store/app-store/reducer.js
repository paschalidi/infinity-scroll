import * as t from './actionTypes';
import { fetchVouchers } from '../../utils/fetchVouchers';


export const reducer = (state = { vouchers: fetchVouchers(20) }, { type, payload }) => {
  switch (type) {
    case t.FETCH_VOUCHERS:
      const newVouchers = fetchVouchers(payload.amount);
      return { vouchers: [...state.vouchers, ...newVouchers] };
  }
  return state;
};