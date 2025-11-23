export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-8 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Gbenga Omole</h2>
          <p>The Practical Word Teacher</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>Books</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Newsletter</h2>
          <p>Join thousands in the journey of faith.</p>
          <input
            className="mt-2 p-2 w-full rounded text-black"
            placeholder="Email address"
          />
        </div>
      </div>
      <div className="text-center mt-8 text-gray-400 text-sm">
        © 2025 Gbenga Omole
      </div>
    </footer>
  );
}
