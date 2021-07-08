key = 'ddRI1C1SiJ4uPjlkYa3BZr7tOl0gNbmS';




// function displayGiph(event) {
//     fetch ('https://api.giphy.com/v1/gifs/random?api_key=ddRI1C1SiJ4uPjlkYa3BZr7tOl0gNbmS&tag=&rating=g')
//     .then (function(response) {
//         return response.json ();
//     })
//     .then (function(json) {
//         let giph = json;
//         console.log(giph);
//         console.log(giph.data)
//         // for (giph) {
//             let listItem = document.createElement('li');
//             listItem.innerHTML =  giph.data.url;
//             giphHolder.appendChild(listItem);
//         // };   
//     });
// }

document.addEventListener("DOMContentLoaded", displayGiph);
      function displayGiph() {
        document.getElementById("btnSearch").addEventListener("click", ev => {
          ev.preventDefault(); //to stop the page reload
          let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&limit=1&q=`;
          let str = document.getElementById("search").value.trim();
          url = url.concat(str);
          console.log(url);
          fetch(url)
          .then (function(response) {
                    return response.json ();
               })
            .then(content => {
              //  data, pagination, meta
              console.log(content.data);
              console.log("META", content.meta);
              let fig = document.createElement("figure");
              let img = document.createElement("img");
              
              img.src = content.data[0].images.downsized.url;
              img.alt = content.data[0].title;
              
              fig.appendChild(img);
              
              let out = document.querySelector(".out");
              out.insertAdjacentElement("afterbegin", fig);
              document.querySelector("#search").value = "";
            })
            .catch(err => {
              console.error(err);
            });
        });
      }
