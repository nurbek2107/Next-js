function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <footer class="flex flex-row flex-wrap items-center justify-center w-full py-6 text-center border-t gap-y-6 gap-x-12 max-w-[1100px] m-auto border-blue-gray-50 md:justify-between">
        <p class="block font-sans text-base antialiased font-normal leading-relaxed text-white">
          © 2023 Material Tailwind
        </p>
        <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <a
              href="#"
              class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              License
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block font-sans text-base antialiased font-normal leading-relaxed transition-colors text-white hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </footer>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{/* Your main content here */}</main>
      <Footer />
    </div>
  );
}

export default App;
