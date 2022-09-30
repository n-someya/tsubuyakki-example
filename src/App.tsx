import { Amplify } from 'aws-amplify';

import {
 withAuthenticator,
 WithAuthenticatorProps,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute } from './routes';

Amplify.configure(awsExports);


function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default withAuthenticator(App);
