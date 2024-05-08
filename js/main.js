"use strict";

/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// 검색창 요소를 클릭하면 실행.
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

/**
 * 페이지 스크롤에 따른 요소 제어
 */
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

// 'scroll' 이벤트가 발생하면 지정된 함수를 실행하도록 이벤트 리스너를 설정합니다.
window.addEventListener(
  "scroll",
  // 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
  // throttle 함수는 주어진 시간(여기서는 300ms(0.3초)) 동안 이벤트 처리를 한번만 실행하도록 제한합니다.
  _.throttle(function () {
    // 페이지 스크롤 위치가 500px이 넘는 경우
    if (window.scrollY > 500) {
      // badgeEl의 불투명도를 0.6초 동안 0(완전 투명)으로 변경하여 배지를 숨깁니다.
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 상단으로 가는 스크롤 버튼 보이기!
      gsap.to("toTopEl", 0.2, {
        x: 0, // 버튼이 원래 위치에 보이게 됩니다.
      });
    } else {
      // badgeEl의 불투명도를 0.6초 동안 1(완전 불투명)으로 변경하여 배지를 보이게 합니다.
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // 상단으로 가는 스크롤 버튼 숨기기!
      gsap.to("toTopEl", 0.2, {
        x: 100, // 버튼이 숨어질 수 있도록 오른쪽으로 100px 이동합니다.
      });
    }
  }, 300) // 이벤트 처리를 300ms 간격으로 제한합니다.
);
// _.throtle(함수, 시간)
// gsap.to(요소, 지속시간, 옵션);

// 상단으로 스크롤 버튼을 클릭하는 경우
toTopEl.addEventListener("click", function () {
  // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll(".visual .fade-in");
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

// new Swiper(선택자, 옵션);
new Swiper(".notice-line .swiper", {
  // Optional parameters
  direction: "vertical", // 슬라이드 진행 방향(수직), 기본 값은 "horizontal"
  autoplay: true, // 자동재생 여부
  loop: true, // 반복재생 여부
});
new Swiper(".promotion .swiper", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수, 기본 값은 1
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  loop: true, // 반복재생 여부
  // autoplay: true 도 가능하지만 객체 데이터로 할당하면 추가적인 옵션 설정 가능
  autoplay: {
    // 자동재생 여부
    delay: 5000, // 시작시간 설정(기본 값은 3000)
  }, // 자동재생 여부
  pagination: {
    // 페이저 버튼 사용자 설정
    el: ".promotion .swiper-pagination", // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 가능 요소 (사용자가 단순히 시각적으로만 보는것 뿐만아니라 눌러서 제어할 수 있는지에 대한 여부)
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper", {
  // Optional parameters
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동재생 여부
  loop: true, // 반복재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수, 기본 값은 1
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

// 슬라이드 영역 요소 검색!
const promotionEl = document.querySelector(".promotion");
// 슬라이드 영역를 토글하는 버튼 검색!
const promotionToggleBtn = document.querySelector(".toggle-promotion");
// isHidePromotion 변수를 false로 초기화합니다. 이 변수는 프로모션 영역이 표시되는지 (false) 아니면 숨겨져 있는지 (true)를 나타냅니다.
let isHidePromotion = false;
// 변수 값이 변경될 수 있으므로 let를 사용하여 선언합니다.
promotionToggleBtn.addEventListener("click", function () {
  // isHidePromotion 변수의 값을 부정하여 재할당합니다. 즉, true면 false로, false면 true로 변합니다.
  isHidePromotion = !isHidePromotion;
  // isHidePromotion 값이 true이면
  if (isHidePromotion) {
    // promotionEl 요소에 "hide" 클래스를 추가하여 숨깁니다.
    promotionEl.classList.add("hide");
  } else {
    // 그렇지 않으면 promotionEl 요소에서 "hide" 클래스를 제거하여 보입니다.
    promotionEl.classList.remove("hide");
  }
});

/**
 * 부유하는 요소 관리
 */
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // Math.random()은 0이상 1미만의 랜덤한 숫자를 생성
  // 이를 (max - min)에 곱하면 원하는 범위의 랜덤한 숫자를 생성할 수 있음
  // 여기에 min을 더하면 min과 max 사이의 랜덤한 숫자를 얻을 수 있음
  // .toFixed(2)를 사용하여 소수점 두 자리까지 표시
  // 반환된 값은 문자열이므로 parseFloat()을 사용하여 숫자로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  // gsap 라이브러리의 'to' 메서드를 사용하여 애니메이션을 적용합니다.
  // 첫 번째 인자는 애니메이션을 적용할 요소의 선택자입니다.
  // 두 번째 인자는 애니메이션의 지속 시간입니다.
  // 세 번째 인자는 애니메이션의 옵션을 객체 형태로 전달합니다.
  gsap.to(selector, random(1.5, 2.5), {
    // y축으로 20만큼 움직입니다.
    y: size,
    // 애니메이션을 무한히 반복합니다.
    repeat: -1,
    // 'yoyo' 옵션은 애니메이션의 반복이 끝날 때 애니메이션을 원래 상태로 되돌리는지를 결정합니다.
    // 'true'는 되돌린다는 값을 의미합니다.
    yoyo: true,
    ease: "Power1.easeInOut", // 애니메이션의 가속 및 감속을 정의하는 가속도 곡선
    delay: random(0, delay), // 애니메이션 시작 전 지연 시간(초 단위)
  });
}

// floatingObject 함수에 선택자, 지연 시간, 크기를 인자로 전달하여 호출
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// ".section.scroll-spy" 클래스를 갖는 모든 요소를 선택합니다.
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 애니메이션이 적용될 요소를 트리거로 설정합니다.
    triggerHook: 0.8, // 트리거가 발생하는 위치를 화면의 0.8(80%) 지점으로 설정합니다.
  })
    .setClassToggle(spyEl, "show") // "show" 클래스를 애니메이션 트리거시 토글합니다.
    .addTo(new ScrollMagic.Controller());
});

/**
 * 올해가 몇 년도인지 계산
 */
const thisyear = document.querySelector(".this-year");
thisyear.textContent = new Date().getFullYear();
