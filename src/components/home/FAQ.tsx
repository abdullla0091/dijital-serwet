import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "چۆن دەتوانم کۆرسەکان بکڕم؟",
      answer:
        "بۆ کڕینی کۆرسەکان، سەرەتا پێویستە هەژمارێک دروستبکەیت، پاشان کۆرسی دڵخوازت هەڵبژێرە و بە شێوەی ئۆنلاین پارەی بدە. پاش کڕین، کۆرسەکە هەمیشەیی دەبێتە هی تۆ.",
    },
    {
      question: "ئایا پارەی گەڕاوە هەیە؟",
      answer:
        "بەڵێ، ئەگەر لە ٧ ڕۆژی یەکەمدا ڕازی نەبوویت، دەتوانیت داوای گەڕاندنەوەی پارەکەت بکەیت. ئێمە دڵنیایی دەدەین کە ڕازی دەبیتەوە.",
    },
    {
      question: "کۆرسەکان تا کەی بەردەستن؟",
      answer:
        "کاتێک کۆرسێک دەکڕیت، هەمیشەیی دەبێتە هی تۆ. دەتوانیت لە هەر کاتێکدا و لە هەر شوێنێکەوە سەیری بکەیت بەبێ هیچ سنووردارییەک.",
    },
    {
      question: "ئایا بڕوانامە دەدرێت؟",
      answer:
        "بەڵێ، پاش تەواوکردنی هەر کۆرسێک، بڕوانامەیەکی فەرمی وەردەگریت کە دەتوانیت لە CVەکەت و لینکدئیندا بەکاریبهێنیت.",
    },
    {
      question: "چۆن دەتوانم یارمەتی وەربگرم؟",
      answer:
        "تیمی پشتگیریمان ٢٤/٧ ئامادەیە بۆ وەڵامدانەوەی هەموو پرسیارەکانت. دەتوانیت لە ڕێگەی چات، ئیمەیڵ، یان تەلەفۆنەوە پەیوەندیمان پێوەبکەیت.",
    },
    {
      question: "ئایا خزمەتگوزاری تایبەت بۆ کۆمپانیاکان هەیە؟",
      answer:
        "بەڵێ، پلانی تایبەت بۆ کۆمپانیا و دامەزراوەکان هەیە کە دەتوانن کارمەندەکانیان فێربکەن. بۆ زانیاری زیاتر پەیوەندیمان پێوەبکە.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>پرسیار و وەڵام</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            پرسیارە باوەکان
          </h2>
          <p className="text-lg text-muted-foreground">
            لێرەدا وەڵامی پرسیارە باوەکانت دەدۆزیتەوە. ئەگەر پرسیاری زیاترت هەیە، پەیوەندیمان پێوەبکە.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl border border-border/50 px-6 data-[state=open]:shadow-card-hover transition-all duration-300"
              >
                <AccordionTrigger className="text-right text-lg font-semibold py-6 hover:no-underline hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            پرسیارەکەت لە لیستەکەدا نییە؟
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            پەیوەندیمان پێوەبکە
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
