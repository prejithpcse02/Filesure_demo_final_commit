import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { acc1, acc2 } from "@constants";

const Faq = () => {
  return (
    <section className="w-screen bg-white">
      <div className="max-w-[90vw] sm:max-w-[1120px] mx-auto mb-32">
        <h1 className="head_text1">FAQ</h1>
        <div className="flex sm:flex-row flex-col justify-between mt-10 gap-10">
          <div className="flex flex-col flex-1">
            {acc1.map((acc, i) => (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    {acc.text}
                  </AccordionTrigger>
                  <AccordionContent>
                    The cost depends on the type and scale of the project as
                    well as the company&apos;s market scale. So it may vary
                    based on requirement. Please contact us to know more.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="flex flex-col flex-1">
            {acc2.map((acc, i) => (
              <Accordion key={i} type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-left">
                    {acc.text}
                  </AccordionTrigger>
                  <AccordionContent>
                    The cost depends on the type and scale of the project as
                    well as the company&apos;s market scale. So it may vary
                    based on requirement. Please contact us to know more.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
