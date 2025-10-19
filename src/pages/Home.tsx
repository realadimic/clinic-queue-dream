import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, MessageSquare, Bell, Stethoscope, Bot, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const doctors = [
    { name: "Dr. Sarah Mitchell", specialty: "Cardiology", experience: "15 years", image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop" },
    { name: "Dr. James Wilson", specialty: "Neurology", experience: "12 years", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop" },
    { name: "Dr. Emily Chen", specialty: "Pediatrics", experience: "10 years", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&h=300&fit=crop" },
    { name: "Dr. Michael Brown", specialty: "Orthopedics", experience: "18 years", image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop" },
    { name: "Dr. Lisa Anderson", specialty: "Dermatology", experience: "8 years", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 z-10">
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
      <section className="py-12 md:py-16 bg-muted/30 relative z-10">
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

      {/* Our Doctors Section */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Doctors</span>
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {doctors.map((doctor, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/3">
                    <Card className="glass-card hover:scale-105 transition-all duration-300 border-primary/20 overflow-hidden h-full">
                      <div className="aspect-square overflow-hidden">
                        <img 
                          src={doctor.image} 
                          alt={doctor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold mb-1 gradient-text">{doctor.name}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{doctor.specialty}</p>
                        <div className="flex items-center gap-2 text-xs text-primary">
                          <Award className="h-3 w-3" />
                          <span>{doctor.experience}</span>
                        </div>
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="glass-card" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-16 md:py-24 relative z-10">
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

      {/* Our Services Section */}
      <section className="py-16 md:py-24 bg-muted/30 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Medical Records */}
            <Card className="p-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Medical Records</h3>
              <p className="text-white/90">Access and manage your medical records securely online.</p>
            </Card>

            {/* Prescription Refills */}
            <Card className="p-8 bg-gradient-to-br from-green-500 to-green-600 text-white border-0 hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Prescription Refills</h3>
              <p className="text-white/90">Request prescription refills and manage your medications easily.</p>
            </Card>

            {/* Health Monitoring */}
            <Card className="p-8 bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 hover:scale-105 transition-all duration-300">
              <div className="mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Health Monitoring</h3>
              <p className="text-white/90">Track your health metrics and receive personalized insights.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
