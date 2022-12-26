import { ChangeEventHandler } from 'react';

export interface SimpleDropdownProps {
  options: { displayName: string; value: string }[];
  label: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  selectedValue: string;
}

export default function SimpleDropdown(props: SimpleDropdownProps) {
  return (
    <div>
      <label
        htmlFor={props.label}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <select
        id={props.label}
        name={props.label}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        value={props.selectedValue}
        onChange={props.onChange}
      >
        {props.options.map((op, i) => {
          return (
            <option key={`${op.value} - ${i}`} value={op.value}>
              {op.displayName}
            </option>
          );
        })}
      </select>
    </div>
  );
}
