import React, { useState } from "react";
import { faq } from "../../Data/Faq";
import "./Fax.css";
import { Plus, Minus } from "lucide-react";

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faq.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h3>{item.question}</h3>
              <span>{openIndex === index ? <Minus /> : <Plus />}</span>
            </div>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
