import React from 'react';
import { useIntl } from 'react-intl';
import { Stack } from '@strapi/design-system/Stack';
import { Field, FieldHint, FieldError, FieldLabel, FieldInput } from '@strapi/design-system/Field';

const MapField = ({
  attribute,
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  required,
  value,
}) => {
  const { formatMessage } = useIntl()

  return (
    <Field
      name={name}
      id={name}
      error={error}
      hint={description && formatMessage(description)}
    >
      <Stack spacing={1}>
        <FieldLabel action={labelAction} required={required}>
          {formatMessage(intlLabel)}
        </FieldLabel>
        <FieldInput
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
        />
        <FieldHint />
        <FieldError />
      </Stack>
    </Field>
  )
};

export default MapField;
