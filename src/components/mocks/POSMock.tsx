"use client";

import { motion } from "framer-motion";

const items = [
  { name: "Cappuccino", note: "Reg · Oat", price: 38000, qty: 2 },
  { name: "Croissant", note: "Almond", price: 27000, qty: 1 },
  { name: "Iced Matcha", note: "Less ice", price: 35000, qty: 1 },
];

const fmt = (n: number) =>
  "Rp " + n.toLocaleString("id-ID").replace(/,/g, ".");

export default function POSMock() {
  const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  return (
    <div className="flex h-full flex-col bg-bone text-ink">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <div className="font-display text-[14px] italic leading-none">
            Order #1284
          </div>
          <div className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.18em] text-ink/50">
            Counter 02 · Dine-in
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/15 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-amber-700">
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-amber-500"
          />
          Offline
        </div>
      </div>

      {/* Items */}
      <div className="flex-1 space-y-1.5 overflow-hidden px-3">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.1 }}
            className="flex items-center gap-3 rounded-xl border border-ink/10 bg-white/70 px-3 py-2"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/15 font-mono text-[11px] font-semibold text-accent">
              {it.qty}×
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[10.5px] font-semibold leading-tight">
                {it.name}
              </div>
              <div className="font-mono text-[8.5px] text-ink/50">
                {it.note}
              </div>
            </div>
            <span className="font-mono text-[10px] tabular-nums">
              {fmt(it.price * it.qty)}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Totals */}
      <div className="mx-3 mt-3 rounded-2xl bg-ink p-3 text-bone">
        <div className="space-y-1 font-mono text-[9.5px]">
          <Row label="Subtotal" value={fmt(subtotal)} />
          <Row label="Tax 10%" value={fmt(tax)} />
        </div>
        <div className="mt-2 flex items-baseline justify-between border-t border-bone/15 pt-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/60">
            Total
          </span>
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            className="font-display text-[20px] tracking-tight"
          >
            {fmt(total)}
          </motion.span>
        </div>
      </div>

      {/* Pay button */}
      <div className="px-3 pb-4 pt-3">
        <div className="grid grid-cols-3 gap-1.5 pb-2 font-mono text-[8.5px] uppercase tracking-wider text-ink/60">
          <button className="rounded-lg border border-ink/15 py-1.5">Cash</button>
          <button className="rounded-lg border border-accent bg-accent/10 py-1.5 text-accent">
            QRIS
          </button>
          <button className="rounded-lg border border-ink/15 py-1.5">Card</button>
        </div>
        <button className="w-full rounded-full bg-accent py-2 text-center text-[10px] font-medium text-bone shadow-lg shadow-accent/20">
          Charge {fmt(total)}
        </button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-bone/75">
      <span>{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  );
}
