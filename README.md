# 질문

`https://api.androidhive.info/contacts/`

위 사이트에 들어가면 모든 객체 내에 gender가 존재합니다.

gender 가 female인 경우에 데이터만 뽑고 싶어서 filter 안에서 for of 문을 만들고, 이 안이 if 조건문을 넣었는데요,

filter의 반환값이 무조건 boolean이어야 해서 if (female == gender) return true; else return false; 로 두니

for of 문이 끝나버려서 전체 비교가 불가했습니다.

filter 안에서 루프문이 들어가고 루프문 안에 조건을 비교하여 필터된 값을 뿌려야하는 경우? 에는 어떻게 해야 할까요?

# +

female 로 필터링된 연락처 중, 같은 주소에 사는 연락처의 이름만 출력해주세요.

Example Output

```
contact [ 'Angelina Jolie', 'Dido', 'Adele', 'Kate Winslet' ]
contact [ 'Hax0r', 'Kim' ]
contact [ 'Woo', 'Lee' ]
contact [ 'Kim' ]
```
