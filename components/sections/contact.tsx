"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaTiktok } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 56, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  },
};

const fieldContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const field: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const socials = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Gmail", href: "mailto:info@mysite.com", icon: SiGmail },
  { label: "TikTok", href: "#", icon: FaTiktok },
];

// Recipient config
const TO_EMAILS = ["sample@gmail.com", "another-to@gmail.com"];
const CC_EMAILS = ["samplecc@gmail.com", "another-cc@gmail.com"];
const BCC_EMAILS = ["samplebcc@gmail.com", "another-bcc@gmail.com"];

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");

  const handleChange =
    (fieldName: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [fieldName]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;

    const params = new URLSearchParams({
      cc: CC_EMAILS.join(","),
      bcc: BCC_EMAILS.join(","),
      subject: form.subject,
      body,
    });

    const mailtoLink = `mailto:${TO_EMAILS.join(",")}?${params.toString()}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus("sent");
      setForm(initialForm);
    }, 400);
  };

  const handleSendAnother = () => {
    setStatus("idle");
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={container}
      className="relative flex flex-col overflow-hidden bg-light-100"
    >
      <div className="relative">
        {/* Hero */}
        <div className="relative h-[38vh] min-h-70 w-full overflow-hidden sm:h-[42vh] sm:min-h-90 lg:h-[45vh]">
          <Image
            src="/images/sp.png"
            alt="Contact SPM Dubai"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-800/60" />

          <motion.div
            variants={item}
            className="absolute inset-x-6 bottom-8 flex max-w-2xl flex-col gap-3 sm:inset-x-10 sm:bottom-12 sm:gap-4 lg:inset-x-16 lg:bottom-16"
          >
            <h2 className="font-title text-2xl font-bold text-light-100 xs:text-3xl sm:text-4xl lg:text-5xl">
              Reach Out to Us
            </h2>
            <p className="font-text text-sm text-light-200 sm:text-base lg:text-xl">
              Need support, have a query, or looking to discuss a recovery mandate? Let&apos;s talk.
            </p>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          variants={item}
          className="flex flex-col gap-8 px-5 py-12 sm:gap-10 sm:px-10 sm:py-16 lg:max-w-[58%] lg:px-16"
        >
          <div>
            <h2 className="font-title text-2xl leading-none text-primary-800 sm:text-3xl lg:text-5xl">
              Contact Information
            </h2>
            <p className="mt-3 font-text text-sm leading-relaxed text-dark-800 sm:text-base">
              We&apos;re based in Dubai and serve clients across the GCC,
              Philippines, and Singapore.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.a
              whileHover={{ x: 4 }}
              href="tel:1234567890"
              className="flex items-center gap-4"
            >
              <Phone className="h-5 w-5 shrink-0 text-accent-500 sm:h-6 sm:w-6" />
              <span className="font-text text-sm text-dark-900 sm:text-base">123-456-7890</span>
            </motion.a>

            <motion.a
              whileHover={{ x: 4 }}
              href="mailto:info@mysite.com"
              className="flex items-center gap-4"
            >
              <Mail className="h-5 w-5 shrink-0 text-accent-500 sm:h-6 sm:w-6" />
              <span className="font-text text-sm text-dark-900 sm:text-base">info@mysite.com</span>
            </motion.a>

            <div className="flex items-center gap-4">
              <MapPin className="h-5 w-5 shrink-0 text-accent-500 sm:h-6 sm:w-6" />
              <span className="font-text text-sm text-dark-900 sm:text-base">
                104, Aspin Commercial Tower, Sheikh Zayed Road, Dubai.
              </span>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                href={social.href}
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-light-300 text-primary-700 transition-colors hover:border-primary-800 hover:bg-primary-800 hover:text-light-100 sm:h-14 sm:w-14"
              >
                <social.icon className="h-4 w-4 sm:h-6 sm:w-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={item}
          className="mx-5 mb-12 rounded-3xl bg-light-100 p-5 shadow-2xl sm:mx-10 sm:mb-16 sm:p-8 lg:absolute lg:right-16 lg:top-1/2 lg:mx-0 lg:mb-0 lg:w-[35vw] lg:max-w-md lg:-translate-y-1/2 lg:p-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            {status === "sent" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="flex flex-col items-center gap-4 py-10 text-center sm:py-14"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
                >
                  <CheckCircle2 className="h-12 w-12 text-primary-800 sm:h-14 sm:w-14" />
                </motion.div>
                <div>
                  <h3 className="font-title text-xl font-bold text-primary-800 sm:text-2xl">
                    Almost there
                  </h3>
                  <p className="mt-2 font-text text-sm text-dark-800">
                    Your email app should now be open with your message ready — just hit send.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleSendAnother}
                  className="mt-2 rounded-full border border-primary-800 px-6 py-2.5 font-title text-sm tracking-widest text-primary-800 transition-colors hover:bg-primary-800 hover:text-light-100"
                >
                  Fill out another message
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <h3 className="font-title text-lg font-bold text-primary-800 sm:text-2xl">
                  Send us a message
                </h3>
                <p className="mt-2 font-text text-sm text-dark-800">
                  Get in touch with us for any inquiries or support. We&apos;re
                  here to assist you.
                </p>

                <motion.form
                  variants={fieldContainer}
                  initial="hidden"
                  animate="show"
                  onSubmit={handleSubmit}
                  className="mt-6 flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <motion.div variants={field} className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="font-text text-sm text-dark-800">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange("name")}
                        placeholder="Enter your name"
                        className="rounded-lg border border-light-300 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
                      />
                    </motion.div>
                    <motion.div variants={field} className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="font-text text-sm text-dark-800">
                        Your Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange("email")}
                        placeholder="Enter your email"
                        className="rounded-lg border border-light-300 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
                      />
                    </motion.div>
                  </div>

                  <motion.div variants={field} className="flex flex-col gap-2">
                    <label htmlFor="contact-subject" className="font-text text-sm text-dark-800">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange("subject")}
                      placeholder="Enter subject"
                      className="rounded-lg border border-light-300 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
                    />
                  </motion.div>

                  <motion.div variants={field} className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="font-text text-sm text-dark-800">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange("message")}
                      placeholder="Type your message here..."
                      className="resize-none rounded-lg border border-light-300 px-4 py-2.5 font-text text-sm text-dark-900 outline-none transition-colors focus:border-primary-800"
                    />
                  </motion.div>

                  <motion.button
                    variants={field}
                    type="submit"
                    disabled={status === "submitting"}
                    whileHover={status !== "submitting" ? { scale: 1.02 } : undefined}
                    whileTap={status !== "submitting" ? { scale: 0.98 } : undefined}
                    className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary-800 py-3 font-title text-sm tracking-widest text-light-100 transition-colors hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      {status === "submitting" ? (
                        <motion.span
                          key="loading"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </motion.span>
                      ) : (
                        <motion.span
                          key="idle"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center gap-2"
                        >
                          Send Message
                          <Send className="h-4 w-4" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}