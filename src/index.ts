import Decimal from 'decimal.js';
import { } from 'lodash';
import {
  types,
} from 'mobx-state-tree';

import {
  DecimalPrimitive,
} from './DecimalPrimitiveRef';
export type WalletType = {
  balance: Decimal,
};

export const _Wallet = types.model<
  Partial<WalletType> & {
    __balance?: Decimal,
  }
>('wallet', {
  __balance: DecimalPrimitive,
})
;

const __Wallet = _Wallet
  .views((self: any) => ({
    get balance() {

      return (self as __WalletMSTType)._balance;
    },
  }))
  .actions((self: any) => ({
    set(args: {
      balance: Decimal,
    }) {
      (self as __WalletMSTType)._balance = args.balance;
    }
  }));

  type __WalletMSTType = typeof __Wallet & {
    _create?: typeof __Wallet.create,
    _balance?: Decimal,
  };
  const Wallet: __WalletMSTType = (__Wallet as any);
  Wallet._create = Wallet.create;
  Wallet.create = (args: any) => {
    const newArgs = {
      ...args,
      __balance: (args.__balance as Decimal).toString(),
    };
    console.error('Wallet.create!');
    this._balance = args.__balance;
    return (Wallet._create!(newArgs) as any);
  };
const wallet1 = Wallet.create({
  __balance: new Decimal(1),
});
console.error(wallet1);

wallet1.set({ balance: new Decimal(3) })

console.error(wallet1.balance!.toString());
