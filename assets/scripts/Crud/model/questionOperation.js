const questionoperations = {
    questions:[],
    
    add(questionObject){
        this.questions.push(questionObject);
        console.log("Added ",this.questions);
    },

    toggleMark(id){
        console.log("toggle mark calls");
        var questionObject = this.questions.find(question=>question.id==id);
        questionObject.markForDelete = !questionObject.markForDelete;
    },
    countMark(){
        return this.questions.filter(question=>question.markForDelete).length;
    },

    remove(){
        // for()
        // questionObject.markForDelete == true;
        // this.questions.pop();
        this.questions = this.questions.filter(question=> !question.markForDelete);

    },

    search(key,value){

        console.log('********Value is ',value);
        if(!value){
            return this.questions;
        }
       return  this.questions.filter(question=>question[key]==value);



    },

    sort(){
        // console.log("inside sort");
       
        //     return this.questions.sort(function(a,b){
        //                 var c = a.id-b.id;
        //     });
       

    },

    clearAll(){

    }
}