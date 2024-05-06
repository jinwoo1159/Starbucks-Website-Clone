// Youtube IFrame API를 비동기로 로드합니다.
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api"; // 스크립트 소스를 Youtube IFrame API로 설정합니다.
let firstScriptTag = document.getElementsByTagName("script")[0]; // 페이지의 첫 번째 스크립트 태그를 찾습니다.
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag); // 찾은 스크립트 태그 앞에 새로운 스크립트 태그를 삽입합니다.

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않습니다!
// 그리고 함수는 전역(Global) 등록해야 합니다!
function onYouTubeIframeAPIReady() {
  // Youtube IFrame API가 준비되면 실행되는 함수를 정의합니다.
  // <div id="player"></div>
  new YT.Player("player", {
    videoId: "An6LvWQuj_8", // 최초 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: "An6LvWQuj_8", // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        // 영상이 준비되었을 때 실행되는 함수를 정의합니다.
        event.target.mute(); // 영상 소리를 무음으로 설정합니다.
      },
    },
  });
}
