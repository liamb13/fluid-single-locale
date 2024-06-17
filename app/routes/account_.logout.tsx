import {
  type ActionFunction,
  type ActionFunctionArgs,
  type AppLoadContext,
  type LoaderFunctionArgs,
  redirect,
} from '@shopify/remix-oxygen';

export async function doLogout(context: AppLoadContext) {
  return context.customerAccount.logout();
}

export async function loader({params}: LoaderFunctionArgs) {
  return redirect('/');
}

export const action: ActionFunction = async ({context}: ActionFunctionArgs) => {
  return doLogout(context);
};
