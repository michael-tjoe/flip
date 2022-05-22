export interface SelectOption {
  id: number;
  label: string;
}

export interface SelectProps {
  options: Array<SelectOption>;
  value: number;
  onChange: (value: SelectOption) => void;
  className: string;
  initialLabel?: string;
}
