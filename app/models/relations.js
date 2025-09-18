import Employee from "./employee.js";
import Rank from "./rank.js";
import Project from "./project.js";

const db = {}

db.Employee = Employee
db.Rank = Rank
db.Project = Project

db.Employee.belongsTo(db.Rank)
db.Rank.hasMany(db.Employee)

db.Employee.belongsToMany(db.Project, { through: 'employee_project' });
db.Project.belongsToMany(db.Employee, { through: 'employee_project' });

export default db
