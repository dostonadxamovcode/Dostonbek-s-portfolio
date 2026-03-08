import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const BOT_TOKEN = "8657959051:AAEXc24KBhr5QPcOT0Id5cCA25NK5ZEc8tQ";
const CHAT_ID = "6721806013";

const EMAILJS_SERVICE_ID = "service_az2wx1h";
const EMAILJS_TEMPLATE_ID = "template_64rop9a";
const EMAILJS_PUBLIC_KEY = "FB10NnpCU1ntzPuIC";

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
  { label: "GitHub", url: "https://github.com/doston.adxamov.code@gmail.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/doston-adxamov-47709a320/?trk=launchpad_feed" },
  { label: "Telegram", url: "https://t.me/uzco_der" },
  { label: "Email", url: "mailto:doston.adxamov.code@email.com" },
];

export default function Contact() {
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

    const text = `📩 New Message!\n\n👤 Name: ${form.name}\n📧 Email: ${form.email}\n💬 Message:\n${form.message}`;

    try {
      const [telegramRes] = await Promise.all([
        fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text }),
        }),
        emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: form.name,
            from_email: form.email,
            message: form.message,
          },
          EMAILJS_PUBLIC_KEY
        ),
      ]);

      if (telegramRes.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="max-w-2xl mx-auto py-10 sm:py-16 space-y-10">

      <div ref={headerRef} className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="inline-block w-5 h-[2px] bg-amber-500"></span>
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-amber-500">
            Contact
          </span>
        </div>
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Get in Touch
        </h1>
        <p className="text-sm opacity-60 pt-1">
          Have a project in mind? Feel free to reach out.
        </p>
      </div>

      <div ref={formRef} className="space-y-4 border-b border-border pb-10">
        {status === "sent" ? (
          <div className="py-8 text-center space-y-2">
            <p className="text-amber-500 text-sm font-medium">✓ Message sent!</p>
            <p className="text-xs opacity-50">I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="flex-1 space-y-1">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full bg-transparent border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 transition-colors duration-200 placeholder:opacity-30"
                />
              </div>
              <div className="flex-1 space-y-1">
                <label className="text-[10px] uppercase tracking-widest opacity-40">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 transition-colors duration-200 placeholder:opacity-30"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest opacity-40">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={5}
                className="w-full bg-transparent border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-amber-500 transition-colors duration-200 placeholder:opacity-30 resize-none"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="text-xs font-medium px-4 py-2 border border-border rounded-lg hover:border-amber-500 hover:text-amber-500 transition-colors duration-200 disabled:opacity-40"
            >
              {status === "loading" ? "Sending..." : "Send Message →"}
            </button>

            {status === "error" && (
              <p className="text-xs text-red-400">Something went wrong. Please try again.</p>
            )}
          </div>
        )}
      </div>

      <div ref={socialsRef} className="space-y-4">
        <h2 className="text-xs font-semibold tracking-widest uppercase opacity-40">Elsewhere</h2>
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