# 🔒 DaiSec - AI-Powered Security Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/berkaynez/secure-sense-launch)
[![Deploy on Vercel](https://img.shields.io/badge/deploy%20on-vercel-black.svg)](https://vercel.com/new/clone?repository-url=https://github.com/berkaynez/secure-sense-launch)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5+-646CFF.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3+-38B2AC.svg)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6.svg)](https://www.typescriptlang.org/)

> **Turn old cameras into smart, AI-powered security in minutes.** 🚀

DaiSec transforms your existing IP and web cameras into intelligent security systems with AI-powered human and motion detection, cloud recording, and instant alerts. No need to replace your cameras - just upgrade them with smart technology.

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Pricing Models](#-pricing-models)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Screenshots](#-screenshots)
- [Roadmap](#-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Overview

DaiSec is a revolutionary security platform that breathes new life into your existing camera infrastructure. Instead of expensive camera replacements, we provide AI intelligence that works with what you already have.

### 🔥 Unique Value Proposition

- **♻️ Reuse Existing Cameras**: No need to replace your current IP/web cameras
- **🔌 Plug & Play Setup**: Get started in minutes, not hours
- **🤖 AI-Powered Detection**: Advanced human and motion detection with 95% accuracy
- **☁️ Flexible Deployment**: Choose between cloud-only or gateway-based solutions
- **💰 Cost-Effective**: Save thousands compared to traditional security upgrades

## ✨ Features

### 🧠 AI-Powered Intelligence
- **Human Detection**: Distinguish between people, pets, and objects
- **Motion Analysis**: Smart filtering to reduce false alarms by 95%
- **Real-time Processing**: Instant alerts with HD video evidence
- **Multi-object Recognition**: Detect packages, vehicles, animals, and more

### 🔗 Universal Compatibility
- **Multi-brand Support**: Works with 200+ camera brands
- **ONVIF/RTSP Protocol**: Industry-standard connectivity
- **Legacy Camera Support**: Upgrade cameras from any era
- **Network Flexibility**: Works with existing network infrastructure

### 📹 Smart Recording & Storage
- **Event-based Recording**: Only records when something happens
- **Cloud Storage**: Secure, scalable cloud storage options
- **Local Processing**: Gateway-based local AI processing
- **Hybrid Solutions**: Combine cloud and local storage

### 🚀 Easy Scaling & Management
- **Centralized Dashboard**: Manage all cameras from one interface
- **Mobile & Web Access**: Monitor from anywhere, anytime
- **Role-based Access**: Secure multi-user management
- **API Integration**: Connect with existing security systems

## 🏗️ Architecture

DaiSec offers two flexible deployment models to fit your needs:

```
┌─────────────────────────────────────────────────────────────┐
│                    DaiSec Architecture                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📱 Mobile App  │  💻 Web Dashboard  │  🔗 API Access      │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ☁️  Cloud-Only Model          │  🏠 Gateway Model          │
│  ┌─────────────────┐           │  ┌─────────────────┐       │
│  │   Your Cameras  │ ──────────┼─→│  Smart Gateway  │       │
│  │  (IP/Web/RTSP)  │           │  │ (Raspberry Pi)  │       │
│  └─────────────────┘           │  └─────────────────┘       │
│           │                    │           │                │
│           ▼                    │           ▼                │
│  ┌─────────────────┐           │  ┌─────────────────┐       │
│  │  Cloud AI       │           │  │  Local AI       │       │
│  │  Processing     │           │  │  Processing     │       │
│  └─────────────────┘           │  └─────────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 🔧 Deployment Models

1. **☁️ Cloud-Only Model**
   - Direct camera-to-cloud connection
   - No hardware required
   - Perfect for supported cameras
   - Instant setup and scaling

2. **🏠 Gateway Model**
   - Raspberry Pi 4B + Coral USB accelerator
   - Local AI processing
   - Works with ANY camera brand
   - Offline capability

## 💰 Pricing Models

| Plan | Price | Best For | Key Features |
|------|-------|----------|--------------|
| **🆓 Free** | $0/month | Testing & small setups | Live view, 1-2 cameras, basic app |
| **⚡ Standard** | $14.99/camera/month | Existing camera owners | AI detection, event recording, cloud storage |
| **🏠 Gateway + Sub** | $140 + $5/month | Multi-brand setups | Smart gateway, unlimited cameras, local AI |
| **👑 Premium All-In** | $0 hardware + $25/month | New installations | Free gateway, premium hardware, 24/7 support |
| **💎 Lifetime** | $299 one-time | Long-term users | Gateway included, no monthly fees, local processing |

*All plans include 30-day money-back guarantee*

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+ ([Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- **Git** ([Download here](https://git-scm.com/downloads))
- **Vercel Account** (for deployment) ([Sign up here](https://vercel.com/signup))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/berkaynez/secure-sense-launch.git
   cd secure-sense-launch
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:8080
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Fork this repository** to your GitHub account

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your forked repository
   - Deploy with default settings

3. **Custom Domain** (Optional)
   - Add your domain in Vercel dashboard
   - Update DNS settings as instructed

### Alternative Deployment Options

- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use GitHub Actions for deployment
- **Docker**: Use the included Dockerfile for containerized deployment

## 📸 Screenshots

### 🏠 Landing Page
![Landing Page](docs/screenshots/landing.png)
*Modern, responsive landing page showcasing DaiSec's value proposition*

### 💰 Pricing Page
![Pricing Page](docs/screenshots/pricing.png)
*Clear pricing comparison with flexible plans for different needs*

### 🤖 AI Detection Example
![AI Detection Example](docs/screenshots/detection.png)
*Real-time AI detection showing person and package identification*

### 📱 Mobile Dashboard
![Mobile Dashboard](docs/screenshots/mobile.png)
*Mobile-optimized interface for monitoring on the go*

### ⚙️ Gateway Setup
![Gateway Setup](docs/screenshots/gateway.png)
*Simple plug-and-play gateway configuration process*

## 🗺️ Roadmap

### ✅ Completed
- [x] Landing page with responsive design
- [x] Multi-page application structure
- [x] Pricing plans and comparison
- [x] Features showcase and documentation
- [x] Mobile-responsive navigation
- [x] Professional UI/UX design system

### 🚧 In Progress
- [ ] Mobile app development (iOS/Android)
- [ ] Advanced analytics dashboard
- [ ] Real-time camera integration demo
- [ ] API documentation and SDK

### 📋 Planned
- [ ] Multi-language support (EN, TR, ES, FR)
- [ ] Advanced AI model training
- [ ] Integration with smart home systems
- [ ] Enterprise-grade security features
- [ ] White-label solutions
- [ ] Advanced reporting and analytics
- [ ] Machine learning model optimization
- [ ] Third-party integrations (IFTTT, Home Assistant)

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🍴 Fork & Branch
```bash
# Fork the repository on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/secure-sense-launch.git
cd secure-sense-launch

# Create a feature branch
git checkout -b feature/amazing-feature
```

### 🔧 Development
```bash
# Install dependencies
npm install

# Make your changes
# Test your changes
npm run build
npm run lint
```

### 📤 Submit Changes
```bash
# Commit your changes
git commit -m "Add amazing feature"

# Push to your fork
git push origin feature/amazing-feature

# Create a Pull Request on GitHub
```

### 📝 Contribution Guidelines

- **Code Style**: Follow existing code patterns and ESLint rules
- **Commits**: Use clear, descriptive commit messages
- **Testing**: Ensure your changes don't break existing functionality
- **Documentation**: Update README or docs if needed
- **Issues**: Check existing issues before creating new ones

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 DaiSec

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 📞 Support & Contact

- **📧 Email**: support@daisec.com
- **💬 Discord**: [Join our community](https://discord.gg/daisec)
- **🐛 Issues**: [GitHub Issues](https://github.com/berkaynez/secure-sense-launch/issues)
- **📖 Documentation**: [docs.daisec.com](https://docs.daisec.com)

---

<div align="center">

**Made with ❤️ by the DaiSec Team**

[⭐ Star this repo](https://github.com/berkaynez/secure-sense-launch) | [🐛 Report Bug](https://github.com/berkaynez/secure-sense-launch/issues) | [💡 Request Feature](https://github.com/berkaynez/secure-sense-launch/issues)

</div>