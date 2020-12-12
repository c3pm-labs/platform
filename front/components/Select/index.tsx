import { Field } from 'formik';

import WrappedSelect from './WrappedMuiSelect';

export interface SelectProps {
  options: Array<{ label: string; value: string }>;
  name: string;
}

function Select({
  options, name,
}: SelectProps): JSX.Element {
  return (
    <Field
      name={name}
      component={WrappedSelect}
      selectOptions={options}
    />
  );
}

export default Select;
