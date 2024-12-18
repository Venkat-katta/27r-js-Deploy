let studentname=prompt('Enter your name:');
let company=prompt("Enter your company:");
let domain=prompt('Enter your domain:');
let student={ name:studentname,
   companyname:company,
   package:"4.5lpa",
   domainname:domain,
   joiningdate:"20-12-2024"


};
alert(`${student.name} got placed in ${student.companyname} as a ${student.domainname} with package of ${student.package} and his joining date is on ${student.joiningdate}`);
