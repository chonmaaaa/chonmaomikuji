const results = [

  'いいことあるかも！',
  '100円拾うかも✨',
  '10円拾うかも卍',
  '大凶',
  '凶'
];

 function draw(){

   const key = Math.floor(Math.random()*5)
   console.log(key)
   const fortune = document.getElementById("fortune")
   fortune.textContent = results[key]

   var chengeImg = document.getElementById("images");

    if(key == 0){
      chengeImg.src = "daikiti.jpg";
      console.log('さいこう！');
    }
    if(key == 1){
      chengeImg.src = "tyukiti.jpg";
      console.log('いいね！');
    }
    if(key == 2){
      chengeImg.src = "shoukiti.jpg";
      console.log('まあまなのかな');
    }
    if(key == 3){
      chengeImg.src = "netahouga.jpg";
      console.log('あしたまた頑張ろう');
      window.alert('本当に見ますか？');
    }
    if(key == 4){
      chengeImg.src = "akan.jpg";
      console.log('そんなひもある...');
      
    }

  }


 console.log(results);


