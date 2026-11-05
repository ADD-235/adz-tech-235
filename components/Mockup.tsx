function Win({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-44 bg-gradient-to-br from-ink to-navy p-3" aria-hidden="true">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/15 bg-navy/80 p-2">
        <div className="mb-2 flex gap-1">
          <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <i className="h-1.5 w-1.5 rounded-full bg-white/30" />
          <i className="h-1.5 w-1.5 rounded-full bg-gold" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default function Mockup({ kind }: { kind: string }) {
  if (kind === "site")
    return (
      <Win>
        <div className="flex h-12 flex-col justify-center gap-1.5 rounded bg-gold/25 px-3">
          <span className="h-2 w-2/3 rounded bg-gold" />
          <span className="h-1.5 w-1/2 rounded bg-white/40" />
        </div>
        <div className="mt-2 grid flex-1 grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => <span key={i} className="rounded bg-white/10" />)}
        </div>
      </Win>
    );
  if (kind === "shop")
    return (
      <Win>
        <div className="grid flex-1 grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="flex-1 rounded bg-white/10" />
              <span className="h-1.5 w-2/3 rounded bg-white/40" />
              <span className="h-2 w-1/2 rounded bg-gold" />
            </div>
          ))}
        </div>
      </Win>
    );
  if (kind === "app")
    return (
      <Win>
        <div className="flex flex-1 gap-2">
          <div className="flex w-1/4 flex-col gap-1.5">
            {[0, 1, 2, 3].map((i) => <span key={i} className={`h-2 rounded ${i === 0 ? "bg-gold" : "bg-white/20"}`} />)}
          </div>
          <div className="flex flex-1 flex-col gap-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex flex-1 items-center justify-between rounded bg-white/10 px-2">
                <span className="h-1.5 w-1/2 rounded bg-white/40" />
                <span className="h-2 w-5 rounded-full bg-gold/70" />
              </div>
            ))}
          </div>
        </div>
      </Win>
    );
  if (kind === "dash")
    return (
      <Win>
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => <span key={i} className="h-8 rounded bg-white/10" />)}
        </div>
        <div className="mt-2 flex flex-1 items-end gap-1.5">
          {[40, 65, 50, 85, 60, 95, 75].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} className="flex-1 rounded-t bg-gold/80" />
          ))}
        </div>
      </Win>
    );
  if (kind === "logo")
    return (
      <Win>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          <span className="mb-2 h-11 w-11 rotate-45 rounded-xl bg-gold" />
          <span className="h-2 w-20 rounded bg-white/60" />
          <span className="h-1.5 w-14 rounded bg-white/30" />
        </div>
      </Win>
    );
  return (
    <Win>
      <div className="flex flex-1 justify-center">
        <div className="flex h-full w-24 flex-col justify-between rounded bg-gradient-to-b from-gold to-gold/40 p-2">
          <span className="h-3 w-3/4 rounded bg-navy" />
          <span className="h-8 w-8 self-center rounded-full bg-navy/40" />
          <span className="h-2 w-1/2 rounded bg-navy" />
        </div>
      </div>
    </Win>
  );
}
