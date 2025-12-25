import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    Clock,
    CheckCircle,
    AlertCircle,
    Loader2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            title: "ئیمەیڵ",
            value: "abdullaazizb58@gmail.com",
            link: "mailto:abdullaazizb58@gmail.com",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Phone,
            title: "ژمارەی تەلەفۆن",
            value: "+964 751 669 5482",
            link: "tel:+9647516695482",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: MapPin,
            title: "ناونیشان",
            value: "هەولێر - کوردستان",
            link: "https://maps.google.com/?q=Erbil,Kurdistan",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: Clock,
            title: "کاتی کارکردن",
            value: "یەکشەممە - پێنجشەممە، ٩ ب.ن - ٥ د.ن",
            link: null,
            color: "from-orange-500 to-red-500",
        },
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Create mailto link with form data
            const subject = encodeURIComponent(formData.subject || "پەیامی نوێ لە وێبسایت");
            const body = encodeURIComponent(
                `ناو: ${formData.name}\n` +
                `ئیمەیڵ: ${formData.email}\n` +
                `تەلەفۆن: ${formData.phone}\n\n` +
                `پەیام:\n${formData.message}`
            );

            // Open mailto link
            window.location.href = `mailto:abdullaazizb58@gmail.com?subject=${subject}&body=${body}`;

            // Show success message
            toast({
                title: "سەرکەوتوو بوو!",
                description: "پەیامەکەت ئامادەیە بۆ ناردن. تکایە لە بەرنامەی ئیمەیڵەکەت بینێرە.",
            });

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            toast({
                title: "هەڵە!",
                description: "کێشەیەک ڕوویدا. تکایە دووبارە هەوڵبدەرەوە.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24">
                {/* Hero Section */}
                <section className="relative py-20 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
                        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-up">
                                <MessageSquare className="w-4 h-4" />
                                <span className="text-sm font-medium">پەیوەندیمان پێوە بکە</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up stagger-1 leading-tight">
                                ئامادەین
                                <span className="gradient-text"> گوێت لێبگرین</span>
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2 leading-relaxed">
                                پرسیار، پێشنیار، یان پێویستیت بە یارمەتییە؟ تیمەکەمان ئامادەیە یارمەتیت بدات. پەیوەندیمان پێوە بکە بە هەر شێوەیەک کە بۆت گونجاوە.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Info Cards */}
                <section className="py-12 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                            {contactInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <info.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-sm font-medium text-muted-foreground mb-2">{info.title}</h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            target={info.link.startsWith("http") ? "_blank" : undefined}
                                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="text-foreground font-semibold hover:text-primary transition-colors block"
                                            dir={info.link.startsWith("tel:") ? "ltr" : undefined}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-foreground font-semibold">{info.value}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form & Map Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Contact Form */}
                            <div className="glass-card rounded-3xl p-8 md:p-10">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-bold text-foreground mb-3">
                                        پەیامێک بنێرە
                                    </h2>
                                    <p className="text-muted-foreground">
                                        فۆرمەکە پڕبکەرەوە و پەیامەکەت بنێرە. زوو وەڵامت دەدەینەوە.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                            ناو <span className="text-destructive">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="ناوی تەواوت بنووسە"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                            ئیمەیڵ <span className="text-destructive">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="example@email.com"
                                            dir="ltr"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                            ژمارەی تەلەفۆن
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="+964 XXX XXX XXXX"
                                            dir="ltr"
                                        />
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                                            بابەت <span className="text-destructive">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                                            placeholder="بابەتی پەیامەکەت"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                            پەیام <span className="text-destructive">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={6}
                                            className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                                            placeholder="پەیامەکەت لێرە بنووسە..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-primary text-primary-foreground font-bold py-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                <span>ناردن...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>ناردنی پەیام</span>
                                                <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </div>

                            {/* Additional Info & Map */}
                            <div className="space-y-8">
                                {/* Why Contact Us */}
                                <div className="glass-card rounded-3xl p-8">
                                    <h3 className="text-2xl font-bold text-foreground mb-6">
                                        بۆچی پەیوەندیمان پێوە بکەیت؟
                                    </h3>
                                    <ul className="space-y-4">
                                        {[
                                            "پرسیار دەربارەی کۆرس و خزمەتگوزارییەکان",
                                            "پشتگیری تەکنیکی و یارمەتی",
                                            "هاوکاری و پارتنەری بزنس",
                                            "پێشنیار بۆ باشترکردنی خزمەتگوزارییەکان",
                                            "داواکاری دیمۆ یان کۆنسڵتەیشن",
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Map */}
                                <div className="glass-card rounded-3xl p-2 overflow-hidden">
                                    <div className="relative w-full h-80 rounded-2xl overflow-hidden">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201879.83032289106!2d43.88779!3d36.19113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40072ab0ad89b2e5%3A0x6c5d9b8c7d0e8e0!2sErbil%2C%20Iraq!5e0!3m2!1sen!2s!4v1234567890"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="rounded-2xl"
                                        />
                                    </div>
                                </div>

                                {/* Response Time */}
                                <div className="bg-gradient-primary rounded-2xl p-6 text-center">
                                    <Clock className="w-12 h-12 text-primary-foreground mx-auto mb-3" />
                                    <h4 className="text-xl font-bold text-primary-foreground mb-2">
                                        کاتی وەڵامدانەوە
                                    </h4>
                                    <p className="text-primary-foreground/90">
                                        بە زۆری لە ماوەی ٢٤ کاتژمێردا وەڵامت دەدەینەوە
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                    پرسیارە باوەکان
                                </h2>
                                <p className="text-lg text-muted-foreground">
                                    لەوانەیە وەڵامی پرسیارەکەت لێرە بدۆزیتەوە
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    {
                                        question: "چۆن دەتوانم کۆرسێک بکڕم؟",
                                        answer: "دەتوانیت لە لاپەڕەی کۆرسەکان کۆرسی دڵخوازت هەڵبژێریت و کلیک لەسەر دوگمەی کڕین بکەیت. ڕێنماییەکان بەردەوام دەبن.",
                                    },
                                    {
                                        question: "ئایا دەتوانم پارەکەم بگەڕێنمەوە؟",
                                        answer: "بەڵێ، ئەگەر لە ماوەی ٧ ڕۆژی یەکەمدا ڕازی نەبیت، دەتوانیت داوای گەڕاندنەوەی پارە بکەیت.",
                                    },
                                    {
                                        question: "چۆن پشتگیری تەکنیکی وەربگرم؟",
                                        answer: "دەتوانیت لە ڕێگەی ئیمەیڵ، تەلەفۆن، یان فۆرمی پەیوەندی پەیوەندیمان پێوە بکەیت. تیمەکەمان ئامادەیە یارمەتیت بدات.",
                                    },
                                    {
                                        question: "ئایا سەرتیفیکا دەدەن؟",
                                        answer: "بەڵێ، دوای تەواوکردنی هەر کۆرسێک، سەرتیفیکایەکی پیشەیی وەردەگریت.",
                                    },
                                ].map((faq, index) => (
                                    <div
                                        key={index}
                                        className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <AlertCircle className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-foreground mb-2">{faq.question}</h3>
                                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
