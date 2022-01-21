import * as React from "react";

export default function Input({
  id,
  name,

  onChange = () => {},
  onBlur = () => {},
  isSelect = false,
  onClick = () => {},

  inValue,
  options,

  error,
  errorMsg,
  value,
}) {
  const inputRef = React.useRef();

  const onBeforeClick = () => {
    onClick();
  };

  const valueProps = value !== undefined ? { value } : {};
  return (
    <div className="flex flex-col mb-4">
      {error && <span>{errorMsg}</span>}

      {options.map((pilihan) => (
        <div>
          <label className="inline-flex items-center">
            <input
              type="radio"
              id={id}
              ref={inputRef}
              name={name}
              onChange={(e) => {
                e.persist();
                onChange(e, e.target.value);
              }}
              onClick={onBeforeClick}
              onKeyUp={onBlur}
              value={pilihan.value}
              className="h-5 w-5 text-red-600"
              {...valueProps}
            />
            <span className="ml-2 text-gray-700">{pilihan.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
}
