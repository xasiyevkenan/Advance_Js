const employeeDetails = {
  fullName: "Hilal Mammedov",
  position: "Front-end developer",
  yearsOfExperience: 5,
  skills: ["html", "css", "js", "react", "react native"],
  contact: {
    email: "hilalmammedov@gmail.com",
    phoneNumber: "0553433423",
  },
};

const personalInfo = {
  homeAdress: "Moscow Ave 3168",
  emergencyContact: "12313130",
  maritalStatus: "unmarried",
};

const completeEmployeeProfile = { ...employeeDetails, ...personalInfo };

delete employeeDetails["contact"].email;

employeeDetails["department"] = "mobile development";

const { fullName: employeeName, position, contact, ...rest } = employeeDetails;

console.log(completeEmployeeProfile);
console.log(employeeDetails);
console.log(employeeName);
console.log(contact);
console.log(position, rest);

//array

const projectScores = [
  { projectId: 1, score: 40 },
  { projectId: 2, score: 39 },
  { projectId: 3, score: 32 },
  { projectId: 4, score: 28 },
  { projectId: 5, score: 31 },
];

//method 1

console.log(
  `Project Id: ${projectScores[0].projectId},Project score:${projectScores[0].score}`
);

//method 2

console.log(
  `Project Id:${projectScores.at(0).projectId}, Project Score:${
    projectScores.at(0).score
  }`
);
