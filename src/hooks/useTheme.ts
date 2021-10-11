import React from 'react';
import { ThemeContext } from '../contexts/theme';

const useTheme = () => {
    return React.useContext(ThemeContext);
}

export default useTheme;