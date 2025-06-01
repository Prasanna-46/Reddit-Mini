# Reddit-Mini 🚀

A modern, responsive Reddit client built with React and Redux that provides a clean interface for browsing and searching Reddit content.

Demo Website: https://reddit-clone-mini.netlify.app

## ✨ Features

- **Real-time Content Fetching** - Browse posts from any subreddit
- **Universal Search** - Search across all of Reddit with instant results
- **Category Filtering** - Filter posts by News, Sports, Entertainment, and more
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Markdown Support** - Renders Reddit's markdown content safely
- **Image Thumbnails** - Displays post images and thumbnails
- **Loading States** - Smooth loading indicators and error handling

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **State Management:** Redux Toolkit + React-Redux
- **Styling:** CSS3 with Flexbox & Grid
- **HTTP Client:** Fetch API
- **Markdown Parser:** Marked.js
- **Build Tool:** Create React App

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Prasanna-46/Reddit-Mini
   cd reddit-mini
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Header.js        # App header with logo
│   ├── SearchBar.js     # Search functionality
│   ├── CategoryFilter.js # Category dropdown
│   ├── PostList.js      # Posts container
│   └── PostItem.js      # Individual post component
├── containers/          # Redux-connected components
│   └── VisiblePostList.js
├── redux/              # State management
│   ├── actions.js      # Action creators and async thunks
│   ├── reducers.js     # Redux reducers
│   └── store.js        # Store configuration
├── styles/             # Component-specific CSS
└── App.js             # Main application component
```

## 🔧 Key Components

### State Management
- **Redux Store** - Centralized state management
- **Async Actions** - Thunk middleware for API calls
- **Error Handling** - Comprehensive error states

### API Integration
- **Reddit JSON API** - Fetches data from `reddit.com/r/{subreddit}.json`
- **Search API** - Uses `reddit.com/search.json` for universal search
- **Image Handling** - Processes thumbnails and preview images

### Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **CSS Grid & Flexbox** - Modern layout techniques
- **Media Queries** - Breakpoints at 768px for tablet/mobile

## 🎯 Core Functionality

### Fetching Posts
```javascript
// Fetch posts from specific subreddit
dispatch(fetchPosts('reactjs'));

// Fetch all posts (default)
dispatch(fetchPosts('all'));
```

### Search Implementation
```javascript
// Search across all Reddit
dispatch(searchPosts('javascript'));
```

### Category Filtering
- All Posts
- News
- Sports  
- Entertainment
- *Easily extensible for more categories*

## 🔍 API Endpoints Used

| Endpoint | Purpose | Example |
|----------|---------|---------|
| `/r/{subreddit}.json` | Fetch subreddit posts | `/r/reactjs.json` |
| `/search.json?q={query}` | Search Reddit | `/search.json?q=javascript` |

## 🎨 Design Features

- **Clean UI** - Minimalist design inspired by modern Reddit
- **Card Layout** - Post items in clean, bordered cards
- **Loading States** - Visual feedback during API calls
- **Error Boundaries** - Graceful error handling
- **Accessibility** - Semantic HTML and keyboard navigation

## 🚧 Future Enhancements

- [ ] User authentication and profile management
- [ ] Voting system (upvote/downvote)
- [ ] Comments threading
- [ ] Dark mode toggle
- [ ] Infinite scroll pagination
- [ ] Save/bookmark posts
- [ ] Share functionality
- [ ] Advanced filtering options

## 🐛 Known Issues

- Some Reddit thumbnails may not load due to CORS policies
- Search results limited to Reddit's API constraints
- No offline functionality (requires internet connection)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Prasanna L**
- GitHub: [@yourusername](https://github.com/Prasanna-46)
- LinkedIn: [Your LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7334993670162522112/)

## 🙏 Acknowledgments

- Reddit for providing the public JSON API
- React and Redux communities for excellent documentation
- Create React App for the development setup

---

⭐ **Star this repo if you found it helpful!** ⭐
