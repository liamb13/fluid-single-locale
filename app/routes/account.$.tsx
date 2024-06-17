import {type LoaderFunctionArgs, redirect} from '@shopify/remix-oxygen';

// fallback wild card for all unauthenticated routes in account section
export async function loader({context}: LoaderFunctionArgs) {
  const {customerAccount} = context;
  await customerAccount.handleAuthStatus();

  return redirect('/account', {
    headers: {
      'Set-Cookie': await context.session.commit(),
    },
  });
}
