import { useState } from "react";
import { Mail, MapPin, Phone, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedBox from "@/components/AnimatedBox";
import ImageGridInfo from "@/components/ImageGridInfo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { toast } from "sonner";
import galleryConsultation from "@/assets/gallery-consultation.jpg";
import galleryPartnership from "@/assets/gallery-partnership.jpg";
import galleryOfficeView from "@/assets/gallery-office-view.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    service: "",
    source: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.organization ||
      !formData.service ||
      !formData.source ||
      !formData.message
    ) {
      toast.error("Please fill in all fields", {
        description: "All fields are required before submission."
      });
      return;
    }

    setIsSubmitting(true);

    const data = {
      access_key: "d68d047f-1210-4992-addc-a9bab8ea2cda",
      name: formData.name,
      email: formData.email,
      organization: formData.organization,
      service: formData.service,
      source: formData.source,
      message: formData.message,
      botcheck: false,
      subject: "New Contact Form Submission - Workforce One Information Technology",
      from_name: "Workforce One Information Technology Website"
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Thank you! We'll be in touch soon.", {
          description: "Your message has been received successfully."
        });
        setFormData({
          name: "",
          email: "",
          organization: "",
          service: "",
          source: "",
          message: ""
        });
      } else {
        toast.error("Oops! Something went wrong.", {
          description: "Please try again or email us directly."
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Failed to send message.", {
        description: "Please check your internet connection and try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Workforce One Information Technology</title>
        <meta
          name="description"
          content="Contact Workforce One Information Technology (WorkforceOneIT) to discuss proposal support, cleared recruitment, staffing, and software development needs."
        />
        <meta
          name="keywords"
          content="Workforce One Information Technology, WorkforceOneIT, Workforce One IT, contact Workforce One Information Technology, proposal consultation, staffing inquiry, software project quote"
        />
        <link rel="canonical" href="https://www.workforceoneit.com/contact" />
        <meta property="og:title" content="Contact Us | Workforce One Information Technology" />
        <meta
          property="og:description"
          content="Connect with experts in proposal development, cleared talent, staffing, and software at Workforce One Information Technology (WorkforceOneIT)."
        />
        <meta property="og:url" content="https://www.workforceoneit.com/contact" />
        <meta property="og:image" content="https://www.workforceoneit.com/og-image.jpg" />
        <meta name="twitter:title" content="Contact Us | Workforce One Information Technology" />
        <meta
          name="twitter:description"
          content="Connect with experts in proposal development, cleared talent, staffing, and software at Workforce One Information Technology (WorkforceOneIT)."
        />
        <meta name="twitter:image" content="https://www.workforceoneit.com/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        {/* Hero Section */}
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <AnimatedBox animation="fadeInUp" delay={200}>
                <h1 className="sr-only" style={{ position: 'absolute', width: '1px', height: '1px', padding: '0', margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: '0' }}>
                  Contact Us | Workforce One Information Technology | WorkforceOneIT | Workforce One IT
                </h1>
                <h2 className="text-6xl md:text-7xl font-bold">
                  <span className="bg-gradient-to-r from-accent via-accent-glow to-secondary bg-clip-text text-transparent">
                    Contact Us
                  </span>
                </h2>
              </AnimatedBox>
              <AnimatedBox animation="fadeInUp" delay={400}>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  We're ready when you are
                </p>
              </AnimatedBox>
              <AnimatedBox animation="fadeInUp" delay={600}>
                <p className="text-lg text-foreground max-w-3xl mx-auto">
                  Have a question about our services, a project you're planning, or just want to
                  explore how we can help you win, recruit, staff or build software? Let's talk.
                </p>
              </AnimatedBox>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-24 scroll-smooth">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
              {/* Contact Form */}
              <AnimatedCard className="p-10" animation="fadeInLeft" delay={200}>
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot Field */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      disabled={isSubmitting}
                      className="bg-glass/40 border-glass-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      disabled={isSubmitting}
                      className="bg-glass/40 border-glass-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Organization <span className="text-red-500">*</span>
                    </label>
                    <Input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={e => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Your Company Name"
                      required
                      disabled={isSubmitting}
                      className="bg-glass/40 border-glass-border focus:border-accent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Tell us about your requirement <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={formData.service}
                      onValueChange={value => setFormData({ ...formData, service: value })}
                      disabled={isSubmitting}
                      required
                    >
                      <SelectTrigger className="bg-glass/40 border-glass-border focus:border-accent">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="proposal">Proposal Development</SelectItem>
                        <SelectItem value="recruitment">Cleared Recruitment</SelectItem>
                        <SelectItem value="staffing">Staffing</SelectItem>
                        <SelectItem value="software">Software Development</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      How did you hear about us? <span className="text-red-500">*</span>
                    </label>
                    <Select
                      value={formData.source}
                      onValueChange={value => setFormData({ ...formData, source: value })}
                      disabled={isSubmitting}
                      required
                    >
                      <SelectTrigger className="bg-glass/40 border-glass-border focus:border-accent">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="google">Google</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="referral">Friend or Colleague</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">
                      Project details / Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      rows={6}
                      required
                      disabled={isSubmitting}
                      className="bg-glass/40 border-glass-border focus:border-accent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#66CB00] hover:bg-[#66CB00]/90 hover:shadow-lg text-white text-lg font-semibold py-7 group transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={22} />
                  </Button>
                </form>
              </AnimatedCard>

              {/* Contact Information - single combined box */}
              <div className="space-y-8">
                <AnimatedCard className="p-8" animation="fadeInRight" delay={300}>
                  <h3 className="text-2xl font-bold mb-6">Contact</h3>

                  <div className="space-y-6">
                    {/* Headquarter */}
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-accent-glow flex-shrink-0">
                        <MapPin size={24} className="text-background" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">
                        </p>
                        <p className="text-muted-foreground">
                          St. Petersburg, Florida
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-secondary to-coral flex-shrink-0">
                        <Phone size={24} className="text-background" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">
                        </p>
                        <a
                          href="tel:+17037911501"
                          className="text-muted-foreground hover:text-accent transition-colors duration-200 block"
                        >
                          +1 (703) 791-1501
                        </a>
                      </div>
                    </div>

                    {/* Email – own icon row */}
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-secondary flex-shrink-0">
                        <Mail size={24} className="text-background" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">
                        </p>
                        <a
                          href="mailto:info@workforceoneit.com"
                          className="text-muted-foreground hover:text-accent transition-colors duration-200 block"
                        >
                          info@workforceoneit.com
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>

                {/* Stay Connected */}
                <AnimatedCard className="p-8" animation="fadeInRight" delay={700}>
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                      Stay Connected
                    </span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Follow us on social media for updates, insights and new opportunities.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-lg bg-glass/40 border border-glass-border hover:border-accent flex items-center justify-center transition-all hover:scale-110"
                    >
                      <span className="text-accent font-bold">in</span>
                    </a>
                  </div>
                </AnimatedCard>

                {/* Ready to Get Started */}
                <AnimatedCard
                  className="p-8 bg-gradient-to-br from-accent/10 to-secondary/10"
                  animation="fadeInRight"
                  delay={900}
                >
                  <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our team typically responds within 24 hours during business days. For urgent
                    inquiries, please mention it in your message.
                  </p>
                  <div className="flex items-center space-x-2 text-accent">
                    <Mail size={20} className="animate-pulse-slow" />
                    <span className="font-semibold">Average response time: 24 hours</span>
                  </div>
                </AnimatedCard>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid Info Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <ImageGridInfo
              images={[
                { src: galleryConsultation, alt: "Business consultation", label: "Expert Guidance" },
                { src: galleryPartnership, alt: "Partnership collaboration" },
                { src: galleryOfficeView, alt: "Professional environment" }
              ]}
              title="Why Connect With Us"
              subtitle="Your Success Is Our Priority"
              sections={[
                {
                  title: "Responsive Communication",
                  icon: <MessageCircle size={24} className="text-background" />,
                  content:
                    "We value your time and respond promptly to all inquiries. Our team is committed to providing clear, helpful communication throughout our engagement."
                },
                {
                  title: "Flexible Scheduling",
                  icon: <Clock size={24} className="text-background" />,
                  content:
                    "We work around your schedule for consultations and meetings. Whether you prefer phone, video, or in-person discussions, we accommodate your preferences."
                },
                {
                  title: "Tailored Solutions",
                  icon: <CheckCircle size={24} className="text-background" />,
                  content:
                    "Every client is unique. We take time to understand your specific needs and develop customized solutions that align with your goals and constraints."
                }
              ]}
            />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Contact;