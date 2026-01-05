import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar isAuthenticated={!!user} onLogout={signOut} />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <div className="text-center max-w-3xl mx-auto animate-fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have questions about our machines or services? We're here to help. 
              Reach out to us and our team will respond promptly.
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-card border border-border rounded-xl p-8 animate-slide-up">
              <h2 className="font-display text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input 
                      placeholder="Your name" 
                      required 
                      className="bg-secondary border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      required 
                      className="bg-secondary border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input 
                    type="tel" 
                    placeholder="Your phone number" 
                    className="bg-secondary border-border"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input 
                    placeholder="How can we help?" 
                    required 
                    className="bg-secondary border-border"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Your message..." 
                    rows={5} 
                    required 
                    className="bg-secondary border-border resize-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="glow" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-card border border-border rounded-xl p-6">
                <h2 className="font-display text-2xl font-bold mb-6">Get in Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm">
                        GAYATHRI TECHNOCRATS <br />
                        1/281, MOOKANDAPALLI <br />
                        HOSUR – 635 126 <br />
                        TAMIL NADU <br />
                        INDIA 
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">
                        +91-9994496112  <br />
                        +91- 9944272112
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        gtech-hosur@hotmail.com<br />
                        gtech.hosur@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Business Hours</h3>
                      <p className="text-muted-foreground text-sm">
                        Monday - Saturday: 9:00 AM - 6:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
            <div className="bg-card border border-border rounded-xl overflow-hidden h-64">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3891.4156143061987!2d77.7917508!3d12.7514994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7102ee59e99f%3A0x805360ab6dfc5cff!2sGayathri%20Technocrats%20Hosur!5e0!3m2!1sen!2sin!4v1767590674619!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Gayathri Technocrats Location"
  />
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
