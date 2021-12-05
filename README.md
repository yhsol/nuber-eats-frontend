# Nuber Eats Frontend

- 14.0 Create React App

- 14.1 TailwindCSS part One

- 14.2 TailwindCSS part Two

- 14.3 Apollo Setup

- 14.4 React Router Dom

  - Next 에서는 React Router Dom 을 안써서 다른 방법을 찾아야 함.
  - 아마도 Dynamic Route 를 쓰거나
  - HOC 형태로 검증 로직을 만들거나
  - Apollo Local State 활용?

- 15.0 Local Only Fields

  - ENOSPC: no space left on device, write 로 고생함
    - 용량이 없어서 그런 듯
    - 찾아보니 npm tmp 에 공간이 없어서 그런 것 같은데
    - 일단 노트북 드라이브에 공간 자체가 없기도 없었다.
    - 파일 정리하니 일단 됨.
    - 근데 npm tmp 는 슬쩍 찾아봤더니 안보임
    - 또 비슷한 문제가 생기면 좀 골치아프긴 할 듯
    - npm 자체를 날리고 다시 받으면 되려나
    - 정리를 잘하자.

- 15.1 React Hook Form

- 15.2 React Hook Form part Two

  - react-hook-form 편리하긴 한데 제공하는 기능에 비해 문서가 충실하지 않탈까.. 시간을 충분히 들여서 보지 않아서 그런가.. 좀 더 봐야할 듯하다.
  - 그래도 편리하다고 생각됨.

- 15.3 Router and @types

- 15.4 Form Design

- 15.5 Form Login

- 15.6 Login Mutation part One

- 15.7 Apollo Codegen

  - Apollo Codegen 도 편하긴한데 확실히 graphql-code-generator 가 더 편한거 같긴 하다. generate 해주는게 더 상세하다.
    apollo 에서 제공한다는게 Apollo Codegen 의 장점이긴한데, 좀 더 써봐야겠다.

- 15.8 Login Mutation

- 15.9 Login Mutation part Two

- 15.10 UI Clonning

- 15.11 UI Clonning part Two

- 15.12 Create Account Mutation
  - react-helmet 대신에 next/head 사용
  - 원하는 컴포넌트에 Head 를 사용하면 된다.
    - 내부에 title, meta 채워넣고!
  - 컴포넌트 파일명 바꿨다가 리렌더가 안되서 헤멨다.
    - next 에서는 파일시스템 기반으로 라우팅을 처리하기 때문에 폴더명/파일명 형식으로 path 를 설정해줄 필요가 있음
    - 그래서 폴더명 만으로 처리하려고 파일명을 index 로 해서 폴더명만으로 구분할 수 있게 했었는데 그걸 까먹고 파일명을 다른 이름으로 명시했더니 404 에러가 남. 파일명을 명시할 거면 폴더명/파일명 같이 다 명시를 해줘야 함.
