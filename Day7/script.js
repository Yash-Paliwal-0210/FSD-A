// async function fetchData() {
//     try{
//         let response = await fetch('https://api.github.com/users?per_page=10');
//         let data = response.json();
//         // console.log(data);
//         data.forEach((element) => {
//             console.log(`node id ${element.node_id} and html url ${element.html_url}`);
//         });
//     }
//     catch(error){
//         console.log("Error ", error);
//     }
// }

// fetchData()

async function fetchData() {
    try {
      let response = await fetch("https://api.github.com/users?per_page=10");
      let data = await response.json();
      console.log(data)
      if( Array.isArray(data)){
          data.forEach((element) => {
            // console.log(
            //   `Node Id : ${element.node_id} and html URL : ${element.html_url}`
            // );
            let h1 = document.createElement('h1');
            h1.textContent = element.node_id;
    
            let h3 = document.createElement('h3');
            h3.textContent = element.html_url;
            h3.setAttribute('href' , element.html_url);
            let top = document.getElementById('top');
            top.appendChild(h1);
            top.appendChild(h3);
          });

      }
      else{
        console.log("not an array")
      }
    } catch (error) {
      console.log(error);
    }
  }
  fetchData();