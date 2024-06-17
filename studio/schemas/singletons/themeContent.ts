import {defineField, defineType} from 'sanity';

export default defineType({
  name: 'themeContent',
  type: 'document',
  __experimental_formPreviewTitle: false,
  groups: [
    {name: 'account'},
    {name: 'cart'},
    {name: 'collection'},
    {name: 'error'},
    {name: 'general'},
    {name: 'product'},
  ],
  fields: [
    defineField({
      title: 'Account',
      name: 'account',
      type: 'object',
      group: 'account',
      fields: [
        defineField({
          name: 'welcome',
          type: 'string',
        }),
        defineField({
          name: 'welcomeToYourAccount',
          type: 'string',
        }),
        defineField({
          name: 'accountDetails',
          type: 'string',
        }),
        defineField({
          name: 'signOut',
          type: 'string',
        }),
        defineField({
          name: 'orderHistory',
          type: 'string',
        }),
        defineField({
          name: 'noOrdersMessage',
          type: 'string',
        }),
        defineField({
          name: 'startShopping',
          type: 'string',
        }),
        defineField({
          name: 'orderDetail',
          type: 'string',
        }),
        defineField({
          name: 'returnToAccount',
          type: 'string',
        }),
        defineField({
          name: 'orderNumber',
          type: 'string',
        }),
        defineField({
          name: 'placedOn',
          type: 'string',
        }),
        defineField({
          name: 'product',
          type: 'string',
        }),
        defineField({
          name: 'price',
          type: 'string',
        }),
        defineField({
          name: 'quantity',
          type: 'string',
        }),
        defineField({
          name: 'total',
          type: 'string',
        }),
        defineField({
          name: 'subtotal',
          type: 'string',
        }),
        defineField({
          name: 'discounts',
          type: 'string',
        }),
        defineField({
          name: 'discountsOff',
          type: 'string',
        }),
        defineField({
          name: 'tax',
          type: 'string',
        }),
        defineField({
          name: 'shippingAddress',
          type: 'string',
        }),
        defineField({
          name: 'noShippingAddress',
          type: 'string',
        }),
        defineField({
          name: 'status',
          type: 'string',
        }),
        defineField({
          name: 'updateYourProfile',
          type: 'string',
        }),
        defineField({
          name: 'firstName',
          type: 'string',
        }),
        defineField({
          name: 'lastName',
          type: 'string',
        }),
        defineField({
          name: 'company',
          type: 'string',
        }),
        defineField({
          name: 'addressLine1',
          type: 'string',
        }),
        defineField({
          name: 'addressLine2',
          type: 'string',
        }),
        defineField({
          name: 'city',
          type: 'string',
        }),
        defineField({
          name: 'stateProvince',
          type: 'string',
        }),
        defineField({
          name: 'postalCode',
          type: 'string',
        }),
        defineField({
          name: 'country',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          type: 'string',
        }),
        defineField({
          name: 'defaultAddress',
          type: 'string',
        }),
        defineField({
          name: 'saving',
          type: 'string',
        }),
        defineField({
          name: 'save',
          type: 'string',
        }),
        defineField({
          name: 'cancel',
          type: 'string',
        }),
        defineField({
          name: 'addName',
          type: 'string',
        }),
        defineField({
          name: 'addAddress',
          type: 'string',
        }),
        defineField({
          name: 'editAddress',
          type: 'string',
        }),
        defineField({
          name: 'addressBook',
          type: 'string',
        }),
        defineField({
          name: 'noAddress',
          type: 'string',
        }),
        defineField({
          name: 'default',
          type: 'string',
        }),
        defineField({
          name: 'edit',
          type: 'string',
        }),
        defineField({
          name: 'remove',
          type: 'string',
        }),
        defineField({
          name: 'profile',
          type: 'string',
        }),
        defineField({
          name: 'name',
          type: 'string',
        }),
        defineField({
          name: 'phoneNumber',
          type: 'string',
        }),
        defineField({
          name: 'emailAddress',
          type: 'string',
        }),
        defineField({
          name: 'orderId',
          type: 'string',
        }),
        defineField({
          name: 'orderDate',
          type: 'string',
        }),
        defineField({
          name: 'fulfillmentStatus',
          type: 'string',
        }),
        defineField({
          name: 'viewDetails',
          type: 'string',
        }),
        defineField({
          name: 'orderStatusCancelled',
          type: 'string',
        }),
        defineField({
          name: 'orderStatusError',
          type: 'string',
        }),
        defineField({
          name: 'orderStatusFailure',
          type: 'string',
        }),
        defineField({
          name: 'orderStatusOpen',
          type: 'string',
        }),
        defineField({
          name: 'orderStatusPending',
          type: 'string',
        }),
        defineField({
          name: 'orderStatusSuccess',
          type: 'string',
        }),
      ],
    }),
    defineField({
      title: 'Cart',
      name: 'cart',
      type: 'object',
      group: 'cart',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
        }),
        defineField({
          name: 'proceedToCheckout',
          type: 'string',
        }),
        defineField({
          name: 'orderSummary',
          type: 'string',
        }),
        defineField({
          name: 'subtotal',
          type: 'string',
        }),
        defineField({
          name: 'discounts',
          type: 'string',
        }),
        defineField({
          name: 'applyDiscount',
          type: 'string',
        }),
        defineField({
          name: 'discountCode',
          type: 'string',
        }),
        defineField({
          name: 'remove',
          type: 'string',
        }),
        defineField({
          name: 'quantity',
          type: 'string',
        }),
        defineField({
          name: 'continueShopping',
          type: 'string',
        }),
        defineField({
          name: 'emptyMessage',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'collection',
      type: 'object',
      group: 'collection',
      fields: [
        defineField({
          title: 'Sort by',
          name: 'sortBy',
          type: 'string',
        }),
        defineField({
          title: 'Sort by - Featured',
          name: 'sortFeatured',
          type: 'string',
        }),
        defineField({
          title: 'Sort by - Price Low to High',
          name: 'sortLowHigh',
          type: 'string',
        }),
        defineField({
          title: 'Sort by - Price High to Low',
          name: 'sortHighLow',
          type: 'string',
        }),
        defineField({
          title: 'Sort by - Best selling',
          name: 'sortBestSelling',
          type: 'string',
        }),
        defineField({
          title: 'Sort by - Newest',
          name: 'sortNewest',
          type: 'string',
        }),
        defineField({
          name: 'filterAndSort',
          type: 'string',
        }),
        defineField({
          name: 'from',
          type: 'string',
        }),
        defineField({
          name: 'to',
          type: 'string',
        }),
        defineField({
          name: 'filterInStock',
          type: 'string',
        }),
        defineField({
          name: 'filterOutOfStock',
          type: 'string',
        }),
        defineField({
          name: 'viewAll',
          type: 'string',
        }),
        defineField({
          name: 'clearFilters',
          type: 'string',
        }),
        defineField({
          name: 'clear',
          type: 'string',
        }),
        defineField({
          name: 'apply',
          type: 'string',
        }),
        defineField({
          name: 'loading',
          type: 'string',
        }),
        defineField({
          name: 'loadPrevious',
          type: 'string',
        }),
        defineField({
          name: 'loadMoreProducts',
          type: 'string',
        }),
        defineField({
          name: 'noProductFound',
          type: 'string',
        }),
        defineField({
          name: 'noCollectionFound',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'product',
      type: 'object',
      group: 'product',
      fields: [
        defineField({
          title: 'Add to cart',
          name: 'addToCart',
          type: 'string',
        }),
        defineField({
          name: 'sale',
          type: 'string',
        }),
        defineField({
          title: 'Sold out',
          name: 'soldOut',
          type: 'string',
        }),
        defineField({
          title: 'Quantity Selector Label',
          name: 'quantitySelector',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'error',
      type: 'object',
      group: 'error',
      fields: [
        defineField({
          title: 'Page not found',
          name: 'pageNotFound',
          type: 'string',
        }),
        defineField({
          title: 'Server error',
          name: 'serverError',
          type: 'string',
        }),
        defineField({
          title: 'Section error',
          name: 'sectionError',
          type: 'string',
        }),
        defineField({
          title: 'reloadPage',
          name: 'reloadPage',
          type: 'string',
        }),
        defineField({
          name: 'missingAddressId',
          type: 'string',
        }),
        defineField({
          name: 'addressCreation',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Theme Content'}),
  },
});
