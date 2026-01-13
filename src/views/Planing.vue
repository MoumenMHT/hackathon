<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white via-green-50/30 to-white">
    <!-- Hero Section -->
    <section class="container mx-auto px-4 pt-24 pb-16 text-center">
      <!-- Pill Badge -->
      <div class="mb-8 inline-flex items-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30">
        <span class="mr-2.5 h-2 w-2 animate-pulse rounded-full bg-white"></span>
        48 Hours of Innovation
      </div>

      <!-- Main Heading -->
      <h1 class="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-7xl">
        <span class="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">48 Hours</span>
        <span class="text-gray-900"> Journey</span>
      </h1>

      <!-- Subtitle -->
      <p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600">
        Discover the key moments of the EcoHack weekend. From ideation to final pitch,
        every hour counts in this sustainable innovation marathon.
      </p>

      <!-- Date Range -->
      <div class="mb-10 flex items-center justify-center gap-4">
        <div class="flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-md ring-1 ring-gray-100">
          <svg class="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="text-lg font-semibold text-gray-800">28-29 Jan</span>
        </div>
        <svg class="h-6 w-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        <div class="flex items-center gap-2 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-3 text-white shadow-lg shadow-green-500/25">
          <span class="text-3xl font-bold">48</span>
          <span class="text-xs font-medium uppercase tracking-wider opacity-90">Hours</span>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="mb-10 flex flex-col items-center">
        <div class="mb-3 flex h-14 w-8 items-start justify-center rounded-full border-2 border-green-300 bg-white p-2 shadow-sm">
          <div class="h-3 w-1.5 animate-bounce rounded-full bg-gradient-to-b from-green-400 to-green-600"></div>
        </div>
        <span class="text-sm font-medium text-gray-500">Scroll to explore</span>
      </div>

      <!-- Time Management Label -->
      <div class="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-green-600 ring-1 ring-green-100">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="Clock icon">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="font-semibold">Time Management</span>
      </div>
    </section>

    <!-- Timeline Section - SINGLE UNIFIED CONTAINER -->
    <section class="container mx-auto px-4 py-12">
      <div class="relative" ref="timelineContainer">
        <!-- Vertical Line Connector (Mobile) -->
        <div class="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-green-200 md:hidden"></div>

        <!-- SINGLE SVG Serpentine Path (Desktop) - ONE PATH FOR ENTIRE TIMELINE -->
        <svg 
          class="pointer-events-none absolute left-0 top-0 hidden h-full w-full md:block" 
          :viewBox="`0 0 ${containerWidth} ${containerHeight}`"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#22c55e" />
              <stop offset="50%" stop-color="#16a34a" />
              <stop offset="100%" stop-color="#059669" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path
            :d="unifiedPath"
            fill="none"
            stroke="url(#pathGradient)"
            stroke-width="6"
            stroke-linecap="round"
            stroke-linejoin="round"
            filter="url(#glow)"
            opacity="0.9"
          />
        </svg>

        <!-- Start Circle -->
        <div 
          class="absolute left-0 z-10 hidden h-5 w-5 rounded-full border-4 border-green-500 bg-white shadow-lg shadow-green-500/50 md:block" 
          :style="{ top: `${rowPositions.row1}px`, transform: 'translate(-50%, -50%)' }"
        >
          <div class="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-20"></div>
        </div>

        <!-- DAY 1 LABEL -->
        <div class="mb-8 flex items-center gap-4">
          <h2 class="text-3xl font-extrabold text-gray-900">Day <span class="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">01</span></h2>
          <div class="h-0.5 flex-1 rounded-full bg-gradient-to-r from-green-300 to-transparent"></div>
          <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Wednesday</span>
        </div>

        <!-- Row 1: Day 1 - Left to Right -->
        <div class="relative py-4" ref="row1">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-5">
            <!-- Check-in -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-2xl border border-gray-100 bg-white p-4 shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/10">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-sm">09:00</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-semibold text-gray-800">Check-in</h4>
                </div>
              </div>
            </div>

            <!-- Opening Ceremony -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">09:30</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Opening Ceremony</h4>
                </div>
              </div>
            </div>

            <!-- Coffee Break -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">10:00</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Coffee Break & Networking</h4>
                </div>
              </div>
            </div>

            <!-- Conference -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">10:30</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Conference</h4>
                </div>
              </div>
            </div>

            <!-- Hacking Start -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">11:00</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Hacking Session</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 2: Day 1 - Right to Left -->
        <div class="relative py-4" ref="row2">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-5">
            <!-- End-of-Day Sprint -->
            <div class="relative flex flex-col items-center md:order-1">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">16:00</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">End-of-Day Sprint</h4>
                </div>
              </div>
            </div>

            <!-- Afternoon Coffee Break -->
            <div class="relative flex flex-col items-center md:order-2">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">15:45</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Afternoon Coffee Break</h4>
                </div>
              </div>
            </div>

            <!-- Hacking Session -->
            <div class="relative flex flex-col items-center md:order-3">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">14:15</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Hacking Session</h4>
                </div>
              </div>
            </div>

            <!-- Hacking session -->
            <div class="relative flex flex-col items-center md:order-4">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">13:30</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Hacking session</h4>
                </div>
              </div>
            </div>

            <!-- Lunch Time -->
            <div class="relative flex flex-col items-center md:order-5">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">12:30</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Lunch Time</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- DAY 2 LABEL (visual only - does not break the path) -->
        <div class="mb-8 mt-12 flex items-center gap-4">
          <h2 class="text-3xl font-extrabold text-gray-900">Day <span class="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">02</span></h2>
          <div class="h-0.5 flex-1 rounded-full bg-gradient-to-r from-green-300 to-transparent"></div>
          <span class="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Thursday</span>
        </div>

        <!-- Row 3: Day 2 - Left to Right -->
        <div class="relative py-4" ref="row3">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-5">
            <!-- Final Hacking Block -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">09:00</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Final Hacking Block + coffe / tea</h4>
                </div>
              </div>
            </div>

            <!-- The Pressure Release Break -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">10:30</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">The "Pressure Release" Break</h4>
                </div>
              </div>
            </div>

            <!-- Mini-Conference: Pitch Perfect -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">10:45</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Mini-Conference: "Pitch Perfect"</h4>
                </div>
              </div>
            </div>

            <!-- Pitch Prep & Feature Freeze -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">11:10</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Pitch Prep & Feature Freeze</h4>
                </div>
              </div>
            </div>

            <!-- Lunch Break & Tech Check -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">12:00</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Lunch Break & Tech Check</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 4: Day 2 Final Events - Right to Left -->
        <div class="relative py-4" ref="row4">
          <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
            <!-- 🏆 Awards Ceremony - Highlighted -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[280px] rounded-xl border-2 border-yellow-400 bg-gradient-to-br from-yellow-50 to-white p-5 shadow-md">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-white">16:00</div>
                <div class="mt-3 flex items-start gap-4">
                  <div class="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                    <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <div class="text-left">
                    <h4 class="font-semibold text-gray-800">🏆 Awards Ceremony</h4>
                    <p class="mt-1 text-xs text-gray-500">Celebration of achievements, awards presentation, and closing remarks.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Deliberation & Networking -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">15:15</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Deliberation & Networking</h4>
                </div>
              </div>
            </div>

            <!-- 🚀 The Grand Finale (Pitches) -->
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">13:00</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">🚀 The Grand Finale (Pitches)</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 5: Final Photo & Close -->
        <div class="relative py-4" ref="row5">
          <!-- Mobile: centered -->
          <div class="flex justify-center md:hidden">
            <div class="relative flex flex-col items-center">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">16:45</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Photo & Close</h4>
                </div>
              </div>
            </div>
          </div>
          <!-- Desktop: positioned on path endpoint -->
          <div class="hidden md:block" :style="{ paddingLeft: `${finalCardX - 70}px` }">
            <div class="relative flex flex-col items-center w-[140px]">
              <div class="relative w-full max-w-[140px] rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white">16:45</div>
                <div class="mt-3 flex flex-col items-center text-center">
                  <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h4 class="text-sm font-medium text-gray-800">Photo & Close</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EcoHack in Numbers Section -->
    <section class="container mx-auto px-4 py-20">
      <div class="text-center">
        <span class="mb-4 inline-block rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">Key Statistics</span>
        <h2 class="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl">EcoHack in <span class="bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">Numbers</span></h2>
        <p class="mx-auto mb-12 max-w-lg text-gray-600">Experience the scale and impact of our sustainable innovation marathon</p>
      </div>

      <div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
        <!-- 30 Hours of Innovation -->
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-center text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/30" role="article" aria-label="30 Hours of Innovation">
          <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10"></div>
          <div class="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-white/5"></div>
          <div class="relative">
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="text-5xl font-extrabold">30</div>
            <div class="mt-2 text-lg font-semibold opacity-90">Hours of Innovation</div>
          </div>
        </div>

        <!-- 6 Shared Meals -->
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-center text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/30" role="article" aria-label="6 Shared Meals">
          <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10"></div>
          <div class="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-white/5"></div>
          <div class="relative">
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div class="text-5xl font-extrabold">6</div>
            <div class="mt-2 text-lg font-semibold opacity-90">Shared Meals</div>
          </div>
        </div>

        <!-- 3 Winning Teams -->
        <div class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-8 text-center text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/30" role="article" aria-label="3 Winning Teams">
          <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-white/10"></div>
          <div class="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-white/5"></div>
          <div class="relative">
            <div class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
              <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div class="text-5xl font-extrabold">3</div>
            <div class="mt-2 text-lg font-semibold opacity-90">Winning Teams</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, reactive } from 'vue'

