import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Users, Clock, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Ensure patient privacy and confidentiality in all interactions.",
    },
    {
      icon: Users,
      title: "Top Professionals",
      description: "Collaborate with top healthcare professionals to deliver high-quality advice.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Offer round-the-clock support through our AI-powered health assistant.",
    },
    {
      icon: Heart,
      title: "Patient Care",
      description: "Track and monitor patient progress through personalized health plans.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                About <span className="gradient-text">ClinicQ</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Revolutionizing healthcare through technology and compassion
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <p className="text-lg leading-relaxed">
                ClinicQ is dedicated to providing quality healthcare and medical services online. 
                With a team of experienced doctors, we offer virtual consultations, personalized 
                health advice, and easy access to your medical records.
              </p>
              <p className="text-lg leading-relaxed">
                Our mission is to empower individuals to take control of their health through 
                convenient, reliable, and secure services. Whether you're looking for a quick 
                consultation or long-term health management, ClinicQ is here to support you.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="gradient-text">Values</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Agenda Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Our <span className="gradient-text">Agenda</span>
              </h2>
              <Card className="glass-card p-8">
                <ul className="space-y-4">
                  {[
                    "Provide affordable and accessible healthcare services online",
                    "Ensure patient privacy and confidentiality in all interactions",
                    "Offer 24/7 support through our AI-powered health assistant",
                    "Collaborate with top healthcare professionals to deliver high-quality advice",
                    "Track and monitor patient progress through personalized health plans",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                        <span className="text-xs font-bold text-white">{index + 1}</span>
                      </div>
                      <p className="text-lg">{item}</p>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
