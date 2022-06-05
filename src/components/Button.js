import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const TRANSPARENT = 'transparent';

const Container = styled.TouchableOpacity`
    background-color: ${({ theme, isFilled }) =>
        isFilled ? theme.buttonBackground : TRANSPARENT};
    border-radius: 4px;
    width: 100%;
    height: 100%;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;
const Title = styled.Text`
    font-size: 16px;
    color: ${({ theme, isFilled }) =>
        isFilled ? theme.buttonTitle : theme.buttonUnfilledTitle};
`;

const Button = ({ containerStyle, title, titleStyle, onPress, isFilled, disabled }) => {
    return (
        <Container
            style={containerStyle}
            onPress={onPress}
            isFilled={isFilled}
            disabled={disabled}
        >
            <Title style={titleStyle} isFilled={isFilled}>{title}</Title>
        </Container>
    );
};

Button.defaultProps = {
    isFilled: true,
};

Button.propTypes = {
    containerStyle: PropTypes.object,
    titleStyle: PropTypes.object,
    title: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    isFilled: PropTypes.bool,
    disabled: PropTypes.bool,
};

export default Button;
