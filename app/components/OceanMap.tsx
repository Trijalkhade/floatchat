'use client';
import { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  align-self: flex-start;
  padding: 0.5rem 1rem;
  background: #3b82f6;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #2563eb;
  }
`;

const Iframe = styled.iframe`
  flex: 1;
  border: none;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export default function OceanMap() {
  const [mode, setMode] = useState(false);

  return (
    <Container>
      <Button onClick={() => setMode(!mode)}>
        {mode ? 'Show Historical Map' : 'Show Realtime Map'}
      </Button>
      <Iframe
        src={mode ? '/Real_time_map.html' : '/visualization.html'}
        title='ocean-map'
      />
    </Container>
  );
}
