import { FC, forwardRef, useId } from 'react';
import Input, { InputProps } from '@mui/joy/Input';
import { FormHelperText, Stack, colors } from '@mui/joy';
import { StyledInput, StyledLabel } from './InputField.style';

const InnerInput = forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>((props, ref) => {
  const id = useId();

  return (
    <>
      <StyledInput {...props} ref={ref} id={id} />
      <StyledLabel htmlFor={id}>{props.placeholder}</StyledLabel>
    </>
  );
});

const InputField: FC<InputProps & { errorMessage: string | undefined; helperText?: string }> = ({
  value,
  onChange,
  name,
  type,
  error,
  placeholder,
  errorMessage,
  helperText
}) => {
  return (
    <>
      <Input
        fullWidth
        slots={{ input: InnerInput }}
        slotProps={{
          input: {
            placeholder,
            type,
            name,
            error,
            value,
            onChange
          }
        }}
        sx={{
          '--Input-minHeight': '45px',
          '--Input-radius': '6px'
        }}
      />
      {helperText && !error && (
        <Stack alignItems="flex-start" component={FormHelperText} fontSize="12px" paddingTop="5px">
          {helperText}
        </Stack>
      )}
      {error && (
        <Stack
          alignItems="flex-start"
          component={FormHelperText}
          fontSize="12px"
          color={colors.red[500]}
          paddingTop="5px"
        >
          {errorMessage}
        </Stack>
      )}
    </>
  );
};

export default InputField;
