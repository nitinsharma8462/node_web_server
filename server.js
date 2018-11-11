console.log("Server.js");

const express= require('express');
const port=process.env.PORT || 3000;
var app= express();

app.use(express.static(__dirname+"/public"))
app.get('/',(req, res)=>{
    res.send("Hello express");
});

app.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});


// git init
// ls -a
// git status

// git add file name

//git config user.name "nitin8462"
//git config user.email "nitin.sharma8462@gmail.com"
// git commit -m 'initial commit '
// ssh key gen
// ssh-keygen -t rsa -b 4096 -C 'nitin.sharma8462@gmail.com' (generate ssh key )
//ls -al ~/.ssh
// eval "$(ssh-agent -s)" (agent pid)

// ssh-add ~/.ssh/id_rsa
