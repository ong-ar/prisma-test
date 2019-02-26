### 필수 소프트웨어
- docker, docker-compose
- prisma (brew, npm 등등 설치 방법은 여러 가지)

### 설치 명령어

```
prisma init hello-world

cd hello-world
docker-compose up -d

prisma deploy
```
- default 로 있는 스키마가 생성 됩니다. (user)
- deploy 후 4433 포트로 접속하면 playground 가 뜹니다.