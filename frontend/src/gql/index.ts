import gql from 'graphql-tag';

export const LOCAL_STATE_QUERY = gql`
  query {
    isLogin @client
  }
`;
export const TOGGLE_LOGIN_MUTATION = gql`
  mutation TOGGLE_LOGIN_MUTATION($isLogin: bool!) {
    toggleLogin(isLogin: $isLogin) @client
  }
`;