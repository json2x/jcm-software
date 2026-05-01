"use client";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-12 bg-surface-container-lowest"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <span className="font-label text-xs uppercase tracking-[0.1em] text-primary font-bold mb-4 block">
              Initiate a Project
            </span>
            <h2
              className="font-display text-4xl lg:text-5xl font-extrabold text-on-surface tracking-tight mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let&rsquo;s blueprint your next major technical initiative.
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-8">
              We partner with visionary organizations to build structural,
              scalable software. Fill out the form, and a technical lead will
              review your requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <svg
                  className="text-primary mt-1 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <div>
                  <h4
                    className="font-display font-bold text-on-surface"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Direct Inquiry
                  </h4>
                  <p className="font-body text-on-surface-variant">
                    architecture@jcmsoftware.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="text-primary mt-1 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <h4
                    className="font-display font-bold text-on-surface"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Headquarters
                  </h4>
                  <p className="font-body text-on-surface-variant">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-high p-8 lg:p-12 rounded-xl border border-outline-variant/15 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-fixed-dim/20 rounded-full blur-2xl pointer-events-none" />

            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label text-sm font-semibold text-on-surface mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="input-underline"
                  />
                </div>
                <div>
                  <label className="block font-label text-sm font-semibold text-on-surface mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="input-underline"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label text-sm font-semibold text-on-surface mb-2">
                  Corporate Email
                </label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="input-underline"
                />
              </div>

              <div>
                <label className="block font-label text-sm font-semibold text-on-surface mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your architectural needs..."
                  className="input-underline resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary rounded-xl px-8 py-4 font-label font-bold text-lg hover:bg-primary-container transition-colors shadow-md mt-4 active:scale-[0.98]"
              >
                Submit Technical Brief
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
