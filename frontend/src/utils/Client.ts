import ApolloClient from 'apollo-boost';
import { endpoint, prodEndpoint } from './config';

const client = new ApolloClient({
  clientState: {
    defaults: {
      isLogin: true
    },
    resolvers: {
      Mutation: {
        toggleLogin: (_: any, variables: { isLogin: any; }, { cache }: any) => {
          const data = {
            data: { isLogin: variables.isLogin },
          };
          cache.writeData(data);
          return data;
        },
      }
    }
  },
  uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
});
export default client;
