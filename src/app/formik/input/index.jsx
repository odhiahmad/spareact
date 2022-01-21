import * as React from "react";

export default function Input({
  placeholder,
  type,
  id,
  name,
  onChange = () => {},
  onBlur = () => {},
  isSelect = false,
  onClick = () => {},
  error,
  errorMsg,
  value,
}) {
  const inputRef = React.useRef();

  const onBeforeClick = () => {
    if (!isSelect) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
    }
    onClick();
  };
  const valueProps = value !== undefined ? { value } : {};
  return (
    <div className="flex flex-col">
      {error && <span>{errorMsg}</span>}
      <input
        id={id}
        ref={inputRef}
        name={name}
        onChange={(e) => {
          e.persist();
          onChange(e, e.target.value);
        }}
        type={type}
        onClick={onBeforeClick}
        onKeyUp={onBlur}
        placeholder={placeholder}
        autoComplete="off"
        className="rounded flex-1 mb-4 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        {...valueProps}
      />
    </div>
  );
}
