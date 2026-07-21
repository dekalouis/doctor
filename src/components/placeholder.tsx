export function Placeholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-[linear-gradient(155deg,#8a7f6d,#4a463d)] ${className}`}
    />
  );
}

export function PlaceholderDark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-[linear-gradient(155deg,#3a362e,#1c1a15)] ${className}`}
    />
  );
}
