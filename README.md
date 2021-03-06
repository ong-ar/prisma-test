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

### 기본 명령어

- 모델 배포
```
prisma deploy
```

- 모델에 따른 graphql 스키마 생성
```
prisma generate
```

### Authentication & Security

#### Server

```
# docker-compose.yml
environment:
      PRISMA_CONFIG: |
        managementApiSecret: __YOUR_MANAGEMENT_API_SECRET__
```

#### Client

- service secret

```
# prisma.yml
secret: __YOUR_MANAGEMENT_API_SECRET__
```

- management api secret

```
export PRISMA_MANAGEMENT_API_SECRET="__YOUR_MANAGEMENT_API_SECRET__"
```

