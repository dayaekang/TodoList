# React mini Todo-List 


## Screenshots
![react1](https://user-images.githubusercontent.com/93265694/232278324-3c29719a-c6a7-469f-96c7-86a167523ef7.PNG)

## 프로젝트 실행 방법 

```
  yarn start
```

## 기능 구현 목표

- [x] 해야 할 일 추가
- [x] 해야 할 일 삭제
- [x] 일의 필터링 (all, completed, active 상태 구분) 
- [x] 로컬스토리지로 할 일 기억하기
- [x] 다크모드 지원

<br>

## 주 작업 내용, 고민
#### Style : postcss의 모듈객체를 활용해봄으로써 className 짓기나 구조를 덜 고민할 수 있어서 간편한 장점.

#### darkmode : context api를 사용해 내부적으로는 useConext를 할 수 있도록 hook을 만들어 간편하게 사용

#### localstorage : usestate를 사용하며 콜백을 넣어줘 컴포넌트가 mount 될 때만 호출되고 상태가 변경될 때는 호출되지 않도록 구현
