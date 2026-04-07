import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I become a member?",
    answer:
      "Becoming a member is easy! Simply click on the 'Join Now' button, fill out the registration form, and pay the subscription fee. Welcome to the East Coast Anglers Club!",
  },
  {
    question: "What events do you offer?",
    answer:
      "Our club offers a variety of events including fishing trips, casting clinics, skills workshops, and more. Check our events schedule on the homepage for upcoming activities.",
  },
  {
    question: "Can I book a one-on-one session with a fishing guide?",
    answer:
      "Absolutely! Our experienced fishing guides offer personalized one-on-one sessions. You can book and pay for these sessions through your member dashboard.",
  },
];

export function FaqAccordion() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <HelpCircle className="h-12 w-12 mx-auto text-slate-700 mb-4" />
          <h2 className="text-3xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>
        <Accordion defaultValue={[0]}>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={index}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
