export default function Layout({ children, className = "" }) {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light dark:bg-dark p-32 xl:p-24 lg:p-16 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
