export default function Title({ children }) {
  return (
    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
      {children}
    </h1>
  );
}
