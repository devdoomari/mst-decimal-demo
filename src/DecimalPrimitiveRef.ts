import {
  types,
} from 'mobx-state-tree';

export const DecimalPrimitive = types.reference(
  types.frozen as any,
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
