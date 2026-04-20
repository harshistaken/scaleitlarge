type LogoProps = {
  className?: string;
  title?: string;
};

export function Logo({ className, title = "ScaleitLarge" }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
    >
      <path
        fill="#FFC013"
        d="M47.5 23.75c0 13.117-10.633 23.75-23.75 23.75S0 36.867 0 23.75 10.633 0 23.75 0 47.5 10.633 47.5 23.75Zm5 0C52.5 10.633 63.133 0 76.25 0S100 10.633 100 23.75 89.367 47.5 76.25 47.5H52.5V23.75ZM0 76.25C0 63.133 10.633 52.5 23.75 52.5H47.5v23.75C47.5 89.367 36.867 100 23.75 100S0 89.367 0 76.25Zm100 0C100 89.367 89.367 100 76.25 100S52.5 89.367 52.5 76.25 63.133 52.5 76.25 52.5 100 63.133 100 76.25Z"
      />
    </svg>
  );
}
