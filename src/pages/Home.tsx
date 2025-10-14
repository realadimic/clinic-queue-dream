import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, Bell, Stethoscope, Bot } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Calendar,
      title: "Schedule Appointment",
      description: "Book your next doctor's visit with ease.",
      color: "from-blue-500 to-cyan-500",
      link: "/schedule",
    },
    {
      icon: MessageSquare,
      title: "Message Doctor",
      description: "Communicate directly with your healthcare provider.",
      color: "from-green-500 to-emerald-500",
      link: "#",
    },
    {
      icon: Bell,
      title: "Health Reminders",
      description: "Stay on top of your health with personalized reminders.",
      color: "from-purple-500 to-violet-500",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Your Health, <span className="gradient-text">Our Priority</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Get instant medical advice and connect with top doctors online. Experience the future of healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white glow-effect">
                Sign Up
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link to={feature.link} key={index}>
                <Card className="group h-full p-8 glass-card hover:scale-105 transition-all duration-300 cursor-pointer border-2 hover:border-primary/50">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.color} mb-6`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <Button 
                    variant="ghost" 
                    className="w-full group-hover:bg-primary group-hover:text-white transition-colors"
                  >
                    Get Started
                  </Button>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Additional <span className="gradient-text">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Consult with Doctors */}
            <Card className="glass-card p-8 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center mb-6">
                <div className="p-6 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Stethoscope className="h-12 w-12 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">Consult with Doctors</h3>
              <p className="text-center text-muted-foreground mb-6">
                Connect with experienced healthcare professionals for personalized medical advice.
              </p>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 text-white">
                Book Consultation
              </Button>
            </Card>

            {/* AI Health Assistant */}
            <Link to="/ai-assistant">
              <Card className="glass-card p-8 hover:scale-105 transition-all duration-300 h-full">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 animate-pulse">
                    <Bot className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">AI Health Assistant</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Get instant health advice from our advanced AI-powered assistant available 24/7.
                </p>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:opacity-90 text-white">
                  Chat Now
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
