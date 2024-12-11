import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);
  const stateClass = isOn ? 'is-on' : '';
  const stateLabel = isOn ? 'On' : 'Off';
  return (
    <div
      className={`toggle-switch ${stateClass}`}
      onClick={() => setIsOn(!isOn)}>
      <div className="slider">
        <div className="switch"></div>
      </div>
      <span className="state-label">{stateLabel}</span>
    </div>
  );
}
