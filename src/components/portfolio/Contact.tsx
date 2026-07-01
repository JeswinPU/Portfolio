import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, Send, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});
type FormValues = z.infer<typeof schema>;

const info = [
  { icon: User, label: "Name", value: "Jeswin P U" },
  { icon: MapPin, label: "Location", value: "Thrissur, Kerala, India" },
  {
    icon: Mail,
    label: "Email",
    value: "jeswinpu2005@gmail.com",
    href: "mailto:jeswinpu2005@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 9207674046", href: "tel:+919207674046" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jeswinpu",
    href: "https://linkedin.com/in/jeswinpu",
  },
];

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (values: FormValues) => {
    const body = `Hi Jeswin,%0D%0A%0D%0A${encodeURIComponent(values.message)}%0D%0A%0D%0A— ${encodeURIComponent(values.name)} (${encodeURIComponent(values.email)})`;
    window.location.href = `mailto:jeswinpu2005@gmail.com?subject=${encodeURIComponent(
      `Portfolio message from ${values.name}`,
    )}&body=${body}`;
    toast.success("Opening your email client…");
    reset();
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's build something together"
          description="I'm open to full-time roles, freelance projects, and interesting collaborations."
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-full"
          >
            <div className="glass-card h-full rounded-2xl p-6 sm:p-8">
              <ul className="space-y-5">
              {info.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="truncate text-sm font-medium text-foreground">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="block rounded-lg transition-colors hover:bg-accent/50"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-card h-full space-y-4 rounded-2xl p-6 sm:p-8"
              noValidate
            >
              <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" {...register("name")} className="mt-1.5" />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                className="mt-1.5"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="How can I help?"
                rows={5}
                {...register("message")}
                className="mt-1.5"
              />
              {errors.message && (
                <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full shadow-elegant">
              <Send className="mr-2 h-4 w-4" />
              Send message
            </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
