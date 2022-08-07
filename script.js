
        const cell = document.querySelectorAll(".cell");
        let p1 = document.querySelector(".p1");
        let p2 = document.querySelector(".p2");
        let result = document.querySelector(".result");
        let result_text = document.querySelector(".result h1");
        let restart_btn = document.querySelector(".result button");
        let firstpage = document.querySelector(".select");
        let firstpage_btn1 = document.querySelector(".select .btn1");
        let firstpage_btn2 = document.querySelector(".select .btn2");

        

        let toggle =true;

        firstpage_btn1.onclick=()=>{
            firstpage.classList.add("inactive");
            p1.classList.add("active");
            toggle=false;
        }
        firstpage_btn2.onclick=()=>{
            firstpage.classList.add("inactive");
            p2.classList.add("active");
            toggle=true;
        }



        let pO = "O";
        let pX = "X";
        
        const winProb=[
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        

        cell.forEach(cel=>{
            cel.onclick=()=>{
                let currentPlayer = toggle ? pO : pX;
                cel.classList.add("disable")
                //console.log(cel.innerText);
                cel.innerHTML=currentPlayer;
                cel.classList.add(currentPlayer);
                swaplayer();
                if(winner(currentPlayer)){
                    console.log(currentPlayer +" Winner");
                    result.classList.remove("inactive");
                    result_text.innerText= currentPlayer +" Won The Game"; 
                }
                else if(Draw()){
                      result.classList.remove("inactive");
                      result_text.innerText= " Game Draw";
                  }
                
                
            } 
        })

        function winner(currentPlayer){
        return winProb.some(condition=>{      
            return condition.every(index=>{
                    return cell[index].classList.contains(currentPlayer);
                });
            })
        }
        
        function Draw() {
            return [...cell].every(cel => {
                return cel.classList.contains(pX) || cel.classList.contains(pO)
              })
        }
     

        function swaplayer(){
            toggle =!toggle;
            if(toggle){
                p2.classList.add("active");
                p1.classList.remove("active");  
            }else{
                p1.classList.add("active");
                p2.classList.remove("active");
            }     
        }

        restart_btn.onclick=()=>{
            location.reload();
        }