# Angular Auth App

A comprehensive Angular application showcasing modern web development features like authentication, responsive layout with collapsible sidebar, drag & drop functionality, and infinite scroll gallery.

🔗 **Deployed Application**: [View Live Demo](https://example-auth-app.netlify.app)

## 🛠 Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v8 or later)
- [Angular CLI](https://angular.dev/tools/cli) (v19.0.3)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/auth-app.git
cd auth-app
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
ng serve
```

4. Open your browser and navigate to `http://localhost:4200/`

### Building for Production

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

## ✍️ Feature Explanation

### 🔐 Authentication System
- Secure login/register functionality
- Form validation with meaningful error messages
- "Forgot Password" feature
- Protected routes with auth guards
- JWT-based authentication

### 📱 Responsive Layout
- Modern Material UI design
- Collapsible sidebar that adapts to different screen sizes
- Persistent sidebar state (remembers expanded/collapsed state)
- Mobile-friendly navigation

### 🖱️ Drag & Drop Board
- Interactive drag and drop interface
- Create and organize items across different categories
- Smooth animations using Angular Material CDK
- Persistent state management

### 🔄 Infinite Scroll Gallery
- Dynamic image loading as user scrolls
- Efficient memory management
- Responsive image grid
- Loading indicators for better user experience

### 🧩 Additional Features
- Server-Side Rendering (SSR) compatible
- Error handling with interceptors
- Loading indicators for asynchronous operations
- Custom pipes for data transformation

## 🧪 Testing

### Unit Tests
```bash
ng test
```

### End-to-End Tests
```bash
ng e2e
```

## 📚 Additional Resources

- [Angular Documentation](https://angular.dev/)
- [Angular Material](https://material.angular.io/)
- [Angular CLI Reference](https://angular.dev/tools/cli)
