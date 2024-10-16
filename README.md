# domaincrafters application 🎯

![License](https://img.shields.io/badge/license-MIT-blue.svg)

![workflow](https://github.com/domaincrafters/ddd_deno_application/actions/workflows/ci.yml/badge.svg)
![GitHub Release](https://img.shields.io/github/v/release/domaincrafters/ddd_deno_application)
[![JSR](https://jsr.io/badges/@domaincrafters/application)](https://jsr.io/@domaincrafters/application)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=domaincrafters.deno.application&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=domaincrafters.deno.application)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=domaincrafters.deno.application&metric=coverage)](https://sonarcloud.io/summary/new_code?id=domaincrafters.deno.application)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=domaincrafters.deno.application&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=domaincrafters.deno.application)

Domaincrafters/application is a package designed to simplify the development of **educational** Domain-Driven Design (DDD) projects in Deno using TypeScript. It provides essential application layer constructs that embody DDD principles, including Use Case and Output Port. 🎯

## Changelog

See the [CHANGELOG](CHANGELOG.md) for detailed information about changes in each version.

## Features ✨

- **UseCase Interface**: Defines a standard for executing business logic with provided input.
- **OutputPort Interface**: Represents a presenter interface responsible for presenting output data from a use case.

## Installation 📦

To install the `@domaincrafters/application` package from domaincrafters using JSR, use the following import statement in your TypeScript project:

```typescript
import {
  UseCase,
  OutputPort,
} from "jsr:@domaincrafters/application";
```

## Contributing 🤝

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'feat: Add new feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

Please ensure your code adheres to the project's coding standards and includes relevant tests. 🧪

## Semantic Versioning with Conventional Commits 🔄

This project follows semantic versioning. To simplify the release process, we use conventional commits. Please ensure your commit messages follow the [conventional commit format](https://www.conventionalcommits.org/en/v1.0.0/).

## License 📝

This project is licensed under the [MIT License](LICENSE).

Happy coding with domaincrafters application! 🚀✨

---

**Emoticon Guide:**

- **🚀**: Represents the project's forward-thinking and dynamic nature.
- **🎯**: Indicates focus on application layer and business logic.
- **✨**: Highlights features and important sections.
- **📦**: Symbolizes installation or packaging.
- **📤**: Represents output or presentation of data.
- **📖**: Denotes usage examples and documentation.
- **🤝**: Signifies collaboration and contributions.
- **🧪**: Relates to testing and quality assurance.
- **📝**: Pertains to licensing information.

Feel free to adjust or add more emojis to better suit your project's personality and documentation style!