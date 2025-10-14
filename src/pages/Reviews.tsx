import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "John Doe",
      initials: "JD",
      rating: 5,
      comment: "I had a great experience using ClinicQ! The interface is user-friendly and the doctors are very professional. Highly recommended for anyone seeking quality healthcare online.",
    },
    {
      name: "Jane Smith",
      initials: "JS",
      rating: 4,
      comment: "The appointment scheduling was seamless, and I appreciated the reminders for my upcoming visits. The AI health assistant is incredibly helpful for quick questions.",
    },
    {
      name: "Michael Johnson",
      initials: "MJ",
      rating: 5,
      comment: "Outstanding service! The virtual consultation was as good as an in-person visit. The doctor was attentive and provided excellent medical advice.",
    },
    {
      name: "Sarah Williams",
      initials: "SW",
      rating: 5,
      comment: "ClinicQ has transformed how I manage my health. The platform is intuitive, secure, and the healthcare professionals are top-notch. Five stars!",
    },
    {
      name: "David Brown",
      initials: "DB",
      rating: 4,
      comment: "Great platform with excellent features. The health reminders keep me on track with my medications. Would love to see more specialists available.",
    },
    {
      name: "Emily Davis",
      initials: "ED",
      rating: 5,
      comment: "The AI health assistant answered all my questions promptly. Booking appointments is super easy, and the doctors are always professional and caring.",
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-5 w-5 ${
              index < rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  const averageRating = (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                User <span className="gradient-text">Reviews</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                See what our patients are saying about their ClinicQ experience
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center gap-2">
                  {renderStars(5)}
                </div>
                <div className="text-2xl font-bold gradient-text">{averageRating} / 5.0</div>
                <div className="text-muted-foreground">({reviews.length} reviews)</div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {reviews.map((review, index) => (
                <Card
                  key={index}
                  className="glass-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="h-12 w-12 border-2 border-primary">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{review.name}</h3>
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {review.comment}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="glass-card p-12 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience <span className="gradient-text">ClinicQ</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of satisfied patients who trust ClinicQ for their healthcare needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold rounded-lg glow-effect transition-all">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary/10 font-semibold rounded-lg transition-all">
                  Learn More
                </button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Reviews;
