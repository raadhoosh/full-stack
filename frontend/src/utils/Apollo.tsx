import * as React from 'react'
import { ApolloProvider } from 'react-apollo';
import Client from './Client';

class Apollo extends React.PureComponent {

  public render() {
    return (
      <ApolloProvider client={Client}>
        <div>
          {this.props.children}
        </div>
      </ApolloProvider>
    );
  }
}

export default Apollo;
