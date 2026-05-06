export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">

      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Data Validation API
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Validate CSV uploads<br />
          <span className="text-[#58a6ff]">before they break your system</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload a CSV, define your schema rules, and get a detailed validation report in seconds. Catch bad data at the edge — not in production.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Access — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>&#10003; Type &amp; format checks</span>
          <span>&#10003; Required field validation</span>
          <span>&#10003; Business rule engine</span>
          <span>&#10003; API key management</span>
          <span>&#10003; Detailed error reports</span>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$9</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited CSV uploads",
              "Custom schema rules",
              "REST API access",
              "API key management",
              "Detailed validation reports",
              "Email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">&#10003;</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start Validating
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What kinds of validation rules are supported?</h3>
            <p className="text-[#8b949e] text-sm">You can validate data types (string, number, date, email, URL), required fields, regex patterns, min/max ranges, and custom business rules via a simple JSON schema config.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How do I integrate it into my pipeline?</h3>
            <p className="text-[#8b949e] text-sm">Send a multipart POST request with your CSV file and schema to the API endpoint using your API key. You'll receive a JSON report with row-level errors and a pass/fail summary.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is there a file size limit?</h3>
            <p className="text-[#8b949e] text-sm">The Pro plan supports CSV files up to 50 MB per upload. For larger files or bulk processing needs, contact us for an enterprise arrangement.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} CSV Data Validator. All rights reserved.
      </footer>
    </main>
  )
}