// Single unified container ref
const timelineContainer = ref(null)

// Row refs - numbered sequentially across both days
const row1 = ref(null) // Day 1, Row 1
const row2 = ref(null) // Day 1, Row 2
const row3 = ref(null) // Day 2, Row 1
const row4 = ref(null) // Day 2, Row 2
const row5 = ref(null) // Day 2, Row 3 (final)

// Container dimensions
const containerWidth = ref(1000)
const containerHeight = ref(1000)

// Row center Y positions (relative to container)
const rowPositions = reactive({
  row1: 60,
  row2: 200,
  row3: 400,
  row4: 550,
  row5: 700
})

// Curve radius
const turnRadius = 30

// Final card X position - shared between path and card positioning
const finalCardX = ref(140)

// How far the path extends past the final card
const pathOvershoot = 40

const updateDimensions = () => {
  nextTick(() => {
    if (timelineContainer.value) {
      containerWidth.value = timelineContainer.value.offsetWidth
      containerHeight.value = timelineContainer.value.offsetHeight
    }
    if (row1.value) {
      rowPositions.row1 = row1.value.offsetTop + row1.value.offsetHeight / 2
    }
    if (row2.value) {
      rowPositions.row2 = row2.value.offsetTop + row2.value.offsetHeight / 2
    }
    if (row3.value) {
      rowPositions.row3 = row3.value.offsetTop + row3.value.offsetHeight / 2
    }
    if (row4.value) {
      rowPositions.row4 = row4.value.offsetTop + row4.value.offsetHeight / 2
    }
    if (row5.value) {
      rowPositions.row5 = row5.value.offsetTop + row5.value.offsetHeight / 2
    }
  })
}

