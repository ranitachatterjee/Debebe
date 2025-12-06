import React from 'react';
import { Clock, Truck, Mail } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: Clock,
      title: "Fast Shipping",
      description: "We ship all orders within 2-5 business days"
    },
    {
      icon: Truck,
      title: "Free shipping",
      description: "For all orders over $100.00"
    },
    {
      icon: Mail,
      title: "Happy to help you",
      description: "Any question? We are happy to help you by E-Mail",
      link: "mailto:support@yoursite.com"
    }
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-4 md:mb-5">
                  {feature.link ? (
                    <a 
                      href={feature.link}
                      className="block w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-amber-50 text-amber-600 hover:bg-amber-100 transition-colors duration-300"
                      aria-label={feature.title}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </a>
                  ) : (
                    <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-amber-50 text-amber-600">
                      <Icon className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  {feature.link ? (
                    <a href={feature.link}>
                      <h4 className="text-lg md:text-xl font-semibold text-gray-900 hover:text-amber-700 transition-colors duration-300">
                        {feature.title}
                      </h4>
                    </a>
                  ) : (
                    <h4 className="text-lg md:text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h4>
                  )}
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}