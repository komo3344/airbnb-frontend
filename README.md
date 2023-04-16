# settings

## setting react & chakra UI

| https://chakra-ui.com/docs/components

1. `npx create-react-app airbnb-react --template=typescript`

   `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion`

   or

2. `npx create-react-app my-app --template @chakra-ui/typescript`
   (It solves VSCode Intellisense/auto-import issues and installs those scripts, saving a lot of time.)

## install react-router-dom

---

https://reactrouter.com/en/main

`npm i react-router-dom`

## install react-icons

---

https://react-icons.github.io/react-icons/

`npm i react-icons --save`

## install react-query

---

https://tanstack.com/query/latest/docs/react/overview

`npm i @tanstack/react-query`

## install devtools

---

console.log로 매번 확인할 필요 없이 react query 개발자도구로 확인 할 수 있다.
https://tanstack.com/query/v4/docs/react/devtools

`npm i @tanstack/react-query-devtools`

production 에서 제외하는 방법
https://tanstack.com/query/latest/docs/react/devtools#devtools-in-production

## install js-cookie

npm i js-cookie
npm i --save-dev @types/js-cookie

<br><br>

## npm i react-hook-form

## Note

---

로그인된 유저가 API를 호출해도 403 Forbidden 가 뜨는 이유

- fetch를 사용하면 javascript에서 cookie를 포함시키라고 알려줘야 한다.
- 브라우저가 url에 가면 cookie를 자동으로 보내지만, javascript가 url로 가면 자동으로 보내지 않음. 기본동작이 아니기 때문
  (브라우저에 의해 만들어진 요청은 자동으로 django에게 cookie를 보내지만 js는 자동으로 보내지 않는다.)

해결방법

1. 프론트에서 `withCredentials: true` 옵션을 준다.
2. 서버(django)에서 해당 옵션을 받을 수 있도록 `CORS_ALLOW_CREDENTIALS = True` 세팅을 해준다.
