function dolist() {
    let list = document.getElementById("search").value;
    let list_do = document.getElementById("container");
  
    if (list == "") {
    } else {
      let on_screen = document.createElement("div");
      on_screen.classList.add("tarefas");
      on_screen.innerHTML = `<p>${list}</p>`;
      on_screen.addEventListener("click", do_list);
      on_screen.id = id_random();
      list_do.appendChild(on_screen);
      button_reset(on_screen.id)
    }
  }

  function button_reset(id){
        let list_do = document.getElementById("container");
        let button_reset = document.createElement("button");
        let button_clean = document.createElement("button");
        button_clean.classList.add('button');
        button_reset.classList.add("button");
        button_reset.innerHTML = "tirar feito"
        button_clean.innerHTML = 'excluir tarefa'
        button_clean.onclick = function(){
          let p = document.getElementById(id);
          let buttons = document.querySelectorAll(".button");
          for (let i = 1; i < 3; i++){
            buttons[i].remove()
          }
          p.remove()
        }
        button_reset.onclick = function(){
            let p = document.getElementById(id);
            p.classList.remove('animation')
      }
      list_do.appendChild(button_reset);
      list_do.appendChild(button_clean);
  }
  
  function do_list() {
    let p = document.getElementById(this.id);
    p.classList.add("animation");
  }
  
  function id_random() {
    return parseInt(Math.random() * 1000);
  }
