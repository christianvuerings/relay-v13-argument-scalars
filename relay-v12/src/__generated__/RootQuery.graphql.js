/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RootQueryVariables = {|
  user: string
|};
export type RootQueryResponse = {|
  +v3UserQuery: ?{|
    +contextualPinImageUrls: ?$ReadOnlyArray<?{|
      +height: ?number,
      +width: ?number,
      +url: ?string,
    |}>
  |}
|};
export type RootQuery = {|
  variables: RootQueryVariables,
  response: RootQueryResponse,
|};
*/


/*
query RootQuery(
  $user: String!
) {
  v3UserQuery(user: $user) {
    contextualPinImageUrls(spec: "222x") {
      height
      width
      url
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "user"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "user",
        "variableName": "user"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "v3UserQuery",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "spec",
            "value": "222x"
          }
        ],
        "concreteType": "ImageDetails",
        "kind": "LinkedField",
        "name": "contextualPinImageUrls",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "height",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "width",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "url",
            "storageKey": null
          }
        ],
        "storageKey": "contextualPinImageUrls(spec:\"222x\")"
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "RootQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "RootQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9b5aa362b6e9dfefd2ddeb91e1b428ed",
    "id": null,
    "metadata": {},
    "name": "RootQuery",
    "operationKind": "query",
    "text": "query RootQuery(\n  $user: String!\n) {\n  v3UserQuery(user: $user) {\n    contextualPinImageUrls(spec: \"222x\") {\n      height\n      width\n      url\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '01f66ce8aea32c9d151b9cbaca344cf9';

module.exports = node;
