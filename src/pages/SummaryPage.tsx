import { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';

const SummaryPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.transitionDelay = `${index * 100}ms`;
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <PageLayout>
      <section className="min-h-screen bg-gradient-to-br from-white to-yellow-50 flex flex-col lg:flex-row items-center justify-center px-5 py-20">
        {/* Right Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mb-10 lg:mb-0 order-1 lg:order-2 animate-on-scroll opacity-0 transition-opacity duration-800 ease-out">
          <div className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg border-2 border-yellow-400 transform transition-all duration-700 ease-in-out hover:scale-102">
            <img
              src="/assets/pic3.jpg"
              alt="Yuktha Sri Bollina"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Left Section - Info */}
        <div className="w-full lg:w-1/2 lg:pr-10 space-y-6 text-gray-800 order-2 lg:order-1">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight animate-heading break-words relative z-10">
            Statement of <span className="text-yellow-500">Portfolio</span>
          </h1>
          <p className="text-lg leading-relaxed animate-on-scroll opacity-0">
            <span className="font-semibold text-navy">Hey! I’m Yuktha Sri Bollina</span>, from the town of Rajahmundry — a place
            that taught me to stay calm, be curious, and enjoy the small things in life.
          </p>
          <p className="text-lg leading-relaxed animate-on-scroll opacity-0">
            I’m someone who loves exploring — tools, ideas, and challenges. While I don’t always think “outside the box,” I build practical
            solutions with smart, iterative effort. <span className="text-yellow-500 font-medium">I try, learn, and grow</span> — that's how I work.
          </p>
          <p className="text-lg leading-relaxed animate-on-scroll opacity-0">
            I study <span className="font-semibold text-navy">Computational Business Analytics</span>, where I turn data into decisions
            using Power BI, Python, and logical reasoning. I enjoy uncovering insights, solving real-world problems, and helping
            businesses become data-savvy.
          </p>
          <p className="text-lg leading-relaxed animate-on-scroll opacity-0">
            Outside work, you’ll find me tuning into business podcasts, playing chess with friends, or experimenting with new dishes — 
            they all sharpen different sides of me.
          </p>
          <p className="text-lg italic leading-relaxed animate-on-scroll opacity-0">
            This portfolio is a glimpse into how I think, what I build, and why I believe in data-powered decisions.
          </p>
        </div>
      </section>

      <style jsx>{`
        .fade-in {
          opacity: 1 !important;
          transform: translateY(0);
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 800ms ease-out, transform 800ms ease-out;
        }

        .animate-heading {
          opacity: 0;
          transform: translateY(30px);
          animation: slideFadeIn 1s ease-out forwards;
          animation-delay: 200ms;
        }

        @keyframes slideFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </PageLayout>
  );
};

export default SummaryPage;
