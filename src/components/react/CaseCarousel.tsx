import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ShoppingBag, Laptop, Stethoscope, Dumbbell } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CaseStudy {
  title: string;
  sector: string;
  result: string;
  metric: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const cases: CaseStudy[] = [
  {
    title: 'E-commerce de Moda',
    sector: 'Varejo Online',
    result: '+420%',
    metric: 'ROI em 6 meses',
    description: 'Reestruturação completa das campanhas de Meta Ads resultou em crescimento explosivo de vendas.',
    icon: ShoppingBag
  },
  {
    title: 'SaaS B2B',
    sector: 'Tecnologia',
    result: '+180%',
    metric: 'Leads qualificados',
    description: 'Estratégia multi-canal com Google Ads e LinkedIn gerou pipeline de R$ 2M em oportunidades.',
    icon: Laptop
  },
  {
    title: 'Clínica Odontológica',
    sector: 'Saúde',
    result: '+250%',
    metric: 'Agendamentos',
    description: 'Campanhas locais otimizadas e funil de conversão aprimorado triplicaram os agendamentos.',
    icon: Stethoscope
  },
  {
    title: 'Academia Premium',
    sector: 'Fitness',
    result: '+320%',
    metric: 'Matrículas',
    description: 'Combinação de tráfego pago e landing pages de alta conversão resultou em crescimento recorde.',
    icon: Dumbbell
  }
];

export default function CaseCarousel() {
  return (
    <div className="case-carousel-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="pb-16"
      >
        {cases.map((caseStudy, index) => {
          const IconComponent = caseStudy.icon;
          return (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow">
                {/* Icon */}
                <div className="text-primary-600 mb-4">
                  <IconComponent className="w-12 h-12" />
                </div>
                
                {/* Sector Badge */}
                <div className="inline-block px-3 py-1 bg-primary-100 text-primary-800 text-sm font-semibold rounded-full mb-4">
                  {caseStudy.sector}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {caseStudy.title}
                </h3>
                
                {/* Result */}
                <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-4 mb-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary-700 via-secondary-600 to-accent-600 bg-clip-text text-transparent mb-1">
                    {caseStudy.result}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {caseStudy.metric}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #7c3aed;
        }
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 24px;
        }
        .swiper-pagination-bullet-active {
          background-color: #7c3aed;
        }
      `}</style>
    </div>
  );
}

