# Contributing to Zereth Cakes Hub

Thank you for your interest in contributing to Zereth Cakes Hub. This document provides guidelines for contributing to the project in a way that maintains code quality and consistency.

**Developed by CEO – Chukwuka Emmanuel Ogugua**

## Development Process

### Prerequisites

Before contributing, ensure you have:
- Node.js 18.17 or later
- npm or pnpm package manager
- PostgreSQL 13+ (for database-related changes)
- Git for version control
- Basic understanding of Next.js, React, and TypeScript

### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/your-username/zereth-cakes-hub.git
   cd zereth-cakes-hub
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Set up development environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with development values
   ```
5. **Start development server**
   ```bash
   npm run dev
   ```

## Contribution Guidelines

### Code Style

#### TypeScript
- Use strict TypeScript with explicit types
- Avoid `any` types - use proper interfaces and types
- Follow camelCase naming conventions
- Use const assertions where appropriate

#### React Components
- Use functional components with hooks
- Implement proper prop types with TypeScript interfaces
- Use React.memo for expensive components
- Follow component composition patterns

#### CSS and Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing using the design system
- Use CSS custom properties for theming

### Git Workflow

1. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the code style guidelines

3. **Test your changes**
   ```bash
   npm run type-check
   npm run lint
   npm run build
   ```

4. **Commit your changes** using conventional commits
   ```bash
   git commit -m "feat: add user authentication system"
   git commit -m "fix: resolve mobile navigation bug"
   git commit -m "docs: update API documentation"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

### Commit Message Format

Use conventional commits for clear, structured commit messages:

```
type(scope): description

Examples:
feat(auth): add user login functionality
fix(navigation): resolve mobile menu overflow
docs(readme): update installation instructions
refactor(components): optimize cake configurator performance
test(auth): add unit tests for login component
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `refactor`: Code restructuring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Development Standards

### Component Development

#### File Structure
```
components/
├── ui/                    # Base UI components
│   ├── button.tsx
│   ├── input.tsx
│   └── card.tsx
└── features/              # Feature-specific components
    ├── cake-designer/
    ├── marketplace/
    └── baker-dashboard/
```

#### Component Guidelines
- Export components as named exports
- Use TypeScript interfaces for props
- Implement proper error boundaries
- Add JSDoc comments for complex logic
- Follow accessibility best practices

### Database Changes

If your contribution involves database changes:

1. **Update the schema** in `scripts/01-create-database-schema.sql`
2. **Create migration scripts** for production deployments
3. **Update the seed data** if necessary
4. **Document the changes** in the PR description

### API Development

For new API routes:
- Use Next.js App Router API routes in `app/api/`
- Implement proper error handling
- Add input validation
- Use TypeScript for request/response types
- Add rate limiting for public endpoints

### Testing Requirements

- **Unit tests** for utility functions and complex logic
- **Integration tests** for API routes
- **Component tests** for complex UI interactions
- **E2E tests** for critical user flows

```bash
# Run tests (when implemented)
npm run test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Quality Assurance

### Code Review Checklist

Before submitting a PR, ensure:
- [ ] **TypeScript types** are properly defined
- [ ] **ESLint** passes without errors
- [ ] **Build** completes successfully
- [ ] **Responsive design** works across breakpoints
- [ ] **Accessibility** features are implemented
- [ ] **Performance** impact is considered
- [ ] **Documentation** is updated if needed

### Performance Considerations

- Use React.memo for expensive components
- Implement proper image optimization
- Avoid unnecessary re-renders
- Use dynamic imports for code splitting
- Optimize bundle size impact

## Pull Request Process

1. **Update the README.md** if you add new features
2. **Add tests** for new functionality
3. **Update documentation** for API changes
4. **Ensure CI passes** before submitting
5. **Provide clear description** of changes and rationale

### PR Template

```markdown
## Description
Brief description of what this PR accomplishes

## Changes
- List of specific changes made
- Technical details of implementation
- Breaking changes (if any)

## Testing
- How the changes were tested
- Test cases added or modified
- Manual testing steps

## Screenshots
- Before/after screenshots if UI changes
- Mobile responsiveness verification

## Related Issues
- Links to related issues or discussions
```

## Issue Reporting

When reporting bugs or requesting features:

1. **Search existing issues** before creating new ones
2. **Provide clear reproduction steps** for bugs
3. **Include system information**: Node version, OS, browser
4. **Add screenshots** for visual issues
5. **Suggest solutions** if possible

## Community Guidelines

- Be respectful and professional in all communications
- Focus on constructive feedback
- Help other contributors when possible
- Follow the established code style and patterns
- Document your contributions clearly

## License

All contributions are subject to the MIT License. By contributing, you agree that your contributions will be licensed under the same license as the original project.

## Support

For questions about contributing:
- **Email**: support@zereth-cakes-hub.com
- **GitHub Issues**: Use the issue tracker for technical discussions
- **Documentation**: Check this guide and inline code comments

---

**Zereth Cakes Hub – Developed by CEO (Chukwuka Emmanuel Ogugua)**
