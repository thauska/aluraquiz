import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
  width: 100%;
  max-width: 280px;
  padding: 10px 15px;
  margin: 15px auto;
  border:  1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: transparent;
  outline: 0;
  font-size: 14px;
`;

export default function Input({ ...props }) {
    return (
        <div>            
            <InputBase {...props} />
        </div>
    );
}