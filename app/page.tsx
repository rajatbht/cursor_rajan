"use client";

import Link from "next/link";
import { useState } from "react";

type ModalMode = "login" | "register" | null;

export default function LandingPage() {
  const [mode, setMode] = useState<ModalMode>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitDisabled = email.length === 0 || password.length === 0;

  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:py-28">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Experience effortless access
        </h1>
        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          Login, register, or jump right in as a guest. Responsive, fast, and
          beautifully designed.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <button
          className="button-3d bg-gradient-to-br from-cyan-400 to-blue-600 hover:brightness-110"
          onClick={() => setMode("login")}
          aria-label="Open login"
        >
          <span className="relative z-10">Login</span>
        </button>

        <button
          className="button-3d bg-gradient-to-br from-emerald-400 to-teal-600 hover:brightness-110"
          onClick={() => setMode("register")}
          aria-label="Open register"
        >
          <span className="relative z-10">Register</span>
        </button>

        <Link
          href="/home"
          className="button-3d bg-gradient-to-br from-fuchsia-500 to-purple-700 hover:brightness-110 text-center"
          aria-label="Login as guest"
        >
          <span className="relative z-10">Login as Guest</span>
        </Link>
      </div>

      <div className="mt-16 grid md:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-lg">Fast</h3>
          <p className="text-white/70 mt-2">Optimized static build and CDN-friendly assets.</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-lg">Beautiful</h3>
          <p className="text-white/70 mt-2">Gradient aesthetic, clean typography, and motion.</p>
        </div>
        <div className="glass rounded-2xl p-6">
          <h3 className="font-semibold text-lg">Responsive</h3>
          <p className="text-white/70 mt-2">Looks great on phones, tablets, and desktops.</p>
        </div>
      </div>

      {mode && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
        >
          <div className="absolute inset-0 bg-black/60" onClick={() => setMode(null)} />
          <div className="relative glass rounded-2xl w-full max-w-md p-6">
            <h2 className="text-2xl font-semibold capitalize">{mode}</h2>
            <p className="text-white/70 mt-1">Enter your credentials below.</p>
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("We’re working on this, please login as a guest user for now.");
                setMode(null);
                setEmail("");
                setPassword("");
              }}
            >
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl bg-white/10 placeholder-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl bg-white/10 placeholder-white/50 px-4 py-3 outline-none focus:ring-2 focus:ring-white/30"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div className="flex items-center justify-between gap-4 mt-2">
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15"
                  onClick={() => setMode(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={submitDisabled}
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 disabled:opacity-50"
                >
                  Submit
                </button>
              </div>
              <p className="text-xs text-white/60 mt-2">
                We’re working on this, please login as a guest user for now.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
