import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { pricingOptions } from '../../constants/data';
import { CheckCircle2 } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="pricing-wrapper text-center">
      <SectionTitle whiteString="Optimize" indigoString="Your Pricing" />
      <div>
        {pricingOptions.map((option, idx) => (
          <div key={idx}>
            <div>
              <p>{option.title}</p>
              <p>
                <span>{option.price}</span>
                <span>/Month</span>
              </p>
              <ul>
                {option.features.map((feature, idx) => (
                  <li key={idx}>
                    <CheckCircle2 />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
