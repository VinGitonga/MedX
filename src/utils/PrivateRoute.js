import { Redirect, Route, useLocation } from "react-router-dom";
import { useAuthUser } from '../context'

const PrivateRoute = ({ Comp, ...rest }) => {
    let location = useLocation();
    const { authUser: user } = useAuthUser()

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