import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#DDE9E9] flex justify-center py-16 px-4">
      {/* Main Card */}
      <div className="w-[1193px] bg-[#001F28] text-white px-10 py-16 rounded-[20px] border border-white">
        
        {/* Inner Flex Layout */}
        <div className="flex flex-col gap-12">
          
          {/* TOP SECTION */}
          <div className="flex items-start gap-[86px]">
            
            {/* LEFT BLUE DECORATOR */}
            <Image
              src="/Images/green-blank.jpg"
              alt=""
              width={40}
              height={80}
              className="hidden md:block"
            />

            {/* LEFT COLUMN — LOGO + BIO + SOCIAL ICONS */}
            <div className="flex flex-col gap-6 max-w-[350px]">
              <Image 
                src="/Images/footer-logo.svg"
                alt="Gbenga Omole Logo"
                width={140}
                height={80}
              />

              <p className="text-sm leading-relaxed text-gray-300">
                Author, Scholar and Speaker dedicated to transforming lives through faith and knowledge.
              </p>

              <div className="flex gap-4 items-center mt-2">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://wa.me/+2348034006525" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"></a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/Images/twitter-icon.svg" alt="" width={22} height={22} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Image src="/Images/instagram-icon.svg" alt="" width={22} height={22} />
                </a>
                <a href="https://linkedin.con/in/mohri-muakpo" target="_blank" rel="noopener noreferrer">
                  <Image src="/Images/linkedin-icon.svg" alt="" width={22} height={22} />
                </a>
              </div>
            </div>

            {/* CENTER DECOR BOX */}
            <Image
              src="/Images/green-blank.jpg"
              alt=""
              width={86}
              height={120}
              className="hidden md:block"
            />

            {/* QUICK LINKS */}
            <div className="flex flex-col gap-3 min-w-[180px]">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <a className="text-gray-300 hover:text-white cursor-pointer">Daily Devotionals</a>
              <a className="text-gray-300 hover:text-white cursor-pointer">Books</a>
              <a className="text-gray-300 hover:text-white cursor-pointer">Videos & Media</a>
              <a className="text-gray-300 hover:text-white cursor-pointer">Virtual Launch Event</a>
            </div>

            {/* RIGHT SECTION — CONTACT */}
            <div className="flex flex-col gap-3 min-w-[180px]">
              <h3 className="font-semibold text-lg">Contact</h3>
              <p className="text-gray-300">Phone - 0801234567890</p>
              <p className="text-gray-300">Email - gbengaomolebooks@gmail.com</p>
            </div>

            {/* RIGHT SIDE DECOR BOX */}
            <Image
              src="/Images/green-blank.jpg"
              alt=""
              width={40}
              height={80}
              className="hidden md:block"
            />
          </div>

          {/* COPYRIGHT */}
          <div className="text-center text-gray-400 text-sm pt-4">
            © 2025 Gbenga Omole. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
