# React mini Todo-List 


## Screenshots
<div>
  <img  width="30%" height="350" src="https://user-images.githubusercontent.com/93265694/232279078-821e927c-f1b5-40fd-af14-16280d8c1a3b.PNG">
  <img width="30%" height="350" src="https://user-images.githubusercontent.com/93265694/232279080-077428ff-5aa3-449a-85a0-f9b7938df8fc.PNG">
  <img  width="30%" height="350" src="https://user-images.githubusercontent.com/93265694/232279083-300c3d7d-7507-47f7-951e-c4a8042d00f9.PNG">
</div>

<br>

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
-Style : postcss의 모듈객체를 활용해봄으로써 className 짓기나 구조를 덜 고민할 수 있어서 간편한 장점.

-darkmode : context api를 사용해 내부적으로는 useConext를 할 수 있도록 hook을 만들어 간편하게 사용

-localstorage : usestate를 사용하며 콜백을 넣어줘 컴포넌트가 mount 될 때만 호출되고 상태가 변경될 때는 호출되지 않도록 구현
