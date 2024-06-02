"use client";

import React, { FC } from "react";

interface SelectFieldProps {
    name?: string;
    value?: string;
    children: React.ReactNode;
    onChange?: any;
    className?: string;
}
const SelectField: FC<SelectFieldProps> = ({
    name,
    value,
    children,
    onChange,
    className
}) => {
    return (
        <select
            name={name}
            value={value}
            className={className}
            onChange={onChange}
        >
            {children}
        </select>
    );
};

export default SelectField;
