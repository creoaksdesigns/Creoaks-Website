const Documentation = () => {
  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200">
      <h1 className="text-3xl font-bold">Documentation</h1>
      <p className="text-slate-600 mt-2">This section contains links and documentation resources for the new React + Tailwind app.</p>
      <div className="mt-6 space-y-3">
        <a className="block rounded-lg border p-4 hover:bg-slate-50" href="https://react.dev" target="_blank">React docs</a>
        <a className="block rounded-lg border p-4 hover:bg-slate-50" href="https://vite.dev" target="_blank">Vite docs</a>
        <a className="block rounded-lg border p-4 hover:bg-slate-50" href="https://tailwindcss.com" target="_blank">Tailwind CSS docs</a>
      </div>
    </section>
  )
}

export default Documentation
