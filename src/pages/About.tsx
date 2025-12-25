import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
    Target,
    Eye,
    Lightbulb,
    Users,
    Award,
    Heart,
    Rocket,
    Shield,
    Globe,
    TrendingUp,
    CheckCircle,
    Sparkles,
    Building,
    Calendar
} from "lucide-react";

const About = () => {
    const values = [
        {
            icon: Lightbulb,
            title: "نوێکاری",
            description: "هەمیشە نوێترین تەکنۆلۆژیا و شێوازەکانی فێرکاری بەکاردەهێنین بۆ ئەوەی باشترین ئەزموون بۆ بەکارهێنەرانمان دابین بکەین.",
            color: "from-yellow-500 to-orange-500",
        },
        {
            icon: Shield,
            title: "کوالیتی",
            description: "هەموو بەرهەمەکانمان بە کوالیتی بەرز و ستانداردی نێودەوڵەتی دروستدەکرێن و پشت ڕاستمان پێیایە.",
            color: "from-blue-500 to-cyan-500",
        },
        {
            icon: Users,
            title: "کۆمەڵگە",
            description: "کۆمەڵگەیەکی بەهێز لە فێرخوازان و پیشەیییەکان دروستدەکەین کە پێکەوە فێردەبن و گەشەدەکەن.",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: Heart,
            title: "دڵسۆزی",
            description: "بە دڵسۆزی و تەواوی وزە کاردەکەین بۆ ئەوەی سەرکەوتنی بەکارهێنەرانمان مسۆگەر بکەین.",
            color: "from-pink-500 to-rose-500",
        },
        {
            icon: Award,
            title: "پسپۆڕی",
            description: "تیمێکی پسپۆڕ و شارەزا لە بوارەکاندا بەرهەمەکان و خزمەتگوزارییەکان دابین دەکەن.",
            color: "from-purple-500 to-indigo-500",
        },
        {
            icon: Globe,
            title: "گلۆباڵ",
            description: "لە ئاستی جیهانیدا کاردەکەین و خزمەت بە بەکارهێنەران لە هەموو شوێنەکاندا دەکەین.",
            color: "from-teal-500 to-cyan-500",
        },
    ];

    const milestones = [
        {
            year: "٢٠١٩",
            title: "دەستپێکردن",
            description: "دیجیتاڵ ستۆر وەک بیرۆکەیەک لە هەولێر دەستی پێکرد بە ئامانجی فێرکاری کۆمەڵایەتی.",
        },
        {
            year: "٢٠٢٠",
            title: "یەکەم کۆرس",
            description: "یەکەم کۆرسی فێرکاریمان بڵاوکردەوە و زیاترو ١٠٠٠ خوێندکار تۆمارکردن.",
        },
        {
            year: "٢٠٢١",
            title: "گەشەکردن",
            description: "تیمەکەمان گەشەکرد و خزمەتگوزاری دیزاین و گەشەپێدانی وێبمان زیادکرد.",
        },
        {
            year: "٢٠٢٢",
            title: "ئامرازەکان",
            description: "ئامرازە دیجیتاڵییەکانمان بڵاوکردەوە و وەک پلاتفۆرمێکی تەواو خۆمان ناساند.",
        },
        {
            year: "٢٠٢٣",
            title: "١٠,٠٠٠ بەکارهێنەر",
            description: "گەیشتین بە ١٠,٠٠٠ بەکارهێنەری چالاک لە هەرێمی کوردستان و عێراقدا.",
        },
        {
            year: "٢٠٢٤",
            title: "ئێستا",
            description: "بەردەوام گەشەدەکەین و ئامانجمان ئەوەیە ببینە سەرچاوەی سەرەکی فێرکاری دیجیتاڵی.",
        },
    ];

    const teamMembers = [
        {
            name: "ئەحمەد محەمەد",
            role: "دامەزرێنەر و بەڕێوەبەری گشتی",
            image: "/staff-1.jpg",
            description: "زیاتر لە ١٠ ساڵ تەجرووبە لە بوارى تەکنۆلۆژیا و فێرکاری دیجیتاڵی.",
        },
        {
            name: "سارا ئەلی",
            role: "بەڕێوەبەری تەکنیکی",
            image: "/staff-2.jpg",
            description: "پسپۆڕی گەشەپێدانی وێب و ئەپلیکەیشن بە ٨ ساڵ تەجرووبە.",
        },
        {
            name: "هێمن کەریم",
            role: "بەڕێوەبەری ناوەڕۆک",
            image: "/staff-3.jpg",
            description: "پسپۆڕی دروستکردنی ناوەڕۆکی فێرکاری و کۆرسی ئۆنلاین.",
        },
        {
            name: "ژیان عەلی",
            role: "بەڕێوەبەری مارکێتینگ",
            image: "/staff-4.jpg",
            description: "پسپۆڕی مارکێتینگی دیجیتاڵی و بەڕێوەبردنی تۆڕە کۆمەڵایەتییەکان.",
        },
    ];

    const achievements = [
        { value: "+٥", label: "ساڵ تەجرووبە", icon: Calendar },
        { value: "+١٠ک", label: "بەکارهێنەری دڵخۆش", icon: Users },
        { value: "+٢٠٠", label: "بەرهەمی دیجیتاڵ", icon: Rocket },
        { value: "٪٩٩", label: "ڕازیبوون", icon: TrendingUp },
    ];

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
                                <Building className="w-4 h-4" />
                                <span className="text-sm font-medium">دەربارەی دیجیتاڵ ستۆر</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-up stagger-1 leading-tight">
                                ئێمە چیرۆکی
                                <span className="gradient-text"> سەرکەوتن </span>
                                دەنووسین
                            </h1>

                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up stagger-2 leading-relaxed">
                                دیجیتاڵ ستۆر لە ساڵی ٢٠١٩ دەستی پێکرد بە ئامانجی یارمەتیدانی خەڵکی کوردستان بۆ فێربوون و گەشەپێدان لە جیهانی دیجیتاڵیدا. ئێستا ئێمە پلاتفۆرمێکی پێشەنگین لە بواری فێرکاری و خزمەتگوزاری دیجیتاڵیدا.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {/* Mission */}
                            <div className="glass-card rounded-3xl p-8 md:p-10 hover-glow transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                                    <Target className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                    ئەرکی ئێمە
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    دابینکردنی باشترین ناوەڕۆکی فێرکاری و ئامرازە دیجیتاڵیەکان بۆ هەموو کەسێک بە نرخێکی مونصفانە. ئێمە پێمان وایە هەموو کەسێک شایستەی گەیشتن بە باشترینەکان هەیە، بەبێ ئەوەی شوێنی جوگرافی یان دۆخی ئابوورییان بەربەست بێت.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {["فێرکاری گەیشتنپێکراو بۆ هەموان", "کوالیتی بەرز بە نرخی گونجاو", "پشتگیری بەردەوام بۆ فێرخوازان"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Vision */}
                            <div className="glass-card rounded-3xl p-8 md:p-10 hover-glow transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
                                    <Eye className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                    ڕوانگەی ئێمە
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    ببین بە سەرچاوەی سەرەکی و یەکەمی فێرکاری دیجیتاڵی لە کوردستان و عێراقدا. ئامانجمان ئەوەیە کۆمەڵگەیەکی پڕ لە تاکە شارەزایان دروست بکەین کە تواناکانیان بەکاربهێنن بۆ گۆڕینی جیهان بەرەو باشتر.
                                </p>
                                <ul className="mt-6 space-y-3">
                                    {["پێشەنگی لە بواری فێرکاری دیجیتاڵی", "دروستکردنی نەوەیەکی شارەزا", "بەرزکردنەوەی ئاستی زانیاری کۆمەڵگە"].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3 text-muted-foreground">
                                            <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                چیرۆکی ئێمە
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                                گەشەی دیجیتاڵ ستۆر لە نێو ساڵەکاندا
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                لە یەک بیرۆکەوە تا ببین بە پلاتفۆرمێکی گەورە - ئەمە چیرۆکی ئێمەیە.
                            </p>
                        </div>

                        {/* Timeline */}
                        <div className="max-w-4xl mx-auto relative">
                            {/* Timeline Line */}
                            <div className="absolute top-0 bottom-0 right-8 md:right-1/2 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute right-5 md:right-auto md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-background shadow-lg z-10" />

                                    {/* Content Card */}
                                    <div className={`mr-16 md:mr-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12 md:mr-auto"}`}>
                                        <div className="bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                                            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3">
                                                {milestone.year}
                                            </span>
                                            <h3 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h3>
                                            <p className="text-muted-foreground">{milestone.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                بەهاکانمان
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                                ئەو بەهایانەی ئێمە پێیان باوەڕمان هەیە
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                ئەم بەهایانە ڕێنماییمان دەکەن لە هەموو بڕیارێکدا و شێوازی کارکردنمان دیاری دەکەن.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {values.map((value, index) => (
                                <div
                                    key={index}
                                    className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <value.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                تیمەکەمان
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                                ئەو کەسانەی کە دیجیتاڵ ستۆریان دروستکرد
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                تیمێکی خۆشەویست و پسپۆڕ کە هەموو ڕۆژێک کار دەکەن بۆ باشترکردنی ئەزموونەکەت.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="group text-center"
                                >
                                    <div className="relative mb-6 mx-auto w-40 h-40">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="relative w-full h-full object-cover rounded-2xl shadow-lg"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                                    <p className="text-primary font-medium mb-3">{member.role}</p>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Achievements Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="bg-gradient-primary rounded-3xl p-8 md:p-16 shadow-xl max-w-5xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                                    دەستکەوتەکانمان بە ژمارە
                                </h2>
                                <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
                                    ئەم ژمارانە نیشانەی متمانەی بەکارهێنەرانمانن و هانامانە بۆ بەردەوام بوون.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                {achievements.map((stat, index) => (
                                    <div key={index} className="text-center group">
                                        <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <stat.icon className="w-8 h-8 text-primary-foreground" />
                                        </div>
                                        <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">{stat.value}</div>
                                        <div className="text-primary-foreground/80">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                                دەتەوێت ببیت بەشێک لە چیرۆکەکەمان؟
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                ئێمە بەردەوام بەدوای تاکە بەهرەداران دەگەڕێین بۆ پەیوەستبوون بە تیمەکەمان. ئەگەر حەزت لە کارکردن هەیە لە دیجیتاڵ ستۆر، پەیوەندیمان پێوە بکە!
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                                >
                                    پەیوەندیمان پێوە بکە
                                    <Rocket className="w-5 h-5" />
                                </a>
                                <a
                                    href="/careers"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
                                >
                                    بینینی ئۆفەرەکان
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
