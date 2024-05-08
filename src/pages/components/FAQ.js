import React from "react";
import "./css/faq.css";

function FAQ() {
  const faqs = [
    {
      question: "How long does it take to install a golf simulator?",
      answer: "The installation time can vary depending on the complexity of the setup and the type of simulator being installed. On average, it may take anywhere from 1 to 2 days for a basic installation, while more advanced setups could take a day or more."
    },
    {
      question: "Do I need any special tools or equipment for installation?",
      answer: "Nope, we are the professionals. We will take care of the whole installation process for you."
    },
    {
      question: "Can I install a golf simulator in my garage?",
      answer: "Yes, many people choose to install their golf simulators in their garage. However, you'll need to ensure that you have enough space and proper ventilation to accommodate the simulator and allow for comfortable play."
    },
    {
      question: "Will having a simulator at home really fix my slice?",
      answer: "Totally, there's no better way to fix a slice then slashing the simulator night and day!"
    },
    {
      question: "What are the electrical requirements for a golf simulator?",
      answer: "Golf simulators typically require a standard electrical outlet for power. However, some advanced systems may have additional power requirements, such as dedicated circuits or voltage specifications. It's essential to check the manufacturer's specifications and consult with an electrician if needed to ensure proper electrical setup."
    }
  ];

  return (
    <section className="faq text-white" id="faq">
      <h1 className="mb-4">Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div className="row">
          <div key={index} className="col-6 mb-3">
            <div className="faq-question">
              <h3>{faq.question}</h3>
            </div>
          </div>
          <div className="col-6 mb-3">
            <div className="faq-answer">
            <p>{faq.answer}</p>
            </div>
          </div>
        </div>
        ))}
    </section>
  );
}

export default FAQ;


