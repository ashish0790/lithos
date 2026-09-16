type MaterialIconProps = {
  name: string;
  className?: string;
};

export default function MaterialIcon({ name, className = "" }: MaterialIconProps) {
  return (
    <span className={`material-symbols-outlined select-none ${className}`} aria-hidden="true">
      {name}
    </span>
  );
}
