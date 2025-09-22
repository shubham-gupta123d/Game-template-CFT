import React, { useState } from 'react';

const faqs = [
  {
    question: '01. How do I create Casino Account ?',
    answer:
      'Autem ut suscipit, quibusdam officia, perferendis odio neque eius similique quae ipsum dolor voluptas sequi recusandae dolorem assumenda asperiores deleniti numquam iste fugit eligendi voluptas aliquam voluptate. Quas, magni excepturi ab, dolore explicabo.',
  },
  {
    question: '02. How do I deposit money ?',
    answer:
      'You can deposit using debit card, credit card, or online wallets. Deposits are instant and secure.',
  },
  {
    question: '03. How do I withdraw my winnings ?',
    answer:
      'Withdrawals can be requested through your account dashboard and usually take 2-3 business days.',
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header with background */}
      <div
        className="relative h-72 flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("/bg1.jpg")', // Replace with your background image
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">
            Frequently Asked <br /> Questions
          </h1>
          <p className="text-gray-300 mt-4">
            <span className="cursor-pointer hover:text-yellow-400">Home</span> →{' '}
            <span className="text-yellow-400">Faq</span>
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border border-yellow-500 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 bg-black text-left font-medium hover:bg-yellow-500 hover:text-black transition"
            >
              {faq.question}
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-black text-gray-300">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
