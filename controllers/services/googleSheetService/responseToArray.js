function responseToArrayService(responses, form){
    let values=[]
    values.push(["responderID"])
    let questions=form["questions"]
    let qcodes=[]
    questions.forEach(element => {
        values[0].push(element["text"])
        qcodes.push(element["qcode"])
    });
    let cnt=1;
    responses[0].forEach(element=>{
        values[cnt]=[element["responderID"]]
        qcodes.forEach(qcode=>{
            values[cnt].push(element["response"][""+qcode])
        })
        cnt++;
    })
    return values
}

exports.responseToArrayService=responseToArrayService;