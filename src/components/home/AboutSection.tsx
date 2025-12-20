import { Shield, Lightbulb, Users, Award, Target, Heart } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "نوێکاری",
      description: "هەمیشە نوێترین تەکنۆلۆژیا و شێوازەکان بەکاردەهێنین",
    },
    {
      icon: Shield,
      title: "کوالیتی",
      description: "هەموو بەرهەمەکانمان بە کوالیتی بەرز دروستدەکرێن",
    },
    {
      icon: Users,
      title: "کۆمەڵگە",
      description: "کۆمەڵگەیەکی بەهێز لە فێرخوازان دروستدەکەین",
    },
    {
      icon: Award,
      title: "پسپۆڕی",
      description: "تیمێکی پسپۆڕ و شارەزا بەرهەمەکان دابین دەکەن",
    },
    {
      icon: Target,
      title: "ئامانج",
      description: "ئامانجمان گەشەپێدانی تاک و کۆمەڵگەیە",
    },
    {
      icon: Heart,
      title: "خۆشەویستی",
      description: "بە خۆشەویستی و پەرۆش کاردەکەین",
    },
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            دەربارەی ئێمە
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            ئێمە کێین و چی دەکەین؟
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            دیجیتاڵ ستۆر پلاتفۆرمێکی پێشەنگە لە بواری فێرکاری و خزمەتگوزاری دیجیتاڵیدا. 
            ئامانجمان ئەوەیە یارمەتی خەڵکی بدەین بەرەو ئاسۆیەکی نوێی دیجیتاڵی بڕۆن و 
            تواناکانیان گەشەبدەن.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="glass-card rounded-3xl p-8 md:p-12 mb-16 text-center max-w-4xl mx-auto hover-glow transition-all duration-500">
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Target className="w-8 h-8 text-primary-foreground" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ئەرکی ئێمە
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            دابینکردنی باشترین ناوەڕۆکی فێرکاری و ئامرازە دیجیتاڵیەکان بۆ هەموو کەسێک 
            بە نرخێکی مونصفانە. ئێمە پێمان وایە هەموو کەسێک شایستەیە گەیشتن بە باشترینەکان 
            هەبێت.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "+٥", label: "ساڵ تەجرووبە" },
              { value: "+١٠ک", label: "بەکارهێنەری دڵخۆش" },
              { value: "+٢٠٠", label: "بەرهەمی دیجیتاڵ" },
              { value: "٪٩٩", label: "ڕازیبوون" },
            ].map((stat, index) => (
              <div key={index} className="text-primary-foreground">
                <div className="text-3xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
