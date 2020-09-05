import React, { useEffect, useRef } from 'react';
import draw from './pure/draw.pure';
import './Superellipse.scss';

export interface SuperellipseProps {
  degree: number;
  color: string;
}

const Superellipse = (props: SuperellipseProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ width, height ] = [ 600, 600 ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx && draw({ ...props, width, height })(ctx);
  }, [ draw, props ]);

  return <div className="Superellipse row">
    <canvas width={width} height={height} ref={canvasRef}/>
  </div>;
};

export default Superellipse;