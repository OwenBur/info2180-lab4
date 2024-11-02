window.onload = function ()
  {
    let serachBtn = document.querySelector("button"); 
    let seaarchIpt = document.querySelector("input");

    searchBtn.addEventListener('click', function (event){
      event.preventDefault();
      const input = searchIpt.value.trim();
      console.log(input);

      const httpRequest = new XMLHttpRequest();
      const url = 'superheroes.php?query=${input}';

      httpRequest.onreadystatechange = function()
        {
          if (httpRequest.readyState === XMLHttpRequest.DONE)
          {
            if(httpRequest.status === 200 )
            {
              document.getElementById("result").innerHTML = httpRequest.responseText;
            }
          }
        };

        httpRequest.open('GET', url);
        httpRequest.send();
    });
  };
          }
