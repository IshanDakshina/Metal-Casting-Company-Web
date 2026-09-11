import { useState } from 'react'
import { useForm } from 'react-hook-form'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

interface ContactFormValues {
  name: string
  email: string
  phone: string
  productInterest: string
  message: string
}

const PRODUCT_OPTIONS = [
  'Gym Weight Plates',
  'Manhole Covers',
  'Mechanical Machine Parts',
  'Metal Pipes',
  'Sand Casting Models',
  'Custom Order',
  'Other',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>()

  const onSubmit = async (_data: ContactFormValues) => {
    // Placeholder submit handler — wire this up to your backend, form service, or email API.
    await new Promise((resolve) => setTimeout(resolve, 600))
    setSubmitted(true)
    reset()
  }

  const inputClass =
    'w-full rounded-lg border border-ink-muted/25 dark:border-white/15 bg-white dark:bg-navy px-4 py-2.5 text-sm text-ink dark:text-white placeholder:text-ink-muted/70 focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors'

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Get a Quote"
        description="Reach out with your requirements and we'll get back to you with a clear quote — whether it's a standard product order or custom casting work."
      />

      <section className="section bg-surface dark:bg-navy">
        <div className="section-inner grid gap-10 lg:grid-cols-5">
          {/* Contact details */}
          <Reveal className="lg:col-span-2 space-y-6">
            <div className="rounded-xl border border-ink-muted/12 dark:border-white/10 bg-surface-soft dark:bg-navy-soft p-6">
              <h2 className="text-lg font-semibold text-ink dark:text-white">Visit or Reach Us</h2>
              <dl className="mt-5 space-y-5 text-sm">
                <div>
                  <dt className="font-semibold text-ink dark:text-white">Address</dt>
                  <dd className="mt-1 text-ink-muted leading-relaxed">
                    621/3, Thunadahena, Korathota, Kaduwela
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink dark:text-white">Phone</dt>
                  <dd className="mt-1">
                    <a href="tel:+94750295043" className="text-brand dark:text-brand-light hover:underline">
                      +94 75 029 5043
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink dark:text-white">Email</dt>
                  <dd className="mt-1">
                    <a href="mailto:metal.shashiki@gmail.com" className="text-brand dark:text-brand-light hover:underline">
                      metal.shashiki@gmail.com
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink dark:text-white">Working Hours</dt>
                  <dd className="mt-1 text-ink-muted leading-relaxed">
                    Monday &ndash; Saturday, 8:00 AM &ndash; 5:30 PM
                    <br />
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-xl overflow-hidden border border-ink-muted/12 dark:border-white/10 aspect-[4/3]">
              <iframe
                title="Map showing the location of Shashiki Metal Industries in Kelaniya, Sri Lanka"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5415.278768288712!2d79.9860307!3d6.903802200000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2576e3aaca37d%3A0x5027c873add56ba2!2sShashiki%20Metal%20Industries!5e1!3m2!1sen!2slk!4v1789157161048!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="rounded-xl border border-ink-muted/12 dark:border-white/10 bg-white dark:bg-navy-soft p-6 sm:p-8 shadow-card">
              <h2 className="text-lg font-semibold text-ink dark:text-white">Send Us a Message</h2>

              {submitted && (
                <div className="mt-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 px-4 py-3 text-sm text-green-800 dark:text-green-300">
                  Thanks — your message has been sent. We'll get back to you shortly.
                </div>
              )}

              <form className="mt-6 space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink dark:text-white mb-1.5">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      className={inputClass}
                      {...register('name', { required: 'Please enter your name' })}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ink dark:text-white mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="07X XXX XXXX"
                      className={inputClass}
                      {...register('phone', { required: 'Please enter your phone number' })}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-red-600">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink dark:text-white mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className={inputClass}
                    {...register('email', {
                      required: 'Please enter your email address',
                      pattern: { value: /^\S+@\S+\.\S+$/, message: 'Please enter a valid email address' },
                    })}
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-ink dark:text-white mb-1.5">
                    Product of Interest
                  </label>
                  <select
                    id="productInterest"
                    className={inputClass}
                    defaultValue=""
                    {...register('productInterest', { required: 'Please select a product' })}
                  >
                    <option value="" disabled>
                      Select a product
                    </option>
                    {PRODUCT_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.productInterest && (
                    <p className="mt-1.5 text-xs text-red-600">{errors.productInterest.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink dark:text-white mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your requirements, quantities and any drawings you can share..."
                    className={inputClass}
                    {...register('message', { required: 'Please add a short message' })}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto rounded-lg bg-brand px-8 py-3.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
