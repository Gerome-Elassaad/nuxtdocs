---
seo:
  title: Docs
  description: Create full-stack web applications using natural language. No coding expertise required. Deploy instantly with custom domains using CodinIT.dev.
---

::u-page-hero
#title
Build Apps Fast with AI-Powered Development

#description
Create full-stack web applications using natural language. No coding expertise required.

Turn your ideas into deployed applications from one browser tab.

#links
  :::u-button
  ---
  color: neutral
  size: xl
  to: /getting-started
  trailing-icon: i-lucide-arrow-right
  ---
  Get started
  :::

  :::u-button
  ---
  color: neutral
  icon: simple-icons-github
  size: xl
  to: https://github.com/Gerome-Elassaad/docs
  variant: outline
  ---
  Star on GitHub
  :::

#headline
  :::u-button
  ---
  size: sm
  to: https://codinit.dev
  variant: outline
  ---
  Try CodinIT.dev Free Today →
  :::
::

::u-page-section
  :::u-page-grid
    ::::u-page-card
    ---
    spotlight: true
    class: group col-span-2 lg:col-span-1
    target: _blank
    to: https://codinit.dev
    ---
      :::::floating-nuxt
      :::::
    
    #title
    Powered by [AI Technology]{.text-primary}
    
    #description
    Build complete applications using natural language descriptions. Our AI handles the coding, deployment, and infrastructure so you can focus on your vision.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    to: https://codinit.dev/#pricing
    ---
      :::::u-color-mode-image
      ---
      height: 627
      width: 955
      alt: Beautiful applications built with AI
      class: w-full h-80 object-cover rounded-lg
      dark: /landing/dark/templates-ui-pro.webp
      light: /landing/light/templates-ui-pro.webp
      ---
      :::::
    
    #title
    Professional [App Templates]{.text-primary}
    
    #description
    Start with beautifully designed templates or create from scratch. Every application includes authentication, databases, and deployment configuration out of the box.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::tabs
        ::::::tabs-item{.mt-5 icon="i-lucide-eye" label="Preview"}
          :::::::div{.flex.flex-col.gap-4}
            ::::::::note{.my-0}
            Your app is ready for deployment with custom domains.
            ::::::::
          
            ::::::::tip{.my-0}
            Connect to GitHub for version control and collaboration.
            ::::::::
          
            ::::::::warning{.my-0}
            Database changes in production require careful planning.
            ::::::::
          
            ::::::::caution{.my-0}
            API keys should be stored securely in environment variables.
            ::::::::
          :::::::
        ::::::
      
        ::::::tabs-item
        ---
        class: mt-5 mb-2 text-xs overflow-x-auto
        icon: i-lucide-code
        label: Prompt
        ---
        ```text
        Create a dashboard app with user authentication, 
        monthly sales chart, and customer management. 
        Include a dark mode toggle and mobile responsive design.
        ```
        ::::::
      :::::
    
    #title
    Natural Language to [Full Applications]{.text-primary}
    
    #description
    Simply describe what you want to build in plain English. Our AI understands context, generates code, sets up databases, and handles deployment automatically.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1
    target: _blank
    ---
      :::::div{.bg-elevated.rounded-lg.p-3.overflow-x-auto}
      ```js [app.config.js]
      export default {
        name: 'My Dashboard App',
        database: 'supabase',
        authentication: 'enabled',
        deployment: {
          domain: 'my-app.codinit.dev',
          ssl: true
        },
        features: [
          'user-management',
          'analytics',
          'real-time-sync'
        ]
      }
      ```
      :::::
    
    #title
    Configure with [Simple Settings]{.text-primary}
    
    #description
    Customize your application settings, connect services, and manage deployments through an intuitive configuration interface.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 md:col-span-1 min-h-[450px]
    target: _blank
    ---
      :::::color-mode-switch
      :::::
    
    #title
    [Dark Mode]{.text-primary} Support
    
    #description
    Every application includes built-in dark mode support and responsive design across all devices.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::u-color-mode-image
      ---
      height: 554
      width: 859
      alt: Built-in collaboration and project management"
      class: rounded-lg
      dark: /landing/dark/command-menu.png
      format: webp
      light: /landing/light/command-menu.png
      loading: lazy
      ---
      :::::
    
    #title
    Built-in [collaboration tools]{.text-primary}
    
    #description
    Work with your team in real-time. Share projects, manage versions, and collaborate on applications without complex setup.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2
    target: _blank
    ---
      :::::browser-frame
      :video{.rounded-md controls loop playsinline src="https://res.cloudinary.com/nuxt/video/upload/v1747230893/studio/wzt9zfmdvk7hgmdx3cnt.mp4"}
      :::::
    
    #title
    Visual [AI Editing]{.text-primary}
    
    #description
    Edit your applications visually with AI assistance. Select components, describe changes, and watch your app evolve in real-time without touching code.
    ::::
  
    ::::u-page-card
    ---
    spotlight: true
    class: col-span-2 lg:col-span-1
    target: _blank
    to: https://e2b.dev
    ---
      :::::div{.flex-1.flex.items-center.justify-center}
        ::::::u-color-mode-image
        ---
        alt: Secure sandbox environment
        class: w-[30%] lg:w-[70%] my-12 lg:my-0
        dark: /landing/dark/nuxt-image.svg
        light: /landing/light/nuxt-image.svg
        ---
        ::::::
      :::::
    
    #title
    [Secure Sandboxes]{.text-primary}
    
    #description
    All code execution happens in secure, isolated environments powered by e2b.dev for maximum safety and reliability.
    ::::
  :::
::