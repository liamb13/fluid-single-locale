import type {Selection} from 'groqd';

import {q} from 'groqd';

/*
|--------------------------------------------------------------------------
| Theme Content Fragment
|--------------------------------------------------------------------------
*/
export const THEME_CONTENT_FRAGMENT = {
  account: q('account').grab({
    accountDetails: q.string().nullable(),
    addAddress: q.string().nullable(),
    addName: q.string().nullable(),
    addressBook: q.string().nullable(),
    addressLine1: q.string().nullable(),
    addressLine2: q.string().nullable(),
    cancel: q.string().nullable(),
    city: q.string().nullable(),
    company: q.string().nullable(),
    country: q.string().nullable(),
    default: q.string().nullable(),
    defaultAddress: q.string().nullable(),
    discounts: q.string().nullable(),
    discountsOff: q.string().nullable(),
    edit: q.string().nullable(),
    editAddress: q.string().nullable(),
    emailAddress: q.string().nullable(),
    firstName: q.string().nullable(),
    fulfillmentStatus: q.string().nullable(),
    lastName: q.string().nullable(),
    name: q.string().nullable(),
    noAddress: q.string().nullable(),
    noOrdersMessage: q.string().nullable(),
    noShippingAddress: q.string().nullable(),
    orderDate: q.string().nullable(),
    orderDetail: q.string().nullable(),
    orderHistory: q.string().nullable(),
    orderId: q.string().nullable(),
    orderNumber: q.string().nullable(),
    orderStatusCancelled: q.string().nullable(),
    orderStatusError: q.string().nullable(),
    orderStatusFailure: q.string().nullable(),
    orderStatusOpen: q.string().nullable(),
    orderStatusPending: q.string().nullable(),
    orderStatusSuccess: q.string().nullable(),
    phone: q.string().nullable(),
    phoneNumber: q.string().nullable(),
    placedOn: q.string().nullable(),
    postalCode: q.string().nullable(),
    price: q.string().nullable(),
    product: q.string().nullable(),
    profile: q.string().nullable(),
    quantity: q.string().nullable(),
    remove: q.string().nullable(),
    returnToAccount: q.string().nullable(),
    save: q.string().nullable(),
    saving: q.string().nullable(),
    shippingAddress: q.string().nullable(),
    signOut: q.string().nullable(),
    startShopping: q.string().nullable(),
    stateProvince: q.string().nullable(),
    status: q.string().nullable(),
    subtotal: q.string().nullable(),
    tax: q.string().nullable(),
    total: q.string().nullable(),
    updateYourProfile: q.string().nullable(),
    viewDetails: q.string().nullable(),
    welcome: q.string().nullable(),
    welcomeToYourAccount: q.string().nullable(),
  }),
  cart: q('cart')
    .grab({
      applyDiscount: q.string().nullable(),
      continueShopping: q.string().nullable(),
      discountCode: q.string().nullable(),
      discounts: q.string().nullable(),
      emptyMessage: q.string().nullable(),
      heading: q.string().nullable(),
      orderSummary: q.string().nullable(),
      proceedToCheckout: q.string().nullable(),
      quantity: q.string().nullable(),
      remove: q.string().nullable(),
      subtotal: q.string().nullable(),
    })
    .nullable(),
  collection: q('collection')
    .grab({
      apply: q.string().nullable(),
      clear: q.string().nullable(),
      clearFilters: q.string().nullable(),
      filterAndSort: q.string().nullable(),
      filterInStock: q.string().nullable(),
      filterOutOfStock: q.string().nullable(),
      from: q.string().nullable(),
      loadMoreProducts: q.string().nullable(),
      loadPrevious: q.string().nullable(),
      loading: q.string().nullable(),
      noCollectionFound: q.string().nullable(),
      noProductFound: q.string().nullable(),
      sortBestSelling: q.string().nullable(),
      sortBy: q.string().nullable(),
      sortFeatured: q.string().nullable(),
      sortHighLow: q.string().nullable(),
      sortLowHigh: q.string().nullable(),
      sortNewest: q.string().nullable(),
      to: q.string().nullable(),
      viewAll: q.string().nullable(),
    })
    .nullable(),
  error: q('error')
    .grab({
      addressCreation: q.string().nullable(),
      missingAddressId: q.string().nullable(),
      pageNotFound: q.string().nullable(),
      reloadPage: q.string().nullable(),
      sectionError: q.string().nullable(),
      serverError: q.string().nullable(),
    })
    .nullable(),
  product: q('product')
    .grab({
      addToCart: q.string().nullable(),
      quantitySelector: q.boolean().nullable(),
      sale: q.string().nullable(),
      soldOut: q.string().nullable(),
    })
    .nullable(),
} satisfies Selection;
