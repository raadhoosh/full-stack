import * as React from 'react';
import { Query, Mutation } from 'react-apollo';

import { TOGGLE_LOGIN_MUTATION, LOCAL_STATE_QUERY } from 'src/gql';

 
export default class Login extends React.Component {
    public render() {
        return (<div>Login
            <Query query={LOCAL_STATE_QUERY}>
                {({ data, error, loading }) => {

                    return (
                        <div>
                            {JSON.stringify(data)}
                            <Mutation mutation={TOGGLE_LOGIN_MUTATION} variables={{ isLogin: !data.isLogin }}>
                                {(toggleLogin) => (

                                    // tslint:disable-next-line:jsx-no-lambda
                                    <form method="post" onSubmit={(e) => { e.preventDefault(); toggleLogin(); }}>
                                        <button>hi</button>
                                    </form>
                                )}
                            </Mutation>
                        </div>
                    );
                }}
            </Query>

        </div>);
    }
}
