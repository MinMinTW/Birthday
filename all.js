const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed:1500,
    loop: true,
    // Autoplay settings
    autoplay: {
        delay: 2000,
      },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
      
  });

  const cities = document.querySelector(".cities");
  const chance = document.querySelector(".chance");
  const swiperWrap = document.querySelector(".swiper-wrapper");
  const h2 = document.querySelector("h2")
  const menu = document.querySelector(".menu");
  const container = document.querySelector(".container");

  let chances = 2;

  cities.addEventListener('click', function(e){
    if(e.target.value == "1"){
        h2.textContent = "Let's go to 澎湖!";
        h2.classList.add("myClass");

        menu.innerHTML=
        `<p class="newContnet">

        爸爸、媽媽 : 生日快樂 !</br>
        </br>
        <span class="congrats">恭喜獲得</br>
        6/26-6/28 澎湖三天兩夜住宿券</br>
        
       一起去澎湖玩吧!</span></br>
        </br>
        GOGO!</br>

        柏丞
        </p>`

        swiperWrap.innerHTML =  
        `<div class="swiper-slide">
        <img src="css/images/10.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="css/images/11.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="css/images/09.jpg" alt="">
      </div>
      <div class="swiper-slide">
        <img src="css/images/08.jpg" alt="">
      </div>
      <div class="swiper-slide">
      <img src="css/images/12.jpg" alt="">
    </div>
    </div>`
          
    }else{
        chances-=1;
        chance.innerHTML=`<p>您還剩下 ${chances} 次機會</p>`
    }
    if(chances == 0){
        container.innerHTML =
        `<h1>Happy Birthday</h1>
        <h2 class="Newh2">6/26-6/28 我要自己去澎湖囉!</br>
        Bye!</h2>
        <div class="Bye">
        <img  src="css/images/13.jpg" width="500px">
        </div>
        `
        
      }
  })

 