import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [saved, setSaved] = useState(false)

  const update = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2800)
  }

  return (
    <section className="rounded-2xl bg-white p-8 shadow-sm border border-slate-200 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-slate-600 mt-2">Reach out to learn how Creoaks can help your business grow.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input required name="name" value={form.name} onChange={update('name')} placeholder="Name" className="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        <input required type="email" name="email" value={form.email} onChange={update('email')} placeholder="Email" className="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        <textarea required name="message" value={form.message} onChange={update('message')} rows="5" placeholder="Message" className="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40" />
        <button type="submit" className="rounded bg-primary px-5 py-2.5 text-white hover:bg-primary/90">Send Message</button>
        {saved && <p className="text-green-600">Message submitted (mocked). Thank you!</p>}
      </form>
    </section>
  )
}

export default Contact
