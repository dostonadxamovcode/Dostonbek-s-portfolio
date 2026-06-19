import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function useScrollReveal(delay = 0) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return ref;
}

const socials = [
  { label: "GitHub", url: "https://github.com/dostonadxamovcode" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/doston-adxamov-47709a320/?trk=launchpad_feed" },
  { label: "Telegram Offical", url: "https://t.me/uzcoder_offical" },
  { label: "Telegram", url: "https://t.me/UzCoder018" },
  { label: "Email", url: "mailto:doston.adxamov.code@gmail.com" },
];

export default function Contact() {
  const { t } = useTranslation();
  const headerRef = useScrollReveal(0);
  const formRef = useScrollReveal(100);
  const socialsRef = useScrollReveal(200);

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          reply_to: form.email,
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-10 sm:py-16 space-y-10">
      <title>Contact Doston Adxamov (Uzcoder) | Frontend Developer — adxamovv.uz</title>
      <meta name="description" content="Get in touch with Doston Adxamov (Uzcoder), Frontend Developer and React Developer from Uzbekistan. Available for freelance projects and new opportunities." />
      <meta property="og:title" content="Contact — Doston Adxamov (Uzcoder) | Frontend Developer" />
      <meta property="og:url" content="https://adxamovv.uz/contact" />
      <link rel="canonical" href="https://adxamovv.uz/contact" />

      <div ref={headerRef} className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
          <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500">
            {t("contact.eyebrow")}
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight font-display"
        >
          {t("contact.heading")}
        </h1>
        <p className="text-sm opacity-60 pt-1">
          {t("contact.description")}
        </p>
      </div>

      <div ref={formRef} className="space-y-4 border-b border-border pb-10">
        {status === "sent" ? (
          <div className="py-8 text-center space-y-2">
            <p className="text-amber-500 text-sm font-medium">✓ {t("contact.sent")}</p>
            <p className="text-xs opacity-50">{t("contact.sentDesc")}</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-1 space-y-1">
                <label className="text-xs uppercase tracking-widest opacity-40">{t("contact.nameLabel")}</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={t("contact.namePlaceholder")}
                  className="w-full bg-transparent border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 transition-colors duration-200 placeholder:text-black dark:placeholder:text-white"
                />
              </div>
              <div className="flex-1 space-y-1">
                <label className="text-xs uppercase tracking-widest opacity-40">{t("contact.emailLabel")}</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("contact.emailPlaceholder")}
                  className="w-full bg-transparent border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 transition-colors duration-200 placeholder:text-black dark:placeholder:text-white"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs uppercase tracking-widest opacity-40">{t("contact.messageLabel")}</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder={t("contact.messagePlaceholder")}
                rows={5}
                className="w-full bg-transparent border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 transition-colors duration-200 placeholder:text-black dark:placeholder:text-white resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="text-xs font-medium px-4 py-2 border border-border rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 disabled:opacity-40"
            >
              {status === "loading" ? t("contact.sending") : `${t("contact.send")} →`}
            </button>

            {status === "error" && (
              <p className="text-xs text-red-400">{t("contact.error")}</p>
            )}
          </div>
        )}
      </div>

      <div ref={socialsRef} className="space-y-4">
        <h2 className="text-xs font-semibold tracking-widest uppercase opacity-40">{t("contact.elsewhere")}</h2>
        <div className="space-y-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-2 border-b border-border last:border-0 hover:text-amber-500 transition-colors duration-200 no-underline group"
            >
              <span className="text-sm font-medium">{s.label}</span>
              <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}