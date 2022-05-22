import { useRef, useState } from "react";
import useClickOutside from "@hooks/useClickOutside";
import { stySelectWrapper, styDropdown } from "./styles";
import type { SelectProps } from "./types";

function Select({
  options,
  value,
  onChange,
  className = "",
  initialLabel = "",
}: SelectProps) {
  const selectEl = useRef(null);
  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  useClickOutside(selectEl, () => {
    if (displayDropdown) {
      setDisplayDropdown(false);
    }
  });

  const selectedOption = options.find((option) => option.id === value) || {
    id: -1,
    label: "",
  };

  return (
    <div ref={selectEl} className={`${stySelectWrapper} ${className}`}>
      <div
        className="selector"
        {...(displayDropdown && { "data-expand": true })}
        onClick={handleToggleDropdown}
      >
        <div className="selected-item">
          {selectedOption?.label || initialLabel}
        </div>
      </div>

      <div className="select-arrow">
        <div className="icon">
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="down"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
          </svg>
        </div>
      </div>

      <div
        className={styDropdown}
        {...(displayDropdown && { "data-expand": true })}
      >
        <ul>
          {options.map((option) => (
            <li
              {...(option.id === value && { "data-selected": true })}
              key={option.id}
            >
              <button
                data-testid={`btnSelect-${option.id}`}
                type="button"
                onClick={() => {
                  if (option.id !== selectedOption.id) {
                    onChange(option);
                  }

                  setDisplayDropdown(false);
                }}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Select;
