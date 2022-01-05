import { render } from '@testing-library/react';
import Login from './Login';
import { ProvideAuth } from '../../context/AuthContext';

it('should render login to screen', () =>{
    const { container } = render(
        <ProvideAuth>
            <Login/>
        </ProvideAuth>
    );
    expect(container).toMatchSnapshot();
} 
);