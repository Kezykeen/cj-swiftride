import { useState } from "react";

interface Item {
  question: string;
  answer: string;
}

const data: Item[] = [
  {
    question: "How does the process work?",
    answer:
      "We help you find, buy, and ship cars from trusted U.S. auction sites like Copart. Once you create an account and fund it, our team sets up your bidding account, handles the purchase, and updates you on every stage, from payment to shipment and delivery.",
  },
  {
    question: "Is my money safe when I fund my account?",
    answer:
      "We help you find, buy, and ship cars from trusted U.S. auction sites like Copart. Once you create an account and fund it, our team sets up your bidding account, handles the purchase, and updates you on every stage, from payment to shipment and delivery.",
  },
  {
    question: "Can I choose the car I want to buy?",
    answer:
      "We help you find, buy, and ship cars from trusted U.S. auction sites like Copart. Once you create an account and fund it, our team sets up your bidding account, handles the purchase, and updates you on every stage, from payment to shipment and delivery.",
  },
  {
    question: "What happens after I win a bid?",
    answer:
      "We help you find, buy, and ship cars from trusted U.S. auction sites like Copart. Once you create an account and fund it, our team sets up your bidding account, handles the purchase, and updates you on every stage, from payment to shipment and delivery.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "We help you find, buy, and ship cars from trusted U.S. auction sites like Copart. Once you create an account and fund it, our team sets up your bidding account, handles the purchase, and updates you on every stage, from payment to shipment and delivery.",
  },
  {
    question: "What if my payment fails or I want a refund?",
    answer:
      "We help you find, buy, and ship cars from trusted U.S. auction sites like Copart. Once you create an account and fund it, our team sets up your bidding account, handles the purchase, and updates you on every stage, from payment to shipment and delivery.",
  },
];

const FAQsAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-2 font-plus-jakarta">
      {data.map((item, index) => (
        <div key={index}>
          {/* Button Section */}
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex items-center justify-between w-full py-5 text-left cursor-pointer transition-transform duration-500 ease-in-out"
          >
            <span className="text-lg font-medium text-[#0A0A0A]">
              {item.question}
            </span>

            {openIndex === index ? (
              <img src="/images/faq-minus.png" alt="" />
            ) : (
              <img src="/images/faq-plus.png" alt="" />
            )}
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-[#667085] w-[720px] pb-8 leading-relaxed">
              {item.answer}
            </p>
          </div>

          <div className="w-full border-t border-gray-200"></div>
        </div>
      ))}
    </div>
  );
};

export default FAQsAccordion;
