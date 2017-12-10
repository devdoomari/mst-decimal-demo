import {
  types,
} from 'mobx-state-tree';
import Decimal from 'decimal.js';

export const DecimalPrimitive = types.reference(
  types.string as any,
  {
    get(value: string | number) {
      console.error(`
      ----------------------------
        DecimalPrimitive(REF):: get
        ${value}
      ----------------------------
      `);
      return new Decimal(value)
    },
    set(value: Decimal) {
      console.error(`
      ----------------------------
        DecimalPrimitive(REF):: set
        ${value}
      ----------------------------
      `);
      return value.toString()
    }
  }
);
