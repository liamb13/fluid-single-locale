import type {MoneyV2} from '@shopify/hydrogen/storefront-api-types';
import type {PartialObjectDeep} from 'type-fest/source/partial-deep';

import {stegaClean} from '@sanity/client/stega';
import {Money} from '@shopify/hydrogen';

import {useSanityRoot} from '~/hooks/useSanityRoot';
import {cn} from '~/lib/utils';
import {useRootLoaderData} from '~/root';

export function ShopifyMoney({
  className,
  data,
}: {
  className?: string;
  data: PartialObjectDeep<
    MoneyV2,
    {
      recurseIntoArrays: true;
    }
  >;
}) {
  const {data: sanityRootData} = useSanityRoot();
  const showCurrencyCodes = sanityRootData?.settings?.showCurrencyCodes;
  const showTrailingZeros = sanityRootData?.settings?.showTrailingZeros;

  return (
    <Money
      className={cn('tabular-nums', className)}
      data={data}
      withoutCurrency={!showCurrencyCodes}
      withoutTrailingZeros={!showTrailingZeros}
    />
  );
}
