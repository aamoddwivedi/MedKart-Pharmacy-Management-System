import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white dark:bg-slate-900">
      <section className="max-w-6xl mx-auto px-4 py-20 sm:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center rounded-full bg-brand-100 text-brand-700 px-3 py-1 text-sm font-semibold">
              Trusted healthcare at your doorstep
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight text-ink dark:text-white">
              Your one-stop pharmacy for everyday care.
            </h1>
            <p className="mt-5 text-lg text-ink/70 dark:text-slate-300 max-w-xl">
              Browse genuine medicines, wellness essentials, and personal care products from a pharmacy you can trust.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/medicines"
                className="bg-brand-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-700 transition"
              >
                Shop medicines
              </Link>
              <Link
                to="/login"
                className="border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-lg font-medium text-ink dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-brand-50 via-white to-accent-50 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 p-8 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="text-sm text-ink/60 dark:text-slate-400">Fast delivery</p>
                <p className="mt-2 text-3xl font-bold text-brand-600">2–3 days</p>
              </div>
              <div className="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm border border-slate-100 dark:border-slate-700">
                <p className="text-sm text-ink/60 dark:text-slate-400">Verified products</p>
                <p className="mt-2 text-3xl font-bold text-brand-600">100%</p>
              </div>
              <div className="rounded-2xl bg-white dark:bg-slate-800 p-5 shadow-sm border border-slate-100 dark:border-slate-700 sm:col-span-2">
                <p className="text-sm text-ink/60 dark:text-slate-400">Need help?</p>
                <p className="mt-2 text-xl font-semibold text-ink dark:text-white">Speak to our care team for guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
