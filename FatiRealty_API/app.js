const http = require("http");
const express = require("express");
//const axios =   require("axios");
const path = require("path");
const morgan = require("morgan");
const timeout = require("connect-timeout");

const { PORT = 8081 } = process.env;
var bodyParser = require("body-parser");
const multer = require('multer');
var cors = require("cors");

// create express app, set up json parsing and logging
const app = express();
app.use(timeout("50s"));
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
const SignUpFrom = require("./models/SignUpFrom.js");
const TenantRegistration = require("./models/TenantRegistration.js");

// static assets directory
app.use(express.static(path.join(__dirname, "static")));
// router (homepage)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});


const storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    debugger
      cb(null, './uploads');
  },
  filename: (req, file, cb) => {
    debugger
      cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

/////////////////////////////////////SignUp/////////////////////////////////////////////////
app.post("/Post/SignUp", cors(), (req, res) => {
  var userName = req.body.userName;
  var password = req.body.password;
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var dateOfBirth = req.body.dateOfBirth;
  var email = req.body.email;
  var phone = req.body.phone;
  var action = 1;
  SignUpFrom.SignUp(userName, password,firstName, lastName,dateOfBirth,email,phone,action,(err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      return res.send(data);
    }
  });
});

app.post("/Post/Login", cors(), (req, res) => {
  const { userName, password } = req.body;
  SignUpFrom.Login(userName, password, (err, data) => {
      if (err) {
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          res.json(data);
      }
  });
});
/////////////////////////////////////SignUp Closed/////////////////////////////////////////

/////////////-------Tenant Registraion---////////////////////
// app.post('/Post/TenantRegApi', (req, res) => {
//   const tenantData = {
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       phoneNumber: req.body.phone,
//       email: req.body.email,
//       personalNotes: req.body.personalNotes || '',
//       userID: req.body.userID || 1,
//       workEmail: req.body.workEmail,
//       workLocation: req.body.workLocation || 'Default Location',
//       workNotes: req.body.workNotes || 'Default Notes',
//       fileName: req.body.fileName || 'Default FileName',
//       filePath: req.body.filePath || 'Default/FilePath',
//       documentNotes: req.body.documentNotes || 'Default Document Notes'
//   };

//   TenantRegistration.TenantRegApi(tenantData, (err, data) => {
//       if (err) {
//           res.status(500).send(err);
//       } else {
//           res.send(data);
//       }
//   });
// });



// POST endpoint for tenant registration
app.post('/Post/TenantRegApi', upload.single('documentFile'), async (req, res) => {
 
  const tenantData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phone,
      email: req.body.email,
      personalNotes: req.body.notes,
      userID: req.body.userID,
      workEmail: req.body.workEmail,
      workLocation: req.body.workLocation,
      workNotes: req.body.workNotes,
      ssnnumber: req.body.ssnnumber,
      fileName: req.file ? req.file.originalname : null,
      filePath: req.file ? req.file.path : null,
      documentsNotes: req.body.documentsNotes,
  };
console.log(tenantData)
  try {
      const result = await TenantRegistration.TenantRegApi(tenantData);
      res.status(200).json({ message: 'Tenant details inserted successfully', data: result });
  } catch (error) {
      console.error('Error inserting tenant details:', error);
      res.status(500).json({ error: 'Failed to insert tenant details' });
  }
});

/////////////---------tenant Reg Closed---///////////////////


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", (req, res) => {
  let data = req.body;
});

// create server
const server = http.createServer(app);
server.listen(PORT);
console.debug("...server listening on port " + PORT);
