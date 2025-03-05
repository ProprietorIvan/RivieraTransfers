import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "next-i18next";

const FAQ = () => {
  const { t } = useTranslation("common");

  const faqData = [
    {
      question: t("faq.questions.yacht.question"),
      answer: t("faq.questions.yacht.answer"),
    },
    {
      question: t("faq.questions.booking.question"),
      answer: t("faq.questions.booking.answer"),
    },
    {
      question: t("faq.questions.destinations.question"),
      answer: t("faq.questions.destinations.answer"),
    },
    {
      question: t("faq.questions.dietary.question"),
      answer: t("faq.questions.dietary.answer"),
    },
    {
      question: t("faq.questions.duration.question"),
      answer: t("faq.questions.duration.answer"),
    },
    {
      question: t("faq.questions.activities.question"),
      answer: t("faq.questions.activities.answer"),
    },
  ];

  return (
    <section className="py-24 px-5 bg-white" id="faq">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-serif lg:tracking-tight text-slate-900">
              {t("faq.title")}
            </h3>
            <p className="text-lg mt-4 text-slate-600">{t("faq.subtitle")}</p>
          </div>

          <div className="w-full md:w-1/2 max-w-xl mx-auto">
            <div className="grid divide-y divide-slate-200">
              {faqData.map((faq, index) => (
                <div className="py-5" key={index}>
                  <details className="group">
                    <summary className="flex justify-between text-lg items-center font-medium cursor-pointer list-none text-slate-900">
                      <span>{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <ArrowRight className="h-5 w-5 text-blue-400" />
                      </span>
                    </summary>
                    <p className="text-slate-600 mt-3 group-open:animate-fadeIn">
                      {faq.answer}
                    </p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
