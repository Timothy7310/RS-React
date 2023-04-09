import { HTMLAttributes, DetailedHTMLProps } from 'react';
import FormErrorMessage from './FormErrorMessage';

const FormChekboxWrap = ({
  valid,
  message,
  children,
}: DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement> & { valid: boolean; message: string },
  HTMLDivElement
>) => {
  return (
    <div className="checkboxs">
      <span className="checkboxs-title">Show Elements</span>
      <div className="checkboxs-wrap">{children}</div>
      {valid && <FormErrorMessage message={message} />}
    </div>
  );
};

export default FormChekboxWrap;
