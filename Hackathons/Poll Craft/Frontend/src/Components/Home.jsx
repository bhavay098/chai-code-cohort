import { motion } from "motion/react";

export default function HomePage() {
  const features = [
    {
      title: "Live Analytics",
      description:
        "Watch responses update instantly with immersive real-time dashboards powered by WebSockets.",
    },
    {
      title: "Smart Poll Sharing",
      description:
        "Share beautiful public poll links with built-in expiry, access control, and publishing.",
    },
    {
      title: "Audience Insights",
      description:
        "Understand participation patterns, completion rates, and live engagement trends.",
    },
    {
      title: "Realtime Collaboration",
      description:
        "Synchronize poll activity and analytics across devices without refreshing the page.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(34,197,94,0.08),transparent_30%)]" />

      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:70px_70px]" />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[15%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[140px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[140px]"
      />

      {/* ================= NAVBAR ================= */}

      <header className="fixed top-0 left-0 w-full z-50 px-5 pt-5">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto"
        >
          <div
            className="
              relative overflow-hidden
              rounded-[30px]
              border border-white/10
              bg-white/[0.06]
              backdrop-blur-3xl
              shadow-[0_10px_80px_rgba(0,0,0,0.35)]
            "
          >
            {/* Glass Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(255,255,255,0.03),rgba(255,255,255,0.02))]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_30%)] opacity-70" />

            <div className="absolute inset-px rounded-[29px] border border-white/10" />

            <div className="relative px-8 py-5 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{
                    rotate: 180,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.6 }}
                  className="
                    relative w-12 h-12 rounded-2xl
                    bg-gradient-to-br from-blue-400 to-purple-500
                    flex items-center justify-center
                    shadow-[0_0_40px_rgba(96,165,250,0.45)]
                  "
                >
                  <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)]" />

                  <span className="relative text-lg font-black text-white">
                    P
                  </span>
                </motion.div>

                <div>
                  <h1 className="text-xl font-black tracking-[-0.04em]">
                    PulsePoll
                  </h1>

                  <p className="text-xs text-zinc-400 mt-1 tracking-[0.2em] uppercase">
                    Realtime Intelligence
                  </p>
                </div>
              </div>

              {/* Nav */}
              <nav className="hidden lg:flex items-center gap-3">
                {["Features", "Analytics", "Live", "About"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="
                      relative px-5 py-2.5 rounded-full
                      text-sm font-medium
                      text-zinc-300
                      transition-all duration-300
                      hover:text-white
                      hover:bg-white/[0.06]
                    "
                  >
                    {item}
                  </a>
                ))}
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <button
                  className="
                    px-5 py-2.5 rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    text-sm font-medium
                    transition-all duration-300
                    hover:bg-white/[0.08]
                    hover:border-white/20
                    active:scale-[0.98]
                  "
                >
                  Login
                </button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    relative overflow-hidden
                    px-6 py-2.5 rounded-full
                    bg-white text-black
                    font-semibold text-sm
                    shadow-[0_0_40px_rgba(255,255,255,0.2)]
                  "
                >
                  <span className="relative z-10">Get Started</span>

                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[linear-gradient(120deg,rgba(255,255,255,0.4),transparent)]" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* ================= HERO ================= */}

      <main className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 pt-44 pb-28">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="
                  inline-flex items-center gap-3
                  px-5 py-3 rounded-full
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-xl
                "
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />

                <span className="text-sm text-zinc-300 tracking-[0.15em] uppercase">
                  WebSocket Powered Live Polling
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                }}
                className="
                  mt-10
                  text-7xl md:text-[8rem]
                  font-black
                  leading-[0.88]
                  tracking-[-0.07em]
                "
              >
                Polling
                <br />
                <span className="bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
                  Reimagined
                </span>
                <br />
                In Real Time.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
                className="mt-8 text-lg leading-relaxed text-zinc-400 max-w-2xl"
              >
                Create beautiful live polls, gather instant feedback, visualize
                participation analytics, and publish realtime insights through a
                modern collaborative platform engineered for the next generation
                of engagement.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: 0.45,
                }}
                className="mt-12 flex flex-wrap gap-5"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    relative overflow-hidden
                    px-8 py-4 rounded-2xl
                    bg-gradient-to-r from-blue-500 to-purple-500
                    text-white font-semibold
                    shadow-[0_0_50px_rgba(96,165,250,0.35)]
                  "
                >
                  Launch Poll
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity bg-[linear-gradient(120deg,rgba(255,255,255,0.3),transparent)]" />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    px-8 py-4 rounded-2xl
                    border border-white/10
                    bg-white/[0.05]
                    backdrop-blur-xl
                    text-white font-medium
                    hover:bg-white/[0.08]
                    transition-all
                  "
                >
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.6,
                }}
                className="mt-16 grid grid-cols-3 gap-5"
              >
                {[
                  {
                    value: "14K+",
                    label: "Live Responses",
                  },
                  {
                    value: "3.8K+",
                    label: "Polls Created",
                  },
                  {
                    value: "99.9%",
                    label: "Realtime Sync",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-3xl
                      border border-white/10
                      bg-white/[0.04]
                      backdrop-blur-xl
                      p-6
                    "
                  >
                    <div className="text-3xl font-black">{item.value}</div>

                    <div className="mt-2 text-sm text-zinc-400">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: -3,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              className="relative flex justify-center"
            >
              {/* Glow Rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[560px] h-[560px] rounded-full border border-blue-500/10 animate-spin [animation-duration:30s]" />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[460px] h-[460px] rounded-full border border-purple-500/10 animate-spin [animation-duration:18s] [animation-direction:reverse]" />
              </div>

              {/* Main Card */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative w-full max-w-xl
                  rounded-[2.5rem]
                  border border-white/10
                  bg-white/[0.06]
                  backdrop-blur-3xl
                  overflow-hidden
                  shadow-[0_0_100px_rgba(0,0,0,0.45)]
                "
              >
                {/* Glass */}
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03),rgba(255,255,255,0.02))]" />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.15),transparent_45%)]" />

                {/* Header */}
                <div className="relative border-b border-white/10 px-8 py-7 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      Live Poll
                    </p>

                    <h3 className="mt-4 text-3xl font-black leading-tight">
                      Future of
                      <br />
                      Web Development
                    </h3>
                  </div>

                  <div
                    className="
                      w-20 h-20 rounded-full
                      border border-blue-400/30
                      flex items-center justify-center
                      text-blue-300
                      font-black text-xl
                      shadow-[0_0_40px_rgba(96,165,250,0.2)]
                    "
                  >
                    92%
                  </div>
                </div>

                {/* Progress */}
                <div className="relative px-8 py-8 space-y-8">
                  {[
                    {
                      label: "React",
                      value: "56%",
                      width: "56%",
                      gradient: "from-blue-400 to-cyan-300",
                    },
                    {
                      label: "Vue",
                      value: "27%",
                      width: "27%",
                      gradient: "from-emerald-400 to-green-300",
                    },
                    {
                      label: "Angular",
                      value: "17%",
                      width: "17%",
                      gradient: "from-purple-400 to-pink-400",
                    },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-3 text-sm text-zinc-300">
                        <span>{item.label}</span>
                        <span>{item.value}</span>
                      </div>

                      <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          animate={{
                            width: item.width,
                          }}
                          transition={{
                            duration: 1.4,
                          }}
                          className={`h-full rounded-full bg-gradient-to-r ${item.gradient}`}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-5 pt-5">
                    <div
                      className="
                        rounded-3xl
                        border border-white/10
                        bg-white/[0.04]
                        backdrop-blur-xl
                        p-6
                      "
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Responses
                      </p>

                      <h4 className="mt-3 text-4xl font-black">1,248</h4>

                      <div className="mt-3 text-emerald-400 text-sm">
                        +18 live users
                      </div>
                    </div>

                    <div
                      className="
                        rounded-3xl
                        border border-white/10
                        bg-white/[0.04]
                        backdrop-blur-xl
                        p-6
                      "
                    >
                      <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Completion
                      </p>

                      <h4 className="mt-3 text-4xl font-black">94%</h4>

                      <div className="mt-3 text-blue-300 text-sm">
                        Excellent engagement
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}

        <section className="max-w-7xl mx-auto px-6 pb-28">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
              Platform Features
            </p>

            <h3 className="mt-6 text-5xl md:text-6xl font-black tracking-[-0.05em]">
              Designed for modern
              <br />
              realtime engagement.
            </h3>

            <p className="mt-8 text-zinc-400 text-lg leading-relaxed">
              Everything needed to create immersive polling experiences with
              analytics, synchronization, and modern collaboration.
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-7">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                  group relative overflow-hidden
                  rounded-[2rem]
                  border border-white/10
                  bg-white/[0.05]
                  backdrop-blur-2xl
                  p-8
                  transition-all
                "
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_top,rgba(96,165,250,0.12),transparent_55%)]" />

                <div
                  className="
                    relative w-16 h-16 rounded-2xl
                    bg-gradient-to-br from-blue-500 to-purple-500
                    flex items-center justify-center
                    shadow-[0_0_40px_rgba(96,165,250,0.25)]
                  "
                >
                  ✦
                </div>

                <h4 className="mt-8 text-2xl font-bold">{feature.title}</h4>

                <p className="mt-5 text-zinc-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
