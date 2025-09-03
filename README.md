# Horizon Truth – V2 (React)

![Horizon Truth Banner](https://via.placeholder.com/800x200/3B82F6/FFFFFF?text=Horizon+Truth+-+Digital+Literacy+Platform)

A gamified digital literacy platform empowering Ethiopian youth to detect and resist misinformation, now rebuilt with React for improved performance, scalability, and a modern API-driven architecture.

## 🌟 Features

- **Interactive Game Experience**: Engaging scenarios that teach misinformation detection
- **Real-time Feedback**: Immediate feedback on choices with educational explanations
- **Progress Tracking**: Monitor your improvement with detailed statistics
- **Community Reporting**: Submit and verify potentially misleading content
- **Multi-language Support**: Designed for Ethiopian youth with localization capabilities
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/horizon-truth-v2.git
   cd horizon-truth-v2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```
   REACT_APP_API_URL=your_api_url_here
   REACT_APP_GOOGLE_ANALYTICS_ID=your_ga_id
   ```

4. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🎮 Game Flow

The Horizon Truth game follows this user journey:

1. **Welcome Screen**: Users select a category to begin
2. **Scenario Presentation**: Users analyze social media-style content
3. **Choice Selection**: Users make decisions about the content's validity
4. **Feedback**: Immediate educational feedback on their choices
5. **Progress Tracking**: Users see their accuracy and score improve
6. **Completion**: After 10 questions, users receive a summary of their performance

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── game/           # Game-specific components
│   ├── ui/             # Generic UI components
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Game.tsx        # Main game page
│   ├── About.tsx       # About us page
│   ├── Resources.tsx   # Educational resources
│   ├── Reporting.tsx   # Content reporting
│   └── ContactUs.tsx   # Contact form
├── store/              # State management (Zustand)
│   ├── game.store.ts   # Game state
│   ├── auth.store.ts   # Authentication state
│   └── report.store.ts # Reporting state
├── services/           # API services
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── routes.tsx          # Application routing
```

## 🛠️ Technologies Used

- **Frontend Framework**: React 18 with TypeScript
- **Routing**: React Router v6
- **State Management**: Zustand
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Build Tool**: Vite (or Create React App)
- **API Client**: Axios

## 🤝 Contributing

We welcome contributions to Horizon Truth! Here's how you can help:

### Development Process

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
4. **Add tests** for new functionality
5. **Ensure linting passes** (`npm run lint`)
6. **Commit your changes** (`git commit -m 'Add amazing feature'`)
7. **Push to the branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Code Style

- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use descriptive component and variable names
- Include comments for complex logic

### Reporting Issues

Please use GitHub Issues to report bugs or suggest features. Include:
- A clear description of the issue
- Steps to reproduce
- Expected behavior
- Screenshots if applicable

## 📊 API Integration

The application connects to a backend API for:
- User authentication and profiles
- Game scenario management
- Progress tracking and statistics
- Content reporting system

See the [API Documentation](https://github.com/your-username/horizon-truth-api) for details on endpoints and data structures.

## 🌐 Deployment

### Production Build

```bash
npm run build
# or
yarn build
```

This creates a `build` folder with optimized production files.

### Deployment Options

- **Netlify**: Connect your repository for automatic deployments
- **Vercel**: Zero-config deployment for React apps
- **Traditional hosting**: Upload build files to any web server

### Environment Setup

Ensure these environment variables are set in production:

- `REACT_APP_API_URL`: Your production API endpoint
- `REACT_APP_SENTRY_DSN`: (Optional) For error tracking
- `REACT_APP_GA_ID`: (Optional) Google Analytics tracking ID

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Ethiopian digital literacy organizations
- Open source contributors
- Research partners in misinformation studies
- The React community for excellent tools and resources

## 📞 Contact

For questions about this project:
- Email: team@horizontruth.org
- Website: https://horizontruth.org
- Twitter: [@HorizonTruth](https://twitter.com/HorizonTruth)

## 🗺️ Roadmap

- [ ] Multi-language support (Amharic, Oromo, Tigrinya)
- [ ] Mobile app version
- [ ] Advanced analytics dashboard
- [ ] Teacher/educator portal
- [ ] Community moderation tools
- [ ] Integration with fact-checking APIs

---

<div align="center">

**Empowering the next generation of critical thinkers**

</div>