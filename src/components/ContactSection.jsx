import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "janakajmera12@@gmail.com",
    href: "mailto:janakajmera12@@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93582 28928",
    href: "tel:+919358228928",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Udaipur, Rajasthan, India",
    href: "https://maps.app.goo.gl/oCZm6L8r4WpCPYdZA",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/janakajmera",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/janakajmera/",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "https://x.com/ajmerajanak",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/janakajmera/",
  },
  // {
  //   name: "YouTube",
  //   icon: FaYoutube,
  //   href: "https://www.youtube.com/@YOUR_USERNAME",
  // },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setSubmitStatus({
      type: null,
      message: "",
    });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS error:", err);

      setSubmitStatus({
        type: "error",
        message:
          err.text ||
          err.message ||
          "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">

        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="text-terminal-blue font-mono text-sm md:text-base mb-4">
            $ ./contact.sh
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to software engineering opportunities,
            particularly in AI and systems. If you're hiring or have an
            interesting opportunity, I'd be happy to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left Side */}
          <div className="space-y-8">

            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Contact Information
              </h3>

              <p className="font-mono text-sm text-terminal-blue">
                $ cat contact.txt
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-5">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-3 rounded-md bg-primary/10 border border-transparent group-hover:border-primary/30 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div>
                      <h4 className="font-medium text-primary">
                        {item.label}
                      </h4>

                      <p className="text-muted-foreground group-hover:text-primary transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <h4 className="font-medium mb-2">
                Connect With Me
              </h4>

              <p className="font-mono text-terminal-blue text-sm mb-5">
                $ ls social/
              </p>

              <div className="flex items-center gap-5">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}
            <div className="pt-4">
              <div className="bg-card border border-primary/30 rounded-lg p-6">

                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 bg-primary rounded-full animate-pulse" />

                  <span className="font-medium">
                    Currently Available
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  I'm currently open to software engineering opportunities,
                  especially roles involving AI, systems, and backend
                  engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Message Form */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-xs">

            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">
                Send a Message
              </h3>

              <p className="font-mono text-sm text-terminal-blue">
                $ ./send_message.sh
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background font-mono focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background font-mono focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background font-mono focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={cn(
                  "w-full flex items-center justify-center gap-2",
                  "px-6 py-3 rounded-md",
                  "font-mono font-medium",
                  "border border-primary",
                  "text-primary",
                  "hover:bg-primary hover:text-primary-foreground",
                  "transition-all duration-300",
                  "disabled:opacity-50 disabled:cursor-not-allowed"
                )}
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>$ send</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              {/* Submission Status */}
              {submitStatus.type && (
                <div
                  className={cn(
                    "flex items-center gap-3 p-4 rounded-md border",
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border-green-500/20 text-green-500"
                      : "bg-red-500/10 border-red-500/20 text-red-500"
                  )}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 shrink-0" />
                  )}

                  <p className="text-sm">
                    {submitStatus.message}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="text-center mt-16">
          <p className="font-mono text-sm text-muted-foreground">
            <span className="text-terminal-blue">
              janakajmera@portfolio
            </span>
            :~${" "}
            <span className="text-primary">
              echo "Thanks for visiting!"
            </span>
            <span className="text-primary animate-pulse">
              _
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};