import { useEffect } from 'react';
import PageLayout from '@/components/layout/PageLayout';

const SummaryPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.style.transitionDelay = `${index * 100}ms`;
            entry.target.classList.add('grand-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.grand-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <PageLayout>
      <section className="bg-white px-6 pt-6 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-10 py-10">
          <div className="lg:w-1/2 grand-animate">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              <span className="block text-navy animate-slide-up">Hey, I'm</span>
              <span className="inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Yuktha Sri Bollina
              </span>
            </h1>
            <div className="text-lg text-gray-700 space-y-4 font-medium animate-slide-up">
              <p>
                I’m Yuktha Sri Bollina, from the town of Rajahmundry — a place that taught me to stay calm, be curious, and enjoy the small things in life.
              </p>
              <p>
                I’m someone who loves exploring — tools, ideas, and challenges. While I don’t always think “outside the box,” I build practical solutions with smart, iterative effort. I try, learn, and grow — that's how I work.
              </p>
              <p>
                I study Computational Business Analytics, where I turn data into decisions using Power BI, Python, and logical reasoning. I enjoy uncovering insights, solving real-world problems, and helping businesses become data-savvy.
              </p>
              <p>
                Outside work, you’ll find me tuning into business podcasts, playing chess with friends, or experimenting with new dishes — they all sharpen different sides of me.
              </p>
              <p className="italic text-navy font-semibold">
                This portfolio is a glimpse into how I think, what I build, and why I believe in data-powered decisions.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center grand-animate">
            <div className="w-80 h-80 sm:w-96 sm:h-96 relative group transition-transform duration-700 ease-in-out hover:scale-105">
              <div className="absolute inset-0 rounded-full border-[6px] border-white z-10"></div>
              <img
                src="/assets/pic3.jpg"
                alt="Yuktha Sri Bollina"
                className="rounded-full w-full h-full object-cover z-20 relative shadow-2xl border-4 border-yellow-400"
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .grand-fade-in {
            opacity: 1 !important;
            transform: translateY(0) scale(1);
          }
          .grand-animate {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
            transition: all 1s ease;
          }
          .animate-slide-up {
            animation: slideUp 1s ease forwards;
          }
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </PageLayout>
  );
};

export default SummaryPage;
