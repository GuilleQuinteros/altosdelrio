export function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <div className={`flex items-center justify-center ${small ? "w-36" : "w-44 md:w-48"}`}>
      <img
        src="/images/logo-altos-del-rio.svg"
        alt="Altos del Río"
        className="h-auto w-full object-contain"
      />
    </div>
  );
}
