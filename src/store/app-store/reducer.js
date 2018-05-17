import * as t from './actionTypes';
import { fetchVouchers } from '../../utils/fetchVouchers';


export const reducer = (state = { vouchers: [] }, { type, payload }) => {
  switch (type) {
    case t.FETCH_VOUCHERS:
      return { vouchers: [...state.vouchers, payload.voucher] };
  }
  return state;
};