<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <!-- Header -->
      <header class="bg-white shadow-sm sticky top-0 z-20 dark:bg-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="flex items-center">
              <span class="text-2xl font-semibold text-[#58A6FF] dark:text-indigo-400">Godwin Collins</span>
            </div>
            <nav class="hidden md:flex space-x-8">
              <button 
                @click="scrollToSection('home')" 
                class="text-gray-700 hover:text-[#58A6FF] cursor-pointer  px-3 py-2 text-sm font-semibold dark:text-gray-300 dark:hover:text-indigo-400"
                :class="{ 'text-indigo-600 font-semibold dark:text-indigo-400': activeSection === 'home' }"
              >
                Home
              </button>
              <button 
                @click="scrollToSection('about')" 
                class="text-gray-700 hover:text-[#58A6FF] cursor-pointer  px-3 py-2 text-sm font-semibold dark:text-gray-300 dark:hover:text-indigo-400"
                :class="{ 'text-indigo-600 font-semibold dark:text-indigo-400': activeSection === 'about' }"
              >
                About
              </button>
              <button 
                @click="scrollToSection('skills')" 
                class="text-gray-700 hover:text-[#58A6FF] cursor-pointer  px-3 py-2 text-sm font-semibold dark:text-gray-300 dark:hover:text-indigo-400"
                :class="{ 'text-indigo-600 font-semibold dark:text-indigo-400': activeSection === 'skills' }"
              >
                Skills
              </button>
              <button 
                @click="scrollToSection('projects')" 
                class="text-gray-700 hover:text-[#58A6FF] cursor-pointer  px-3 py-2 text-sm font-semibold dark:text-gray-300 dark:hover:text-indigo-400"
                :class="{ 'text-indigo-600 font-semibold dark:text-indigo-400': activeSection === 'projects' }"
              >
                Projects
              </button>
              <button 
                @click="scrollToSection('contact')" 
                class="text-gray-700 hover:text-[#58A6FF] cursor-pointer  px-3 py-2 text-sm font-semibold dark:text-gray-300 dark:hover:text-indigo-400"
                :class="{ 'text-indigo-600 font-semibold dark:text-indigo-400': activeSection === 'contact' }"
              >
                Contact
              </button>
            </nav>
            <div class="flex items-center space-x-4">
              <!-- Theme Toggle Button -->
              <button @click="toggleTheme" class="text-gray-500 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m8.485-8.485h-1M4.515 12h-1m15.364 4.95l-.707-.707M6.343 6.343l-.707-.707m12.728 12.728l-.707-.707M6.343 17.657l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.293 14.293A8 8 0 1112 4v1a7 7 0 105 9.293z" />
              </svg>
              </button>
              <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-500 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-lg dark:bg-gray-800">
          <div class="px-2 pt-2 pb-3 space-y-1">
            <button 
              @click="scrollToSection('home')" 
              class="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              :class="{ 'text-indigo-600 bg-gray-50 dark:text-indigo-400 dark:bg-gray-700': activeSection === 'home' }"
            >
              Home
            </button>
            <button 
              @click="scrollToSection('about')" 
              class="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              :class="{ 'text-indigo-600 bg-gray-50 dark:text-indigo-400 dark:bg-gray-700': activeSection === 'about' }"
            >
              About
            </button>
            <button 
              @click="scrollToSection('skills')" 
              class="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              :class="{ 'text-indigo-600 bg-gray-50 dark:text-indigo-400 dark:bg-gray-700': activeSection === 'skills' }"
            >
              Skills
            </button>
            <button 
              @click="scrollToSection('projects')" 
              class="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              :class="{ 'text-indigo-600 bg-gray-50 dark:text-indigo-400 dark:bg-gray-700': activeSection === 'projects' }"
            >
              Projects
            </button>
            <button 
              @click="scrollToSection('contact')" 
              class="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md dark:text-gray-300 dark:hover:text-indigo-400 dark:hover:bg-gray-700"
              :class="{ 'text-indigo-600 bg-gray-50 dark:text-indigo-400 dark:bg-gray-700': activeSection === 'contact' }"
            >
              Contact
            </button>
          </div>
        </div>
      </header>

      <!-- Main Content -->    
      <main class="flex-grow py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <!-- Hero Section -->
          <section id="home" class="relative container mx-auto px-4 min-h-screen flex items-center justify-center py-20 overflow-hidden">
            <!-- Animated background blobs -->
            <div class="absolute -top-40 -right-40 w-96 h-96 bg-[#58A6FF]/20 dark:bg-[#58A6FF]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div class="absolute -bottom-40 -left-40 w-96 h-96 bg-[#F85149]/20 dark:bg-[#F85149]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            
            <div class="relative z-10 container mx-auto px-4">
              <div class="text-center mb-8 space-y-6">
                <div class="animate-fade-in-up">
                  <h1 class="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-[#C9D1D9] sm:text-6xl md:text-7xl lg:text-8xl">
                    <span class="block animate-slide-in-left">Building Digital</span>
                    <span class="block bg-gradient-to-r from-[#58A6FF] to-[#F85149] bg-clip-text text-transparent animate-gradient-text">Experiences</span>
                  </h1>
                  <p class="mt-6 max-w-3xl mx-auto text-xl text-gray-600 dark:text-[#58A6FF]/80 opacity-0 animate-fade-in-up animation-delay-500">
                    Creative UI/UX Designer blending design and strategy to build bold, seamless user experiences across web and mobile.
                  </p>                  
                </div>
                
                <div class="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 opacity-0 animate-fade-in-up animation-delay-700">
                  <button 
                    @click="scrollToSection('contact')" 
                    class="cursor-pointer inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-base sm:text-lg font-semibold rounded-xl shadow-lg transition-all
                           text-white bg-[#58A6FF] hover:bg-[#4090EE] hover:-translate-y-1
                           focus:outline-none focus:ring-4 focus:ring-[#58A6FF]/30 dark:focus:ring-[#58A6FF]/20
                           dark:bg-[#58A6FF]/90 dark:hover:bg-[#58A6FF] w-full sm:w-auto"
                  >
                    <svg class="w-5 sm:w-6 h-5 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    Get in Touch
                  </button>
                  
                  <button 
                    @click="scrollToSection('projects')" 
                    class="cursor-pointer inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 text-base sm:text-lg font-semibold rounded-xl shadow-lg transition-all
                           border-[#58A6FF] text-[#58A6FF] hover:bg-[#58A6FF]/10 hover:-translate-y-1
                           focus:outline-none focus:ring-4 focus:ring-[#58A6FF]/30 dark:border-[#58A6FF]/80 dark:text-[#58A6FF]/80
                           dark:hover:bg-[#58A6FF]/20 dark:hover:text-[#58A6FF] dark:hover:border-[#58A6FF] w-full sm:w-auto"
                  >
                    <svg class="w-5 sm:w-6 h-5 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                    View Work
                  </button>
                </div>
                
              </div>
            </div>
          
            <!-- Scrolling indicator -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <div class="w-8 h-14 rounded-3xl border-2 border-[#58A6FF] flex justify-center p-1">
                <div class="w-2 h-2 bg-[#58A6FF] rounded-full animate-scroll-indicator"></div>
              </div>
            </div>
          </section>
  
          <!-- About Section -->
          <section id="about" class="py-20 bg-white dark:bg-[#0D1117] rounded-3xl shadow-xl dark:shadow-[#161B22]/50 my-16 transition-colors duration-300">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-[#C9D1D9] relative inline-block">
                  <span class="relative z-10">
                    About Me
                    <span class="text-[#58A6FF]">.</span>
                  </span>
                  <div class="absolute bottom-0 left-1/2 w-48 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F85149] transform -translate-x-1/2 translate-y-2 opacity-60"></div>
                </h2>
              </div>
              
              <div class="flex flex-col lg:flex-row items-center gap-12">
                <!-- Profile Image Container -->
                <div class="lg:w-1/3 relative group">
                  <div class="relative rounded-2xl overflow-hidden transform transition-all duration-500 hover:-translate-y-2">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#58A6FF]/20 to-[#F85149]/10 dark:from-[#58A6FF]/10 dark:to-[#F85149]/5 rounded-2xl"></div>
                    <div class="relative aspect-square bg-gray-100 dark:bg-[#161B22] flex items-center justify-center rounded-2xl overflow-hidden">
                      <!-- Replace with actual profile image -->                      
                      <div class="w-full h-full flex items-center justify-center">
                        <img src="/profile.jpg" alt="Profile Image" class="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300">
                      </div>
                    </div>
                    <div class="absolute inset-0 border-2 border-[#58A6FF]/20 dark:border-[#58A6FF]/10 rounded-2xl pointer-events-none"></div>
                  </div>
                </div>
          
                <!-- Content -->
                <div class="lg:w-2/3 space-y-8">
                  <div class="space-y-4">
                    <h3 class="text-2xl font-bold text-gray-900 dark:text-[#C9D1D9] flex items-center gap-3">
                      <svg class="w-7 h-7 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                      </svg>
                      <span>UI/UX & Product Designer</span>
                    </h3>
                    
                    <p class="text-lg leading-relaxed text-gray-800 dark:text-gray-300 opacity-90">
                      I'm a multidisciplinary designer passionate about creating visually compelling and user-friendly digital experiences.
                      With a strong focus on <span class="text-[#58A6FF] font-medium">UI/UX design, product design, and brand identity</span>,
                      I bring ideas to life through clean aesthetics, intuitive interactions, and purposeful design.
                    </p>
                  </div>
          
                  <!-- Skills Tags -->
                  <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 bg-[#58A6FF]/10 text-[#58A6FF] rounded-full text-sm font-medium">Figma</span>
                    <span class="px-4 py-2 bg-[#58A6FF]/10 text-[#58A6FF] rounded-full text-sm font-medium">UI/UX Design</span>
                    <span class="px-4 py-2 bg-[#58A6FF]/10 text-[#58A6FF] rounded-full text-sm font-medium">Design Systems</span>
                    <span class="px-4 py-2 bg-[#58A6FF]/10 text-[#58A6FF] rounded-full text-sm font-medium">User Research</span>
                    <span class="px-4 py-2 bg-[#58A6FF]/10 text-[#58A6FF] rounded-full text-sm font-medium">Prototyping</span>
                    <span class="px-4 py-2 bg-[#58A6FF]/10 text-[#58A6FF] rounded-full text-sm font-medium">Product Strategy</span>

                  </div>
          
                  <!-- Resume Button -->
                  <a href="#" class="inline-flex items-center gap-2 px-6 py-3 bg-[#58A6FF]/10 hover:bg-[#58A6FF]/20 dark:hover:bg-[#58A6FF]/15 text-[#58A6FF] rounded-lg transition-all duration-300 group">
                    <svg class="w-5 h-5 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                    </svg>
                    <span class="font-medium">Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Skills Section -->
          <section id="skills" class="py-20 my-16 rounded-3xl shadow-xl dark:shadow-[#161B22]/50">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-[#C9D1D9] relative inline-block">
                  <span class="relative z-10">
                    Design Expertise
                    <span class="text-[#58A6FF]">.</span>
                  </span>
                  <div class="absolute bottom-0 left-1/2 w-48 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F85149] transform -translate-x-1/2 translate-y-2 opacity-60"></div>
                </h2>
                <p class="mt-4 text-lg text-gray-600 dark:text-[#58A6FF]/80">Crafting visually stunning, user-first digital experiences</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                <!-- UI/UX Design Card -->
                <div class="group relative bg-white dark:bg-[#161B22] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-[#58A6FF]/5 to-[#F85149]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-6 flex items-center gap-3">
                    <svg class="w-6 h-6 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 6h18M3 12h18M3 18h18"/>
                    </svg>
                    UI/UX Design
                  </h3>
                  <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/figma.svg" class="w-5 h-5" alt="Figma">
                      <span>Figma</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/adobe-xd.svg" class="w-5 h-5" alt="Adobe XD">
                      <span>Adobe XD</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/invision.svg" class="w-5 h-5" alt="InVision">
                      <span>InVision</span>
                    </li>
                  </ul>
                </div>

                <!-- Product Design Card -->
                <div class="group relative bg-white dark:bg-[#161B22] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-[#58A6FF]/5 to-[#F85149]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-6 flex items-center gap-3">
                    <svg class="w-6 h-6 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v6l4 2"/>
                    </svg>
                    Product Thinking
                  </h3>
                  <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/notion.svg" class="w-5 h-5" alt="Notion">
                      <span>Wireframes & Prototyping</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/mural.svg" class="w-5 h-5" alt="Mural">
                      <span>Design Sprints</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/miro.svg" class="w-5 h-5" alt="Miro">
                      <span>User Journey Mapping</span>
                    </li>
                  </ul>
                </div>

                <!-- Design Tools Card -->
                <div class="group relative bg-white dark:bg-[#161B22] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-[#58A6FF]/5 to-[#F85149]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <h3 class="text-xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-6 flex items-center gap-3">
                    <svg class="w-6 h-6 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h8m-8 6h16"/>
                    </svg>
                    Visual Design Tools
                  </h3>
                  <ul class="space-y-4">
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/photoshop.svg" class="w-5 h-5" alt="Photoshop">
                      <span>Adobe Photoshop</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/illustrator.svg" class="w-5 h-5" alt="Illustrator">
                      <span>Adobe Illustrator</span>
                    </li>
                    <li class="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <img src="/icons/canva.svg" class="w-5 h-5" alt="Canva">
                      <span>Canva</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- Skill Progress -->
              <div class="space-y-8">
                <div class="group">
                  <div class="flex justify-between mb-3">
                    <span class="text-gray-900 dark:text-[#C9D1D9] font-medium">User Interface Design</span>
                    <span class="text-[#58A6FF] font-medium">95%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-[#161B22] rounded-full h-3">
                    <div class="bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/70 h-3 rounded-full transition-all duration-1000" style="width: 95%"></div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex justify-between mb-3">
                    <span class="text-gray-900 dark:text-[#C9D1D9] font-medium">User Experience Research</span>
                    <span class="text-[#58A6FF] font-medium">88%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-[#161B22] rounded-full h-3">
                    <div class="bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/70 h-3 rounded-full transition-all duration-1000" style="width: 88%"></div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex justify-between mb-3">
                    <span class="text-gray-900 dark:text-[#C9D1D9] font-medium">Product Design Strategy</span>
                    <span class="text-[#58A6FF] font-medium">90%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-[#161B22] rounded-full h-3">
                    <div class="bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/70 h-3 rounded-full transition-all duration-1000" style="width: 90%"></div>
                  </div>
                </div>

                <div class="group">
                  <div class="flex justify-between mb-3">
                    <span class="text-gray-900 dark:text-[#C9D1D9] font-medium">Prototyping & Wireframing</span>
                    <span class="text-[#58A6FF] font-medium">85%</span>
                  </div>
                  <div class="w-full bg-gray-200 dark:bg-[#161B22] rounded-full h-3">
                    <div class="bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/70 h-3 rounded-full transition-all duration-1000" style="width: 85%"></div>
                  </div>
              </div>
              </div>
            </div>
          </section>

          <!-- Experience Section -->
          <section id="experience" class="py-16 bg-white dark:bg-[#0D1117] rounded-xl shadow-lg dark:shadow-[#161B22]/50 my-16 transition-colors duration-300">
            <div class="max-w-4xl mx-auto px-6">
              <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-[#C9D1D9]">
                  Experience
                  <span class="text-[#58A6FF]">.</span>                  
                </h2>
                <p class="font-semibold mt-4 text-gray-500 dark:text-[#58A6FF]">My professional journey</p>
              </div>
              
              <div class="relative border-l-2 border-[#58A6FF]/20 dark:border-[#58A6FF]/30 pl-8 ml-4 space-y-12">
          
                <!-- Experience Item 1 -->
                <div class="relative group">
                  <div class="absolute -left-[34px] mt-1.5 h-6 w-6 rounded-full border-2 border-[#58A6FF]/30 bg-white dark:bg-[#161B22] flex items-center justify-center transition-colors duration-300">
                    <div class="h-3 w-3 rounded-full bg-[#58A6FF] animate-pulse"></div>
                  </div>
                  <div class="p-6 rounded-xl bg-gray-50/50 dark:bg-[#161B22] hover:bg-gray-100/50 dark:hover:bg-[#161B22]/90 transition-all duration-300 group-hover:-translate-x-2">
                    <div class="flex gap-2 items-center mb-2">
                      <svg class="w-5 h-5 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7h4l3.5 8H17l3-6H9"/>
                      </svg>
                      <h3 class="text-xl font-bold text-gray-800 dark:text-[#C9D1D9]">Senior Product Designer</h3>
                    </div>
                    <div class="flex flex-wrap gap-3 items-center mb-3">
                      <span class="text-sm font-medium text-[#58A6FF] bg-[#58A6FF]/10 px-3 py-1 rounded-full">Inspire Creative Studio</span>
                      <span class="text-sm text-gray-500 dark:text-[#58A6FF]/70">2022 - Present</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Lead end-to-end product design processes for web and mobile applications. Collaborated with cross-functional teams to design intuitive interfaces, conducted usability testing, and delivered high-fidelity prototypes that enhanced user engagement and retention.
                    </p>
                  </div>
                </div>
          
                <!-- Experience Item 2 -->
                <div class="relative group">
                  <div class="absolute -left-[34px] mt-1.5 h-6 w-6 rounded-full border-2 border-[#58A6FF]/30 bg-white dark:bg-[#161B22] flex items-center justify-center transition-colors duration-300">
                    <div class="h-3 w-3 rounded-full bg-[#58A6FF] animate-pulse"></div>
                  </div>
                  <div class="p-6 rounded-xl bg-gray-50/50 dark:bg-[#161B22] hover:bg-gray-100/50 dark:hover:bg-[#161B22]/90 transition-all duration-300 group-hover:-translate-x-2">
                    <div class="flex gap-2 items-center mb-2">
                      <svg class="w-5 h-5 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h4l2 4h6a1 1 0 011 1v11a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/>
                      </svg>
                      <h3 class="text-xl font-bold text-gray-800 dark:text-[#C9D1D9]">UI/UX Designer</h3>
                    </div>
                    <div class="flex flex-wrap gap-3 items-center mb-3">
                      <span class="text-sm font-medium text-[#58A6FF] bg-[#58A6FF]/10 px-3 py-1 rounded-full">Visionary Tech Ltd.</span>
                      <span class="text-sm text-gray-500 dark:text-[#58A6FF]/70">2020 - 2022</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Designed user-centric digital interfaces, conducted UX research, wireframing, and prototyping. Delivered pixel-perfect UI kits and collaborated closely with developers to ensure design consistency across platforms.
                    </p>
                  </div>
                </div>
          
                <!-- Experience Item 3 -->
                <div class="relative group">
                  <div class="absolute -left-[34px] mt-1.5 h-6 w-6 rounded-full border-2 border-[#58A6FF]/30 bg-white dark:bg-[#161B22] flex items-center justify-center transition-colors duration-300">
                    <div class="h-3 w-3 rounded-full bg-[#58A6FF] animate-pulse"></div>
                  </div>
                  <div class="p-6 rounded-xl bg-gray-50/50 dark:bg-[#161B22] hover:bg-gray-100/50 dark:hover:bg-[#161B22]/90 transition-all duration-300 group-hover:-translate-x-2">
                    <div class="flex gap-2 items-center mb-2">
                      <svg class="w-5 h-5 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                      <h3 class="text-xl font-bold text-gray-800 dark:text-[#C9D1D9]">Graphic Designer</h3>
                    </div>
                    <div class="flex flex-wrap gap-3 items-center mb-3">
                      <span class="text-sm font-medium text-[#58A6FF] bg-[#58A6FF]/10 px-3 py-1 rounded-full">BrandSpark Agency</span>
                      <span class="text-sm text-gray-500 dark:text-[#58A6FF]/70">2018 - 2020</span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Created brand identities, marketing collateral, and visual assets for clients across various industries. Worked on logos, posters, social media creatives, and packaging design with a strong focus on visual storytelling and brand consistency.
                    </p>
                  </div>
                </div>
          
              </div>
            </div>
          </section>
          
  
          <!-- Projects Section -->
          <section id="projects" class="py-20 my-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-[#C9D1D9] relative inline-block">
                  <span class="relative z-10">
                    Featured Work
                    <span class="text-[#58A6FF]">.</span>
                  </span>
                  <div class="absolute bottom-0 left-1/2 w-48 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F85149] transform -translate-x-1/2 translate-y-2 opacity-60"></div>
                </h2>
                <p class="mt-4 text-lg text-gray-600 dark:text-[#58A6FF]/80">Explore my recent development projects</p>
              </div>
          
              <!-- Loading State -->
              <div v-if="loading" class="flex justify-center py-12">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#58A6FF]"></div>
              </div>
          
              <!-- Error State -->
              <div v-else-if="error" class="bg-[#F85149]/10 text-[#F85149] p-4 rounded-xl text-center border border-[#F85149]/20">
                {{ error }}
              </div>
          
              <!-- Projects Grid -->
              <div v-else class="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div
                  v-for="project in projects"
                  :key="project._id"
                  class="group relative bg-white dark:bg-[#161B22] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
                >
                  <!-- Image Container -->
                  <div class="relative overflow-hidden">
                    <img
                      :src="project.imageUrl"
                      alt="Project Image"
                      class="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div class="absolute inset-0 bg-gradient-to-t from-[#0D1117]/60 to-transparent"></div>
                    <div v-if="project.category?.name" class="absolute top-4 right-4">
                      <span class="bg-[#58A6FF] text-white px-3 py-1 text-xs font-medium rounded-full shadow-md">
                        {{ project.category.name }}
                      </span>
                    </div>
                  </div>
          
                  <!-- Content -->
                  <div class="p-6 flex-grow">
                    <h3 class="text-xl font-bold text-gray-900 dark:text-[#C9D1D9] mb-3">{{ project.title }}</h3>
                    <p class="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {{ truncate(project.description, 150) }}
                    </p>
                  </div>
          
                  <!-- Actions -->
                  <div class="px-6 pb-6 pt-2 flex flex-wrap gap-3">
                    <a
                      v-if="project.liveUrl"
                      :href="project.liveUrl"
                      target="_blank"
                      class="inline-flex items-center text-sm bg-[#58A6FF]/10 hover:bg-[#58A6FF]/20 text-[#58A6FF] px-4 py-2 rounded-lg transition-colors"
                    >
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                      </svg>
                      Live Demo
                    </a>
          
                    <a
                      v-if="project.githubUrl"
                      :href="project.githubUrl"
                      target="_blank"
                      class="inline-flex items-center text-sm bg-gray-100 hover:bg-gray-200 dark:bg-[#0D1117] dark:hover:bg-[#58A6FF]/10 text-gray-700 dark:text-[#C9D1D9] px-4 py-2 rounded-lg transition-colors"
                    >
                      <!-- <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg> -->
                      Other Link
                    </a>
          
                    <router-link
                      :to="`/project/${project._id}`"
                      class="inline-flex items-center text-sm text-[#58A6FF] hover:text-[#58A6FF]/80 transition-colors"
                    >
                      Details
                      <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </section>
  
          <!-- Contact Section -->
          <section id="contact" class="py-20 my-16 bg-white dark:bg-[#0D1117] rounded-3xl shadow-xl dark:shadow-[#161B22]/50 transition-colors duration-300">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="text-center mb-16">
                <h2 class="text-4xl font-bold text-gray-900 dark:text-[#C9D1D9] relative inline-block">
                  <span class="relative z-10">
                    Let's Connect
                    <span class="text-[#58A6FF]">.</span>
                  </span>
                  <div class="absolute bottom-0 left-1/2 w-48 h-1 bg-gradient-to-r from-[#58A6FF] to-[#F85149] transform -translate-x-1/2 translate-y-2 opacity-60"></div>
                </h2>
                <p class="mt-4 text-lg text-gray-600 dark:text-[#58A6FF]/80">Have a project in mind? Let's create something amazing!</p>
              </div>
          
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Info -->
                <div class="space-y-8">
                  <div class="space-y-6">
                    <div class="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-[#161B22] hover:bg-gray-100/50 dark:hover:bg-[#161B22]/90 transition-colors">
                      <div class="flex-shrink-0 w-12 h-12 bg-[#58A6FF]/10 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                        </svg>
                      </div>
                      <div class="ml-6">
                        <p class="text-sm font-medium text-gray-900 dark:text-[#C9D1D9]">Email</p>
                        <p class="text-sm text-[#58A6FF]">your.email@example.com</p>
                      </div>
                    </div>
          
                    <div class="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-[#161B22] hover:bg-gray-100/50 dark:hover:bg-[#161B22]/90 transition-colors">
                      <div class="flex-shrink-0 w-12 h-12 bg-[#58A6FF]/10 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div class="ml-6">
                        <p class="text-sm font-medium text-gray-900 dark:text-[#C9D1D9]">Phone</p>
                        <p class="text-sm text-[#58A6FF]">+1 (123) 456-7890</p>
                      </div>
                    </div>
          
                    <div class="flex items-center p-4 rounded-xl bg-gray-50 dark:bg-[#161B22] hover:bg-gray-100/50 dark:hover:bg-[#161B22]/90 transition-colors">
                      <div class="flex-shrink-0 w-12 h-12 bg-[#58A6FF]/10 rounded-lg flex items-center justify-center">
                        <svg class="w-6 h-6 text-[#58A6FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div class="ml-6">
                        <p class="text-sm font-medium text-gray-900 dark:text-[#C9D1D9]">Location</p>
                        <p class="text-sm text-[#58A6FF]">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
          
                  <div class="mt-8">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-[#C9D1D9] mb-6">Follow My Journey</h3>
                    <div class="flex gap-6">
                      <a href="#" class="text-gray-400 hover:text-[#58A6FF] transition-colors hover:-translate-y-1">
                        <span class="sr-only">Twitter</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                        </svg>
                      </a>
                      <a href="#" class="text-gray-400 hover:text-[#58A6FF] transition-colors hover:-translate-y-1">
                        <span class="sr-only">LinkedIn</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a href="#" class="text-gray-400 hover:text-[#58A6FF] transition-colors hover:-translate-y-1">
                        <span class="sr-only">GitHub</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
          
                <!-- Contact Form -->
                <div class="space-y-8">
                  <!-- Notifications -->
                  <div v-if="success" class="p-4 text-green-800 bg-green-100 rounded-lg">
                    {{ success }}
                  </div>
                  <div v-else-if="submitError" class="p-4 text-red-800 bg-red-100 rounded-lg">
                    {{ submitError }}
                  </div>

                  <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div>
                      <label for="name" class="block text-sm font-medium text-gray-900 dark:text-[#C9D1D9] mb-2">Full Name</label>
                      <input
                        v-model="form.name"
                        type="text" id="name" name="name"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#161B22] dark:text-[#C9D1D9]
                              focus:ring-2 focus:ring-[#58A6FF]/30 focus:border-[#58A6FF] bg-white dark:bg-[#161B22] transition-all"
                        placeholder="John Doe" required
                      />
                    </div>

                    <div>
                      <label for="email" class="block text-sm font-medium text-gray-900 dark:text-[#C9D1D9] mb-2">Email Address</label>
                      <input
                        v-model="form.email"
                        type="email" id="email" name="email"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#161B22] dark:text-[#C9D1D9]
                              focus:ring-2 focus:ring-[#58A6FF]/30 focus:border-[#58A6FF] bg-white dark:bg-[#161B22] transition-all"
                        placeholder="john@example.com" required
                      />
                    </div>

                    <div>
                      <label for="subject" class="block text-sm font-medium text-gray-900 dark:text-[#C9D1D9] mb-2">Subject</label>
                      <input
                        v-model="form.subject"
                        type="text" id="subject" name="subject"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#161B22] dark:text-[#C9D1D9]
                              focus:ring-2 focus:ring-[#58A6FF]/30 focus:border-[#58A6FF] bg-white dark:bg-[#161B22] transition-all"
                        placeholder="How can I help you?" required
                      />
                    </div>

                    <div>
                      <label for="message" class="block text-sm font-medium text-gray-900 dark:text-[#C9D1D9] mb-2">Your Message</label>
                      <textarea
                        v-model="form.message"
                        id="message" name="message" rows="5"
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-[#161B22] dark:text-[#C9D1D9]
                              focus:ring-2 focus:ring-[#58A6FF]/30 focus:border-[#58A6FF] bg-white dark:bg-[#161B22] transition-all"
                        placeholder="Let's build something amazing..." required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      :disabled="submitting"
                      class="w-full px-6 py-3 bg-gradient-to-r from-[#58A6FF] to-[#58A6FF]/90 text-white font-medium rounded-lg
                            hover:from-[#4090EE] hover:to-[#4090EE]/90 transition-all transform hover:-translate-y-0.5 shadow-lg
                            hover:shadow-[#58A6FF]/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span v-if="!submitting">Send Message</span>
                      <span v-else>Sending…</span>
                      <svg class="w-4 h-4 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                      </svg>
                    </button>
                  </form>
                </div>

              </div>
            </div>
          </section>        
    
      </main>

      <footer class="bg-[#0D1117] border-t border-[#161B22]">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="xl:grid xl:grid-cols-3 xl:gap-8">
            <!-- Branding Section -->
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-[#C9D1D9]">Godwin Collins</h3>
              <p class="text-sm text-[#58A6FF]">
                Crafted with 
                <span class="animate-pulse">❤️</span> 
                using Vue.js & Tailwind CSS
              </p>
            </div>
      
            <!-- Links Grid -->
            <div class="grid grid-cols-2 gap-8 mt-12 xl:mt-0 xl:col-span-2">
              <div class="md:grid md:grid-cols-2 md:gap-8">
                <!-- Connect Column -->
                <div>
                  <h4 class="text-sm font-semibold tracking-wider text-[#58A6FF] uppercase">Connect</h4>
                  <ul class="mt-4 space-y-3">
                    <li>
                      <a href="https://www.linkedin.com/in/godwin-collins-b7ab02158/" target="_blank" class="flex items-center text-sm text-[#C9D1D9] hover:text-[#58A6FF] transition-colors group">                       
                        <svg class="w-5 h-5 mr-2 text-[#58A6FF] opacity-80 group-hover:opacity-100"  viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1"></rect> <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"></path> <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"></path> <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"></path> </g></svg>
                        LinkedIn
                      </a>
                    </li>
                    <!-- <li>
                      <a href="#" class="flex items-center text-sm text-[#C9D1D9] hover:text-[#58A6FF] transition-colors group">
                        <svg class="w-5 h-5 mr-2 text-[#58A6FF] opacity-80 group-hover:opacity-100" fill="currentColor" viewBox="0 0 24 24">
                          <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                        </svg>
                        X
                      </a>
                    </li> -->
                  </ul>
                </div>
      
                <!-- Resources Column -->
                <div class="mt-12 md:mt-0">
                  <h4 class="text-sm font-semibold tracking-wider text-[#58A6FF] uppercase">Resources</h4>
                  <ul class="mt-4 space-y-3">
                    <li>
                      <a href="#" class="text-sm text-[#C9D1D9] hover:text-[#58A6FF] transition-colors">
                        Resume
                      </a>
                    </li>
                    <li>
                      <a href="#about" class="text-sm text-[#C9D1D9] hover:text-[#58A6FF] transition-colors">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#contact" class="text-sm text-[#C9D1D9] hover:text-[#58A6FF] transition-colors">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      
          <!-- Bottom Section -->
          <div class="mt-16 border-t border-[#161B22] pt-8">
            <div class="md:flex md:items-center md:justify-between">
              <p class="text-sm text-[#8B949E]">
                &copy; {{ new Date().getFullYear() }} Godwin Collins. All rights reserved.
              </p>
              <div class="flex space-x-6 mt-4 md:mt-0">
                <!-- <a href="#" class="text-[#8B949E] hover:text-[#58A6FF] transition-colors hover:-translate-y-1">
                  <span class="sr-only">GitHub</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                  </svg>
                </a> -->
                <a href="https://www.linkedin.com/in/godwin-collins-b7ab02158/" target="_blank" class="text-[#8B949E] hover:text-[#58A6FF] transition-colors hover:-translate-y-1">
                  <span class="sr-only">LinkedIn</span>
                  <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

// Reactive data
const submitting = ref(false)
const success = ref('')
const submitError = ref('')
const projects = ref([])
const loading = ref(true)
const error = ref(null)
const mobileMenuOpen = ref(false)
const activeSection = ref('home')
const theme = ref(localStorage.getItem('theme') || 'light')

const handleSubmit = async () => {
  success.value = ''
  submitError.value = ''
  submitting.value = true

  try {
    await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
      { ...form }
    )
    success.value = "Thanks! Your message has been sent."
    // reset form
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  } catch (err) {
    submitError.value = err.response?.data?.message || 'Failed to send message.'
  } finally {
    submitting.value = false
  }
}

// Theme toggle function
const toggleTheme = () => {
  const newTheme = theme.value === 'light' ? 'dark' : 'light'
  theme.value = newTheme
  localStorage.setItem('theme', newTheme)
  
  // Force update the class - this is what was missing
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

// Fetch projects from API
const fetchProjects = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/projects`)
    projects.value = res.data.projects || []  
  } catch (err) {
    error.value = err.response?.data?.message || 'Failed to fetch projects'
  } finally {
    loading.value = false
  }
}

// Helper functions
const truncate = (text, max) => {
  if (!text) return ''
  return text.length > max ? text.slice(0, max) + '...' : text
}

// Scroll to section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
    activeSection.value = sectionId
    mobileMenuOpen.value = false
  }
}

// Update active section based on scroll position
const handleScroll = () => {
  const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
  
  for (const section of sections) {
    const element = document.getElementById(section)
    if (!element) continue
    
    const rect = element.getBoundingClientRect()
    const offset = 200 // Give some buffer for the active state
    
    if (rect.top <= offset && rect.bottom >= offset) {
      activeSection.value = section
      break
    }
  }
}

// Lifecycle hooks
onMounted(() => {
  fetchProjects()
  window.addEventListener('scroll', handleScroll)
   // Set initial theme
   if (theme.value === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  console.log('Current HTML class:', document.documentElement.className)
  console.log('Saved theme:', localStorage.getItem('theme'))
})

// Cleanup event listener on component unmount
const onUnmounted = () => {
  window.removeEventListener('scroll', handleScroll)
}
</script>


<style>
/* Keyframes */
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}

@keyframes gradient-text {
  from { opacity: 0; background-position: -200% 0; }
  to { opacity: 1; background-position: 200% 0; }
}

@keyframes scroll-indicator {
  0% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(20px); opacity: 0; }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slide-in-left {
  from { opacity: 0; transform: translateX(-20px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Animation Classes */
@layer utilities {
  .animate-blob {
    animation: blob 7s infinite;
  }

  .animate-gradient-text {
    animation: gradient-text 1.5s ease-out forwards;
    background-size: 200% auto;
  }

  .animate-scroll-indicator {
    animation: scroll-indicator 2s infinite;
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .animate-slide-in-left {
    animation: slide-in-left 0.8s ease-out forwards;
  }

  .animate-bounce {
    animation: bounce 2s infinite;
  }
}
</style>