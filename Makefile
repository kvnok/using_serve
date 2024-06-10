all: dbuild dstart

dbuild:
	docker-compose build

dstart:
	docker-compose up

do: deploy
	~/utils_shell_scripts/gim.sh

build:
	npm run build

clean:
	rm -rf dist
	docker-compose down

deploy:
	npm run deploy

watch:
	npx webpack --watch

init:
	npm init

install:
	npm install react react-dom
	npm install @types/react @types/react-dom typescript ts-loader --save-dev
	npm install @nestjs/core @nestjs/common @nestjs/platform-express
	npm install reflect-metadata rxjs
	npm install webpack webpack-cli --save-dev
	npm install gh-pages --save-dev
	npm install --save-dev html-webpack-plugin
	npm install --save-dev copy-webpack-plugin
	npm install @nestjs/websockets @nestjs/platform-socket.io
	npm install socket.io

.PHONY: all build clean deploy init install
