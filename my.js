window.addEventListener('load', ()=>{
    const form= document.querySelector("#task-form");
    const input= document.querySelector("#task-input");
    const list= document.querySelector("#tasks");


    form.addEventListener('submit', (e)=>{
        e.preventDefault();

        const task = input.value;
        if (!task) {
            return;
        } 

        const task_div = document.createElement("div");
        task_div.classList.add("task");
        list.appendChild(task_div);


        const task_content_div = document.createElement("div");
        task_content_div.classList.add("content");
        task_div.appendChild(task_content_div);
   

        const task_input= document.createElement("input");
        task_input.classList.add("text");
        task_input.type = "text";
        task_input.value= task;
        task_input.setAttribute("readonly", "readonly");
        task_content_div.appendChild(task_input);


        const task_actions_div= document.createElement("div");
        task_actions_div.classList.add("actions");
        task_div.appendChild(task_actions_div);

        const delete_button= document.createElement("button");
        delete_button.classList.add("Delete");
        delete_button.innerHTML = "Delete";

        const completed_button= document.createElement("button");
        completed_button.classList.add("Completed");
        completed_button.innerHTML = "Completed";
        
        const pending_button= document.createElement("button");
        pending_button.classList.add("pending");
        pending_button.innerHTML = "Pending";

        task_actions_div.appendChild(completed_button);
        task_actions_div.appendChild(delete_button);
        task_actions_div.appendChild(pending_button);

        delete_button.addEventListener('click', ()=>{
            if (confirm("want to delete this task?")) {
                list.removeChild(task_div);
                
            }
        })
        
        completed_button.addEventListener('click', ()=>{
            
                task_input.style.textDecoration="line-through";
                task_input.setAttribute("readonly", "readonly");
               
        })

        pending_button.addEventListener('click', ()=>{
            
            task_input.style.textDecoration="underline";
            task_input.setAttribute("readonly", "readonly");
           
       })

       input.value = "";

    });
    
});
