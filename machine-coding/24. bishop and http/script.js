window.addEventListener("DOMContentLoaded", (() => {
    const table = document.querySelector("#chess-table");
    
    // focus on table UI.

    // creating rows...
    for(let row = 0; row < 8; row++){
        const tr = document.createElement("tr");
        // creating cells...
        let white = row % 2 === 0;
        for(let cell = 0; cell < 8; cell++){
            const td = document.createElement("td");
            // td.classList.add(white === true ? "white" : "black")
            // OR
            td.setAttribute("class", `box ${white !== true ? " white" : " black"}`)
            // td.innerHTML = `${row}--${cell}`;
            td.setAttribute("data-index", `${row}-${cell}`)
            tr.appendChild(td)

            white = !white

        }
        table.appendChild(tr)

    }

    const boxes = document.querySelectorAll(".box");

    table.addEventListener("mouseover", ((event) => {
        console.log(event.target)
        const dataIndex = event.target.dataset.index
        console.log(dataIndex)
        const [cRi, cCi] = dataIndex.split("-");

        for(let i = 0 ; i < boxes.length; i++){
            // to reset the prev orange color, i have to rmeove orange class.
                boxes[i].classList.remove("orange")

        }

        const dict = {};
        // hover cell having class added.
        dict[dataIndex] = true;
        
        findTopLeft(cRi, cCi, dict)
        findTopRight(cRi, cCi, dict)
        findBottomLeft(cRi, cCi, dict)
        findBottomRight(cRi, cCi, dict)

        for(let i = 0; i < boxes.length; i++){
            let dataIdx = boxes[i].dataset.index;

            if(dict[dataIdx] === true){
                // color it.
                boxes[i].classList.add("orange")
            }
        }

        


    }))

      function findTopLeft(cRi, cCi, dict){
        // cRi--;
        // cCi--;
        while(cRi >=0 && cCi>=0){
            const idx = `${cRi}-${cCi}`
            dict[idx] = true;
            cRi--;
        cCi--;
        }
        
      }
      function findTopRight(cRi, cCi, dict){
        while(cRi >=0 && cCi<=7){
            const idx = `${cRi}-${cCi}`
            dict[idx] = true;
            cRi--;
            cCi++;
        }
      }
      function findBottomLeft(cRi, cCi, dict){
        while(cRi <=7 && cCi>=0){
            const idx = `${cRi}-${cCi}`
            dict[idx] = true;
            cRi++;
            cCi--;
        }

      }
      function findBottomRight(cRi, cCi, dict){
         while(cRi <=7 && cCi<=7){
            const idx = `${cRi}-${cCi}`
            dict[idx] = true;
            cRi++;
            cCi++;
        }
      }


  

    
}))