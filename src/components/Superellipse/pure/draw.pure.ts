import { SuperellipseProps } from '../Superellipse';

type DrawProps = SuperellipseProps & { width: number; height: number; };

const MIN = -1;

const x_min = MIN;
const x_max = -x_min;
const y_min = MIN;
const y_max = -x_min;

export default ({ color, degree, width, height }: DrawProps) => (ctx: CanvasRenderingContext2D) => {
  const dx = x_max / width;
  const sx = width / (x_max - x_min);
  const sy = height / (y_max - y_min);
  const X0 = width + x_min * sx;
  const Y0 = height + y_min * sy;

  ctx.clearRect(0, 0, width, height);

  ctx.strokeStyle = color || 'red';
  ctx.fillStyle = color || 'red';

  ctx.beginPath();
  for (let t = 0; t < 2 * Math.PI; t += Math.PI / 180) {
    const x = Math.sign(Math.cos(t)) * Math.pow(Math.abs(Math.cos(t)), 2 / degree);
    const y = Math.sign(Math.sin(t)) * Math.pow(Math.abs(Math.sin(t)), 2 / degree);

    const X = X0 + x * sx;
    const Y = Y0 - y * sy;

    if (t === 0) {
      ctx.moveTo(X, Y);
    } else {
      ctx.lineTo(X, Y);
    }
  }
  ctx.stroke();
  ctx.fill();
};