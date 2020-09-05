import React from 'react';
import './Controls.scss';

interface ControlsProps {
  range: number;
  onChangeRange: (value: number) => void;
  color: string;
  onChangeColor: (value: string) => void;
}

const Controls = (props: ControlsProps) => {
  return (
    <div className="Controls">

      <div className="row row-cols-6 range">
        <div className="col">
          <div className="form-group">
            <label htmlFor="range">{props.range}</label>
            <input
              type="range"
              id="range"
              className="form-control-range"
              name="volume"
              min="0.1"
              step="0.1"
              max="10"
              value={props.range}
              onChange={({ target }) => props.onChangeRange(parseFloat(target.value))}
            />
          </div>
        </div>
      </div>

      <div className="row row-cols-6 color">
        <div className="col">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="#e74c3c"
              value={props.color}
              onChange={({ target }) => props.onChangeColor(target.value)}
            />
            <div className="input-group-append">
              <input
                type="color"
                className="btn btn-outline-secondary"
                value={props.color}
                onChange={({ target }) => props.onChangeColor(target.value)}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Controls;