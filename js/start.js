const main = document.querySelector("#main") //메인 section이 담김
const qna = document.querySelector("#qna");//qna section이 담김
const result = document.querySelector("#result");
const story = document.querySelector("#story");
const endPoint = 10;//질문 개수
//진행을 위한 변수 선언
let pogress_ver1 = 0;
let pogress_ver2 = 0;
//결과 값 계산을 위한 변수
let score_list = {odoin : 0, human : 0, good : 0, bad : 0};

//스토리 진행을 위한 변수 선언
let  storyImg_progress = 0;

function goResult(resultInfo){
      qna.style.WebkitAnimation = "fadeOut 1s";
      qna.style.animation = "fadeOut 1s";
      setTimeout(() => {
            result.style.WebkitAnimation= "fadeIn 1s";
            result.style.animation = "fadeIn 1s"
            setTimeout(() => {
                  qna.style.display = "none";
                  result.style.display = "block";
            }, 450)
      }, 450);
      document.getElementById("resultnameP").innerHTML = resultInfo.name;
}

function cal_result(){
      var result;
      if(score_list['odoin'] > score_list['human'] && score_list['good'] > score_list['bad']){
            result = infoList[0];
      }else if(score_list['odoin'] > score_list['human'] && score_list['good'] < score_list['bad']){
            result = infoList[1];
      }else if(score_list['odoin'] < score_list['human'] && score_list['good'] > score_list['bad']){
            result = infoList[2];
      }else{
            result = infoList[3];
      }
      console.log(score_list['odoin'], score_list['human'], score_list['good'], score_list['bad']);
      console.log(result);
      return result;
}

function addAnswer(answerText, qIdx, type){
      var a = document.querySelector('.answerBox');
      var answer = document.createElement('button');
      answer.classList.add('answerList');
      answer.classList.add('my-3');
      answer.classList.add('py-3');
      answer.classList.add('mx-auto');
      answer.classList.add('fadeIn');
      a.appendChild(answer);
      answer.innerHTML = answerText;
      
      answer.addEventListener("click", function(){
            score_list[type]++;
            var children = document.querySelectorAll('.answerList');
            for(let i = 0; i<children.length; i++){
                  children[i].disabled = true;
                  children[i].style.WebkitAnimation = "fadeOut 0.5s";
                  children[i].style.animation = "fadeOut 0.5s";
            }
            setTimeout(() => {
                  for(let i = 0;i<children.length;i++){
                        children[i].style.display = 'none';
                  }
                   story_progress(++qIdx);
            }, 450);
      }, false);
}

function story_progress(qIdx){
      if(qIdx > endPoint){
            goResult(cal_result());
            return;
      }
      //이미지 배열안에 qIdx에 해당하는 id에 들어있는 이미지 개수만큼 반복
      let storyImage = document.getElementById('story_img');
      let img_index = 0;
      storyImage.src = arr_img[qIdx-1].storyImages[img_index].storyImage;
      storyImage.addEventListener("touchstart", function(){
            img_index += 1;
            console.log(img_index);
            console.log(arr_img[qIdx-1].storyImages.length);
            if(img_index == arr_img[qIdx-1].storyImages.length){
                  console.log("gonext");
                  goNext(qIdx);
                  return;
            }
            storyImage.src = arr_img[qIdx-1].storyImages[img_index].storyImage;
      });
      //반복 후 goNext 작동
}

function goNext(qIdx){
      if(qIdx > endPoint){
            goResult(cal_result());
            return;
      }
      qna.style.display = "block";
      story.style.display = "none";
      if(qIdx == 1 || qIdx == 5 || qIdx == 6 || qIdx ==8 || qIdx == 10){
            var q = document.querySelector('.qBox');
            q.innerHTML = qnaVer1_list[pogress_ver1].q;

            for(let i in qnaVer1_list[pogress_ver1].a){
                  addAnswer(qnaVer1_list[pogress_ver1].a[i].answer, qIdx, qnaVer1_list[pogress_ver1].a[i].type);
            }
            pogress_ver1++;
      }else{
            var q = document.querySelector('.qBox');
            q.innerHTML = qnaVer2_list[pogress_ver2].q;
            for(let i in qnaVer2_list[pogress_ver2].a){
                  addAnswer(qnaVer2_list[pogress_ver2].a[i].answer, qIdx, qnaVer2_list[pogress_ver2].a[i].type);
            }
            pogress_ver2++;
      }

      var status = document.querySelector('.statusBar');
      status.style.width = (100/endPoint) * (qIdx) + "%";
}

function begin(){
      main.style.WebkitAnimation = "fadeOut 1s";
      main.style.animation = "fadeOut 1s";
      setTimeout(() => {
            story.style.WebkitAnimation = "fadeIn 1s"
            story.style.animation = "fadeIn 1s"
            setTimeout(() => {
                  main.style.display = "none";
                  story.style.display = "block"; 
            }, 450)
            let qIdx = 1;
            story_progress(qIdx);
      }, 450);
}


function story_in(){
      qna.style.WebkitAnimation = "fadeOut 1s";
      qna.style.animation = "fadeOut 1s";
      setTimeout(() => {
            story.style.WebkitAnimation= "fadeIn 1s";
            story.style.animation = "fadeIn 1s"
            setTimeout(() => {
                  qna.style.display = "none";
                  story.style.display = "block";
            }, 450)
      }, 450);
}

