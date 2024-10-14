'use client';

import React, { useState } from 'react';

const FAQItem = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <button
        className="flex justify-between items-center w-full py-4 text-left transition-all duration-500"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-black text-lg md:text-xl no-underline transition-colors duration-500">{question}</span>
        <span className="text-black text-2xl md:text-3xl no-underline transition-transform duration-500">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="pb-4 text-black text-lg md:text-xl">
          {children}
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-white text-black p-8 flex flex-col md:flex-row md:items-start md:space-x-8 align-middle md:justify-between">
      <div className="mb-6 md:mb-0 md:pl-20">
        <h2 className="text-md md:text-lg uppercase mb-2 text-[#6dd9cb]">Frequently Asked Questions</h2>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our FAQs</h1>
      </div>

      <div className="md:pr-20 md:w-1/2">
        <div className="w-full md:max-w-2xl space-y-4 border border-[#5EC6B8] p-4 rounded-2xl">
          <FAQItem question="Template styling and Support">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nostrum veritatis consectetur dolore debitis in eveniet, esse enim molestiae a.
          </FAQItem>
          <FAQItem question="Troubleshooting Animation Issues">
            Content for troubleshooting animation issues...
          </FAQItem>
          <FAQItem question="How to choose the right font license for Framer">
            Content about choosing the right font license...
          </FAQItem>
          <FAQItem question="Is my personal information secure?">
            Information about personal data security...
          </FAQItem>
          <FAQItem question="Template styling and Support">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti nostrum veritatis consectetur dolore debitis in eveniet, esse enim molestiae a.
          </FAQItem>
          <FAQItem question="Troubleshooting Animation Issues">
            Content for troubleshooting animation issues...
          </FAQItem>
          <FAQItem question="How to choose the right font license for Framer">
            Content about choosing the right font license...
          </FAQItem>
          <FAQItem question="Is my personal information secure?">
            Information about personal data security...
          </FAQItem>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