onMounted(() => {
  updateDimensions()
  window.addEventListener('resize', updateDimensions)
  setTimeout(updateDimensions, 100)
  setTimeout(updateDimensions, 500)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateDimensions)
})

/**
 * UNIFIED PATH - Single continuous serpentine across both days
 * 
 * Structure:
 * - Row 1 (Day 1): Left → Right
 * - Turn 1: Right edge curve down
 * - Row 2 (Day 1): Right → Left  
 * - Turn 2: Left edge curve down (connects Day 1 to Day 2)
 * - Row 3 (Day 2): Left → Right
 * - Turn 3: Right edge curve down
 * - Row 4 (Day 2): Right → Left
 * - Turn 4: Left edge curve down
 * - Row 5 (Day 2): Short segment to final event
 * 
 * ONLY ONE M COMMAND - mathematically continuous path
 */
const unifiedPath = computed(() => {
  const w = containerWidth.value
  const r = turnRadius
  const endX = finalCardX.value + pathOvershoot // Path extends past the card

  // Row Y positions
  const y1 = rowPositions.row1
  const y2 = rowPositions.row2
  const y3 = rowPositions.row3
  const y4 = rowPositions.row4
  const y5 = rowPositions.row5

  // Midpoints for smooth Bézier curves
  const mid12 = (y1 + y2) / 2
  const mid23 = (y2 + y3) / 2
  const mid34 = (y3 + y4) / 2
  const mid45 = (y4 + y5) / 2

  // Single continuous path with ONE M command
  return `
    M 0 ${y1}
    L ${w - r} ${y1}
    C ${w} ${y1}, ${w} ${mid12}, ${w} ${mid12}
    C ${w} ${mid12}, ${w} ${y2}, ${w - r} ${y2}
    L ${r} ${y2}
    C 0 ${y2}, 0 ${mid23}, 0 ${mid23}
    C 0 ${mid23}, 0 ${y3}, ${r} ${y3}
    L ${w - r} ${y3}
    C ${w} ${y3}, ${w} ${mid34}, ${w} ${mid34}
    C ${w} ${mid34}, ${w} ${y4}, ${w - r} ${y4}
    L ${r} ${y4}
    C 0 ${y4}, 0 ${mid45}, 0 ${mid45}
    C 0 ${mid45}, 0 ${y5}, ${r} ${y5}
    L ${endX} ${y5}
  `.replace(/\s+/g, ' ').trim()
})
</script>
