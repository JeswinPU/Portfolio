import { useState, type FormEvent } from "react";
import { Linkedin, Mail, MapPin, Phone, Send, User } from "lucide-react";

import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const CONTACT_EMAIL = "jeswinpu2005@gmail.com";

type Field = "name" | "email" | "message";
type Values = Record<Field, string>;
type Errors = Partial<Record<Field, string>>;

// Same rules the form had before (previously enforced with zod).
const EMAIL_PATTERN =
  /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;

function validate({ name, email, message }: Values): Errors {
  const errors: Errors = {};
  if (!name) errors.name = "Name is required";
  else if (name.length > 100) errors.name = "Name is too long";
  if (!EMAIL_PATTERN.test(email) || email.length > 255) errors.email = "Enter a valid email";
  if (message.length < 5) errors.message = "Message is too short";
  else if (message.length > 1000) errors.message = "Message is too long";
  return errors;
}

function readValues(form: HTMLFormElement): Values {
  const data = new FormData(form);
  const get = (key: Field) => String(data.get(key) ?? "").trim();
  return { name: get("name"), email: get("email"), message: get("message") };
}

const info = [
  { icon: User, label: "Name", value: "Jeswin P U" },
  { icon: MapPin, label: "Location", value: "Thrissur, Kerala, India" },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
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
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = readValues(form);
    const nextErrors = validate(values);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as Field[])[0];
    if (firstInvalid) {
      setStatus("");
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }

    const subject = `Portfolio message from ${values.name}`;
    const body = `Hi Jeswin,\r\n\r\n${values.message}\r\n\r\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app…");
    form.reset();
  };

  // After a failed submit, re-check as the visitor types so errors clear once fixed.
  const onInput = (event: FormEvent<HTMLFormElement>) => {
    if (Object.keys(errors).length > 0) setErrors(validate(readValues(event.currentTarget)));
  };

  const fieldProps = (field: Field) => ({
    id: field,
    name: field,
    "aria-invalid": errors[field] ? true : undefined,
    "aria-describedby": errors[field] ? `${field}-error` : undefined,
    className: "mt-1.5",
  });

  const fieldError = (field: Field) =>
    errors[field] && (
      <p id={`${field}-error`} className="mt-1 text-xs text-destructive">
        {errors[field]}
      </p>
    );

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
          <Reveal className="h-full">
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
          </Reveal>

          <Reveal className="h-full" delay={100}>
            <form
              onSubmit={onSubmit}
              onInput={onInput}
              className="glass-card h-full space-y-4 rounded-2xl p-6 sm:p-8"
              noValidate
            >
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  {...fieldProps("name")}
                  placeholder="Your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
                {fieldError("name")}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  {...fieldProps("email")}
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  maxLength={255}
                  required
                />
                {fieldError("email")}
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  {...fieldProps("message")}
                  placeholder="How can I help?"
                  rows={5}
                  maxLength={1000}
                  required
                />
                {fieldError("message")}
              </div>
              <div>
                <Button type="submit" className="w-full shadow-elegant">
                  <Send className="mr-2 h-4 w-4" />
                  Send message
                </Button>
                <p
                  role="status"
                  aria-live="polite"
                  className="mt-2 text-center text-sm text-muted-foreground empty:mt-0"
                >
                  {status}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
