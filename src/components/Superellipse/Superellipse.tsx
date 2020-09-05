import React, { useEffect, useRef, useState } from 'react';
import draw from './pure/draw.pure';
import './Superellipse.scss';

export interface SuperellipseProps {
  degree: number;
  color?: string;
}

const Superellipse = (props: SuperellipseProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ width, setWidth ] = useState(600);
  const [ height, setHeight ] = useState(600);

  useEffect(() => {
    const canvas = canvasRef.current;
    setWidth(canvas?.width || 600);
    setHeight(canvas?.height || 600);

    const ctx = canvas?.getContext('2d');
    ctx && draw(width, height, props)(ctx);
  }, [ draw, props ]);

  return <div className="Superellipse row">
    <canvas width={width} height={height} ref={canvasRef}/>
  </div>;
};

export default Superellipse;