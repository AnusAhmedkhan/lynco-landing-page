import { Typography } from "./Typography";

interface ErrorStateProps {
  message?: string;
  className?: string;
}

const ErrorState = ({
  message = "Something went wrong",
  className = "",
}: ErrorStateProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-8 ${className}`}
    >
      <Typography className="text-red-500" variant="p">
        {message}
      </Typography>
    </div>
  );
};

export default ErrorState;
