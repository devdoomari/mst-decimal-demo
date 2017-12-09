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
});

Wallet.create({
  balance: new Decimal(1),
});
