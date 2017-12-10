import Decimal from 'decimal.js';
import {
  types,
} from 'mobx-state-tree';

import {
  DecimalPrimitive,
} from './DecimalPrimitiveRef';
export type WalletType = {
  balance: Decimal,
};

export const Wallet = types.model<WalletType>('wallet', {
  balance: DecimalPrimitive,
})
.actions(self => ({
  set(args: {
    balance: Decimal,
  }) {
    self.balance = args.balance;
  }
}))
;

const wallet1 = Wallet.create({
  balance: new Decimal(1).toString(),
});

wallet1.set({ balance: new Decimal(3) })
