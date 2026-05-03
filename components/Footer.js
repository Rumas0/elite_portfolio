export default function Footer() {
  return (
    <footer className="border-t py-8 px-6 text-center text-sm text-gray-400">
      <p>
        Designed &amp; built by{" "}
        <span className="text-gray-700 font-medium">Itti Samur Tunib</span>
      </p>
      <p className="mt-1">
        &copy; {new Date().getFullYear()} — All rights reserved.
      </p>
    </footer>
  );
}
