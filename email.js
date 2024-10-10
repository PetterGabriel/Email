function sendEmail() {
    let sub = document.getElementById('topicField').value;
    let mess = document.getElementById('messageField').value;
    console.log(sub, mess);
    Email.send({
        SecureToken : "0605a0e3-7e97-49c2-bd85-004a0c9400f9",
        To : 'pettergabriel0@gmail.com',
        From : "pettergabriel0@gmail.com",
        Subject : sub,
        Body : mess
    }).then(
      message => alert(message)
    );
};