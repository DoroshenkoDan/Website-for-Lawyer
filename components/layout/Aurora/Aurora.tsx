
export function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 100vh at 50% 120%, var(--color-accent-hover), color-mix(in srgb, var(--color-accent) 70%, transparent), var(--color-background) 100%)",
        }}
      />
    </div>
  )
}
