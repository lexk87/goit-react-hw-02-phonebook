import PropTypes from 'prop-types';
import { HeaderContainer, HeaderTitle, NewContactBtn } from './Header.styled';

export const Header = () => (
    <HeaderContainer>
        <HeaderTitle>Phonebook</HeaderTitle>
        <NewContactBtn>+ New user</NewContactBtn>
    </HeaderContainer>
);
