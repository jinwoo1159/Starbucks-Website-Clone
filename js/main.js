const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// searchInputEl 요소가 포커스 받을 때 실행되는 이벤트 리스너를 추가합니다.
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  // 포커스 이벤트가 발생하면 searchEl 요소에 "focused" 클래스를 추가합니다.
  searchInputEl.setAttribute("placeholder", "통합검색");
  // searchInputEl 요소의 placeholder 속성을 "통합검색"으로 설정합니다.
});

// searchInputEl 요소가 포커스를 잃을 때 실행되는 이벤트 리스너를 추가합니다.
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  // 포커스를 잃으면 searchEl 요소에서 "focused" 클래스를 제거합니다.
  searchInputEl.setAttribute("placeholder", "");
  // searchInputEl 요소의 placeholder 속성을 빈 문자열로 설정합니다.
});

const badgeEl = document.querySelector("header .badges");

// 'scroll' 이벤트가 발생하면 지정된 함수를 실행하도록 이벤트 리스너를 설정합니다.
window.addEventListener(
  "scroll",
  // throttle 함수는 주어진 시간(여기서는 300ms(0.3초)) 동안 이벤트 처리를 한번만 실행하도록 제한합니다.
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      // badgeEl의 불투명도를 0.6초 동안 0(완전 투명)으로 변경하여 배지를 숨깁니다.
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
    } else {
      // badgeEl의 불투명도를 0.6초 동안 1(완전 불투명)으로 변경하여 배지를 보이게 합니다.
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
    }
  }, 300) // 이벤트 처리를 300ms 간격으로 제한합니다.
);
// _.throtle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션);