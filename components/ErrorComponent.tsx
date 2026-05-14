import { ErrorMessage as HookFormErrorMessage } from "@hookform/error-message";
import React from "react";
import type { FieldErrors } from "react-hook-form";

import { Typography } from "./Typography";

interface ErrorComponentProps {
  name?: string;
  errors?: FieldErrors;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ name, errors }) => {
  if (!name || !errors?.[name]) return null;
  return (
    <HookFormErrorMessage
      errors={errors}
      name={name}
      render={({ message }: { message: string }) => (
        <Typography className="text-xs text-red-500 md:text-xs">
          {message}
        </Typography>
      )}
    />
  );
};

export default ErrorComponent;
