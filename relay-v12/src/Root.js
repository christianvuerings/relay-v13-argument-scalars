import graphql from 'babel-plugin-relay/macro';
import React from 'react';
import { usePreloadedQuery } from 'react-relay/hooks';

export default function Root(props) {
  const data = usePreloadedQuery(
    graphql`
      query RootQuery($user: String!) {
        v3UserQuery(user: $user) {
          contextualPinImageUrls(spec: "222x") {
            height
            width
            url
          }
        }
      }
    `,
    props.prepared.rootQuery,
  );
  const { contextualPinImageUrls } = data;

  console.log(contextualPinImageUrls);

  return <div />;
}
