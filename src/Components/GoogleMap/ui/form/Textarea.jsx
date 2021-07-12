import { forwardRef } from "react";
import styled from "styled-components";

const TextArea = forwardRef(
  ({ name, placeholder, className, cols, rows, ...props }, ref) => (
    <textarea
      {...props}
      className={className}
      name={name}
      placeholder={placeholder}
      ref={ref}
      cols={cols}
      rows={rows}
    />
  )
);

export default styled(TextArea)`
  width: 100%;
  background: #ffffff;
  border: 1px solid #da70d6;
  border-radius: 3px;
  font-family: "Red Hat Text", sans-serif;
  font-size: 1.125rem;
  line-height: 24px;
  resize: none;
  &:hover {
    border: 2px solid #da70d6;
  }
`;
