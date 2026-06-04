import LazyImage from '../components/LazyImage'

const IMAGE_COUNT = 100

export default function Gallery() {
  return (
    <div style={{ padding: 24 }}>
      <h1>Gallery — 100 Lazy Images</h1>
      <p>
        Each image uses IntersectionObserver + native <code>loading="lazy"</code>.
        Images only load when they scroll into view (plus 200px margin).
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: 16,
          marginTop: 24,
        }}
      >
        {Array.from({ length: IMAGE_COUNT }, (_, i) => (
          <div key={i} style={{ border: '1px solid #ddd', borderRadius: 8, padding: 8 }}>
            <LazyImage
              src={`https://picsum.photos/seed/${i + 1}/400/300`}
              alt={`Random image ${i + 1}`}
              width={400}
              height={300}
              style={{ width: '100%', height: 'auto', borderRadius: 4 }}
            />
            <p style={{ textAlign: 'center', margin: '8px 0 0', fontSize: 14 }}>
              Image #{i + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}