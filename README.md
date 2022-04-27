<div id="top"></div>

<div align="center">

![GitHub repo size][github repo size-shields]
![GitHub language count][github language count-shields]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Website][website-shields]][website-link]
[![LinkedIn][linkedin-shield]][linkedin-url]

</div>

<!-- PROJECT LOGO -->

<div align="center">
  <a href="https://github.com/thiagobcoelho25/udemy-api-docker-redis">
    <img src="assets/logo.png" alt="Logo" width=70%>
  </a>

  <h3 align="center">udemy-api-docker-redis</h3>

  <p align="center">
    API project with clean code and TDD!

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#author">Author</a></li>
  </ol>
</details>

---

<!-- ABOUT THE PROJECT -->

## About The Project

This project is part of the course [API Restful Javascript com Node.js, Typescript, TypeORM etc](https://www.udemy.com/course/api-restful-de-vendas/), where a backend application for sales management is implemented with functionalities for creating product registration, customer registration, purchase orders and a complete management of application users, with authentication via JWT Token, password recovery by email, profile update and avatar update.

Using a clean architecture, with DDD-oriented development and automated testing (TDD).

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [Node.js](https://nodejs.org/en/)
- [Postgresql](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/)
- [Redis](https://redis.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

> dockers installation required

for installation, you can use this installation [guide](https://docs.docker.com/get-docker/) from the docker documentation itself

### Installation

Make a clone of this repository and install it in your development environment using the following command in your terminal (choose an appropriate directory):

```sh
   git clone https://github.com/thiagobcoelho25/udemy-api-docker-redis
```

After change the .env.example files to their respective names without the .example extension.

To run the project, go to the created directory and run the command:

```
docker-compose up
```

The server will be running at the address http://localhost:3333

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

With Postman, you can do the request tests, in which case I'll leave a file with the examples here for import in `Api-docker-redis.postman_collection.json`

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- AUTHOR -->

## Author

[<img alt="ThiagoRibeiro" src="https://github.com/thiagobcoelho25.png?size=210" width="115"><br><sub>@Thiagobcoelho25</sub>](https://github.com/thiagobcoelho25)

<!-- Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com -->

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[forks-shield]: https://img.shields.io/github/forks/thiagobcoelho25/udemy-api-docker-redis.svg?style=for-the-badge
[forks-url]: https://github.com/thiagobcoelho25/udemy-api-docker-redis/network/members
[stars-shield]: https://img.shields.io/github/stars/thiagobcoelho25/udemy-api-docker-redis.svg?style=for-the-badge
[stars-url]: https://github.com/thiagobcoelho25/udemy-api-docker-redis/stargazers
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/thiagobcoelho25
[product-screenshot]: images/screenshot.png
[github repo size-shields]: https://img.shields.io/github/repo-size/thiagobcoelho25/udemy-api-docker-redis?style=for-the-badge
[github language count-shields]: https://img.shields.io/github/languages/count/thiagobcoelho25/udemy-api-docker-redis?style=for-the-badge
[website-link]: https://github.com/thiagobcoelho25/udemy-api-docker-redis
[website-shields]: https://img.shields.io/website?down_color=292929&down_message=404&style=for-the-badge&logo=github&up_color=292929&up_message=Commit&url=https%3A%2F%2Fgithub.com%2FRuanMiniguite%2FCommit-Message
