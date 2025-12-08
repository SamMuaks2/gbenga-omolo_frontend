import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      {/* <section className="bg-white w-full flex flex-col md:flex-row items-center px-8 py-16 max-w-8xl mx-auto"> */}
      <section className="bg-gray-900 w-full flex flex-col md:flex-row items-center px-8 py-16 mb-[-5.75%] max-w-8xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 ml-[5%]">
          <h1
            className="
              font-open-sans
              text-[120px]
              font-bold
              leading-[110px]
              tracking-[4px]
            "
          >
            <span className="text-[#7DBEBE]">GBENGA</span>{" "}
            <span className="text-[#397171]">OMOLE</span>
          </h1>

          <p
            className="
              flex-[1_0_0]
              text-[#fff]
              font-montserrat
              text-[34px]
              font-medium
              pt-[5%]
              leading-[27px]
            "
          >
            The Golden Voice of Wisdom
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center mr-[-9%] mb-[1%]">
          <Image
            src="/Images/home-hero.png"
            width={500}
            height={600}
            alt="Author"
            className="scale-x-[-1]"
            priority
          />
        </div>
      </section>

      {/* CTA / Highlight Section */}
      {/* <section className="bg-white w-full flex flex-col md:flex-row items-center px-0 py-16 max-w-9xl my-auto mx-auto"> */}
      <section className="bg-white w-full flex flex-col md:flex-row items-center px-0 py-2 max-w-9xl my-auto mx-auto">
        <div
          className="
            flex
            w-[160%]
            h-[360px]
            mx-[0]
            px-[120px]
            py-[48px]
            mt-[-0.5%]
            flex-col
            justify-center
            items-center
            gap-[24px]
            bg-[rgba(180,197,214,0.5)]
          "
        >
          <h4
            className="
              text-center
              font-open-sans
              text-[38px]
              font-semibold
              leading-normal
              text-[#232326]
            "
          >
            Insights Worth More Than Gold.
          </h4>

          <p
            className="
              flex-1
              text-center
              w-[70%]
              mb-[36px]
              text-[20px]
              font-normal
              leading-[30px]
              text-[#51555D]
              font-montserrat
            "
          >
            Discover timeless truths that will feed your faith, shape your
            character, and guide your life’s decisions.
          </p>

          <button
            className="
              flex
              w-[231px]
              p-[14px]
              justify-center
              items-center
              gap-[10px]
              rounded-[4px]
              text-white
              bg-[#397171]
              hover:bg-[#2f5f5f]
              hover:-translate-y-[1px]
              hover:shadow-md
              active:translate-y-0
              active:shadow-sm
              transition-all
              duration-300
              ease-in-out
            "
          >
            Join the wisdom circle
          </button>
        </div>
      </section>
    </>
  );
}
