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
 * 올해가 몇 년도인지 계산
 */
const thisyear = document.querySelector(".this-year");
// 선택한 요소의 텍스트 내용을 현재 년도로 설정합니다.
thisyear.textContent = new Date().getFullYear();
