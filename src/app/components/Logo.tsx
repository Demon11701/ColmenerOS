export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <img 
      src="/logo-power.png"   // <--- ¡OJO! Aquí va el nombre exacto de tu archivo en la carpeta public
      alt="ColmenerOS Logo"
      className={`${className} object-contain`} 
    />
  );
}