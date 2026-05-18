type BrandNameProps = {
  short?: boolean;
  className?: string;
};

export default function BrandName({ short = false, className = '' }: BrandNameProps) {
  return (
    <span className={`brand-name-highlight ${className}`}>
      {short ? 'Manu' : 'Manu Singh'}
    </span>
  );
}
