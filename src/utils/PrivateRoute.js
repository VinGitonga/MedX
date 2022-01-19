import { Redirect, Route, useLocation } from "react-router-dom";
import useAuth from '../hooks/use-auth'

const PrivateRoute = ({ Comp, ...rest }) => {
    let location = useLocation();
    const { user } = useAuth()

    return (
        <Route
            {...rest}
            render={(props) =>
                user ? (
                    <Comp {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;