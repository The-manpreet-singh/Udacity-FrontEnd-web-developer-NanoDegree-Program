function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })


    let data= {
        theText: formText
    };

    console.log(data);

   fetch('/testing', {
       method:"POST",
       body: JSON.stringify(data),
       headers: {"Content-Type": "application/json"}
   })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.text;
        //console.log(res);
    })

}

export { handleSubmit }
