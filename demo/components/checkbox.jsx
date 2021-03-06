import React from 'react';
import createComponent from '../../package/createComponent';

let name = 'checkbox';

let init = function() {
  return false;
};

let update = function({ type, payload, model, dispatch }) {
  model.set(payload);
};

let isChecked = event => event.target.checked;

let view = function({ model, label = 'checkbox', dispatcher }) {
  return (
    <label>
      <input type="checkbox"
        checked={model.val()}
        onChange={dispatcher('toggle', isChecked)}
      />
      <span>{label}</span>
    </label>
  );
};

view = createComponent({ name, update, view });
export { init, view };
