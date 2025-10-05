const testimonials = [
  {
    quote:
      "StreamLine transformed how our team ships features. We've reduced deployment time by 80% and our developers are happier than ever.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    avatar: "/professional-woman-avatar.png",
  },
  {
    quote:
      "The best investment we've made in our infrastructure. The ROI was clear within the first month. Absolutely game-changing.",
    author: "Michael Rodriguez",
    role: "VP Engineering at DataSync",
    avatar: "/professional-man-avatar.png",
  },
  {
    quote:
      "Finally, a platform that just works. No more wrestling with configs or debugging deployments. Our team can focus on building great products.",
    author: "Emily Watson",
    role: "Lead Developer at CloudNine",
    avatar: "/professional-woman-developer-avatar.png",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            See what developers and engineering leaders are saying about StreamLine.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="rounded-lg border border-border bg-card p-6">
              <p className="text-pretty leading-relaxed text-foreground">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
