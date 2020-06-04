function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Clinet.checkForName(formText)

    console.log("::: Form Submitted :::")

    // fetch('http://localhost:8080/test')
    // .then(res => res.json())
    // .then(function(res) {
    //     document.getElementById('results').innerHTML = res.message
    // })

   fetch('/testing', {
       method:"POST",
       body: JSON.stringify(reqBody),
       headers: {"Content-Type": "application/json"}
   })
    .then(res => res.json())
    .then(function(res) {
        console.log(res);
        document.getElementById('results').innerHTML = res.message
    })

}

export { handleSubmit }
