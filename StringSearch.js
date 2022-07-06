function searchString(sentence,word){
    let match = false;
    let count = 0;
    for(let i=0;i<sentence.length;i++){
        let temp = i;
        for(let j=0;j<word.length;j++){            
            if(sentence[i] === word[j]){
                match = true;
                i++;
            }
            else{
                match = false;
                break;
            }
        }
        if(match)
            count++;
        else
            i = temp;
    }
    console.log(count);
}

searchString("Hello this is a string","is a str");