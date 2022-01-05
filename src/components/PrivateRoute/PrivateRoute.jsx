import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function PrivateRoute( { children, ...routeProps }) {
    const { user } = useAuth();
    return (
        <div>
            <div>Private Route</div>
            <Route
            {...routeProps}
            render={({ location }) => 
                user ? (children) :
            (
                <Redirect to={{ pathname: '/login', state: { from: location }}} />
            )}
            />
        </div>
    )
}