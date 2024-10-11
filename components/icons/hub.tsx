import { cn } from "@/lib/utils";

export const Hub = (props: React.SVGProps<SVGSVGElement>) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={cn(className)}
      viewBox="0 0 24 24"
      width="1rem"
      height="1rem"
      strokeWidth="2"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <title>Hub</title>

      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
};
