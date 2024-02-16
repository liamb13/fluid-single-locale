import type {CartApiQueryFragment} from 'storefrontapi.generated';

import {flattenConnection} from '@shopify/hydrogen';
import {cx} from 'class-variance-authority';

import type {CartLayouts} from './Cart';

import {ScrollArea} from '../ui/ScrollArea';
import {CartLineItem} from './CartLineItem';

export function CartLines({
  layout = 'drawer',
  lines: cartLines,
  onClose,
}: {
  layout: CartLayouts;
  lines?: CartApiQueryFragment['lines'];
  onClose?: () => void;
}) {
  const currentLines = cartLines?.nodes.length
    ? flattenConnection(cartLines)
    : [];

  const className = cx([
    layout === 'page'
      ? 'flex-grow md:translate-y-4'
      : 'overflow-auto transition',
  ]);

  return (
    <Layout layout={layout}>
      <section aria-labelledby="cart-contents" className={className}>
        <ul className="grid">
          {currentLines.map((line) => (
            <li key={line.id}>
              <CartLineItem layout={layout} line={line} onClose={onClose} />
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

function Layout(props: {children: React.ReactNode; layout: CartLayouts}) {
  if (props.layout === 'drawer') {
    return (
      <ScrollArea className="size-full flex-1 pr-2">
        {props.children}
      </ScrollArea>
    );
  }

  return <>{props.children}</>;
}
