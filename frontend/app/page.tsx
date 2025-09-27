import Link from 'next/link';
export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-neutral-900" />
          <span className="font-semibold tracking-tight">Trex Investments</span>
          <span className="badge ml-2">Investor Portal</span>
        </div>
        <div className="flex items-center gap-2">
          <Link className="btn" href="/login">Log in</Link>
          <Link className="btn btn-primary" href="/register">Create account</Link>
        </div>
      </header>
      <section className="mt-12 space-y-6">
        <h1 className="text-4xl font-semibold">Transparent pooled investing.</h1>
        <p className="text-neutral-600 max-w-2xl">Track NAV, allocations, transactions, fees, statements, 2FA, and KYC in real-time.</p>
        <div className="flex gap-3">
          <Link className="btn btn-primary" href="/login">Open the portal</Link>
          <Link className="btn" href="/kyc">KYC onboarding</Link>
          <Link className="btn" href="/notifications">Notifications</Link>
        </div>
      </section>
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4">
        {['Transparent fees','Real-time KPIs','Audit trail','2FA security','KYC workflow','PDF statements'].map((t,i)=>(
          <div key={i} className="card"><div className="card-header">{t}</div><div className="card-content text-neutral-600">Every figure is reproducible from inputs.</div></div>
        ))}
      </section>
    </main>
  );
}
