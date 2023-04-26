import React, { useState } from 'react';
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

const Toggle = ({ mode, setMode }) => {
    return (
        <DarkModeToggle
            ariaLabel='Toggle color scheme'
            mode={mode}
            dark='🌙'
            light='🔆'
            size='sm'
            onChange={(mode) => {
                setMode(mode);
            }}
        />
    );
};

export default Toggle;
