window.addEventListener('load',init);
var countDown;
function init(){
    countDown = autoGen();
    printCounter();
    updateCount();
    registerEvents();
    showHide();
}
function registerEvents(){
document.getElementById('add').addEventListener('click',addQuestion);
document.getElementById('remove').addEventListener('click',deleteQuestion);
document.getElementById("search").addEventListener('click',searchIt);
document.getElementById("sort").addEventListener("click",sortQuestions);

}
function updateCount(){
    document.querySelector('#total').innerText = questionoperations.questions.length;
    document.querySelector("#mark").innerText = questionoperations.countMark();
    document.querySelector("#unmark").innerText = questionoperations.questions.length-questionoperations.countMark();
}

const printCounter = () =>{
    console.log(countDown.next().value);

    document.querySelector("#id").innerText = countDown.next().value;
}

function createIcon(className,fn,id){
    console.log("inside create icon");
    var icon = document.createElement('i');
    icon.className = className;
    icon.setAttribute("qid" , id);
    icon.addEventListener("click" , fn);
    return icon;
}

function toggleRed(){
   
var id = this.getAttribute("qid");
console.log("Toggle Red Call ",this, 'Id is ',id);

var tr = this.parentNode.parentNode;
tr.classList.toggle('alert-danger');
questionoperations.toggleMark(id);
updateCount();
}

function edit(){
    console.log("edit calls");

}

const showHide=()=>
    document.querySelector("#sbox").classList.toggle('searchbox');


    function searchIt(){
        var val = document.querySelector('#searchValue').value;
        var key = document.querySelector('#searchby').value;
        if(key!='-1'){
                var subArr = questionoperations.search(key,val);
                console.log(subArr[0]);
                printQuestions(subArr);
        }
    }


function printQuestions(questions){
    document.querySelector('#questions').innerHTML = '';
    questions.forEach(printQuestion);
    updateCount();
}



function deleteQuestion(){
    questionoperations.remove();
    printQuestions(questionoperations.questions);
}

function printQuestion(questionObject){
    var tbody = document.querySelector('#questions');
    var tr = tbody.insertRow();
    var index = 0;
    for(let key in questionObject){

        if(key == 'markForDelete'){
            continue;
        }

        // if(key == 'id'){
        //     tr.insertCell(index).innerText = questionObject[key];
        // }
        if(key =='options'){
            let options = questionObject[key];
            for(let option of options){
                tr.insertCell(index).innerText = option;
                index++;
            }
            continue;
        }
        tr.insertCell(index).innerText =  questionObject[key];
        index++;
       
    }
    console.log("inside print function");
    var td = tr.insertCell(index);
    td.appendChild(createIcon('fas fa-trash mr-2 hand',toggleRed,questionObject.id)) ;
    td.appendChild(createIcon('fas fa-edit hand',edit,questionObject.id));

}

function addQuestion(){
    var questionObject = new Question();
    for(let key in questionObject){
   if(key == 'markForDelete'){
       continue;
   }
//    if(key == 'id'){
//        questionObject[key] = document.getElementById(key).innerText;
//        continue;
//    }
        if(key=='options'){
            let options = [];
            for(let i = 1; i<=4;i++){
                options.push(document.getElementById('option'+i).value);
            }
            questionObject[key] = options;
            continue;
        }
        questionObject[key] = document.getElementById(key).value;
    }
    questionoperations.add(questionObject);
    printQuestion(questionObject);
    updateCount();
    printCounter();
}


function sortQuestions(){
   
   
   
    
}