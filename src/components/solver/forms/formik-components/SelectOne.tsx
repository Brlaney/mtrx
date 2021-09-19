import React from 'react'
import { FieldProps } from 'formik'

export const SelectOne: React.FC<
  FieldProps & {
    label?: string;
    options: Array<{ label: string; value: string }>;
  }
> = ({ field, form, label, options, ...props }) => {
  return (
    <>
      <div
        className='uk-margin uk-grid'
        uk-grid='true'
        {...props}
        {...field}
      >
        {options.map(op => (
          <div key={op.value} className='uk-width-1-4'>
            <label>
              <input
                name={op.value}
                value={op.value}
                className='uk-radio uk-margin'
                type='radio'
              />
              {op.label}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

