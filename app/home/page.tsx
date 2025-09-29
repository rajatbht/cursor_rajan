export default function HomePage() {
  return (
    <main className="px-6 py-16 md:py-24">
      <section className="mx-auto max-w-5xl">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome</h1>
          <p className="mt-3 text-white/80">
            You are logged in as a guest. Explore and enjoy the experience.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-lg">Quick Tips</h3>
            <ul className="list-disc list-inside text-white/80 mt-2 space-y-1">
              <li>Try resizing the window to see responsive design.</li>
              <li>Enjoy fast page loads via static optimization.</li>
              <li>Beautiful gradients keep things engaging.</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-lg">Get Inspired</h3>
            <p className="text-white/80 mt-2">
              Imagine dashboards, feeds, or widgets here to keep users engaged.
            </p>
          </div>
          <div className="glass rounded-2xl p-6">
            <h3 className="font-semibold text-lg">Next Steps</h3>
            <p className="text-white/80 mt-2">
              Implement auth, connect APIs, and personalize experiences next.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}


