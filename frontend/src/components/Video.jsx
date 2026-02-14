export default function Video() {
  return (
    <section className="py-20 bg-rose-50 text-center">
      <h2 className="text-3xl text-rose-600 mb-6">Just for You 🎥</h2>
      <video
        src="/love-video.mp4"
        controls
        className="mx-auto rounded-xl shadow-lg w-3/4"
      />
    </section>
  );
}
