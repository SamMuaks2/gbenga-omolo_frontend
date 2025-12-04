import Image from "next/image";

const testimonials = [
  {
    id: 1,
    text: `I just finished reading SITL book again, and I couldn't put it down! I completed the entire book in about an hour. As always, this is a masterpiece from a prolific writer who truly understands the power of words. I learned long ago from this book that "life is like hot tea - don't rush it, sip it."`,
    name: "Dr Sunday Aribo",
    location: "Canada",
    avatar: "/Images/Avatar.jpg",
  },
  {
    id: 2,
    text: `I just finished reading SITL book again, and I couldn't put it down! I completed the entire book in about an hour. As always, this is a masterpiece from a prolific writer who truly understands the power of words.`,
    name: "Dr Sunday Aribo",
    location: "Canada",
    avatar: "/Images/avatar.jpg",
  },
  {
    id: 3,
    text: `I just finished reading SITL book again, and I couldn't put it down! I completed the entire book in about an hour. When the first edition was released, we were just coming out of university and the national youth service.`,
    name: "Dr Sunday Aribo",
    location: "Canada",
    avatar: "/Images/avatar.jpg",
  },
  {
    id: 4,
    text: `I just finished reading SITL book again, and I couldn't put it down! I completed the entire book in about an hour. A prolific writer who truly understands the power of words.`,
    name: "Dr Sunday Aribo",
    location: "Canada",
    avatar: "/Images/avatar.jpg",
  },
  {
    id: 5,
    text: `I just finished reading SITL book again, and I couldn't put it down! I completed the entire book in about an hour. Grab a copy of this book, you won't regret it!`,
    name: "Dr Sunday Aribo",
    location: "Canada",
    avatar: "/Images/avatar.jpg",
  },
  {
    id: 6,
    text: `I just finished reading SITL book again, and I couldn't put it down! I completed the entire book in about an hour. Truly inspiring and deeply impactful.`,
    name: "Dr Sunday Aribo",
    location: "Canada",
    avatar: "/Images/avatar.jpg",
  },
];

export default function TestimonialSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232326] mb-3">
            What Readers Are Saying
          </h2>
          <p className="text-[#51555D] max-w-xl mx-auto">
            Real stories from readers whose lives have been transformed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[12px] shadow-md p-6 flex flex-col justify-between h-full
                         hover:shadow-xl transition-all duration-300"
            >
              {/* Testimonial Text */}
              <p className="text-[#51555D] text-sm leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* User Info */}
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={item.avatar}
                  width={40}
                  height={40}
                  alt={item.name}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#232326] text-sm">
                    {item.name}
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
