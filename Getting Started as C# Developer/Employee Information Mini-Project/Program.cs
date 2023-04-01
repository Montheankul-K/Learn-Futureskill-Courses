using System;
using System.Linq;
using System.Collections.Generic;
namespace EmployeeInformation {
    class Program {
        static void Main(string[]args){
            IList<Employee> EmployeeList = new List<Employee> {
                new Employee(){EmployeeID = 1, EmployeeName = "Json William", EmployeeScore = 80, EmployeeStandardID = 4, EmployeePosition = "Software Engineer"},
                new Employee(){EmployeeID = 1, EmployeeName = "Json Snow", EmployeeScore = 56, EmployeeStandardID = 1, EmployeePosition = "Project Manager"},
                new Employee(){EmployeeID = 1, EmployeeName = "Will Jackson", EmployeeScore = 62, EmployeeStandardID = 2, EmployeePosition = "Software Engineer"},
                new Employee(){EmployeeID = 1, EmployeeName = "Snow Willson", EmployeeScore = 42, EmployeeStandardID = 0, EmployeePosition = "Mobile Developer"},
                new Employee(){EmployeeID = 1, EmployeeName = "James Harden", EmployeeScore = 86, EmployeeStandardID = 4, EmployeePosition = "System Analyst"},
                new Employee(){EmployeeID = 1, EmployeeName = "Victor Jacop", EmployeeScore = 38, EmployeeStandardID = 0, EmployeePosition = "Data Engineer"},
                new Employee(){EmployeeID = 1, EmployeeName = "Lebron James", EmployeeScore = 96, EmployeeStandardID = 4, EmployeePosition = "Data Engineer"},
                new Employee(){EmployeeID = 1, EmployeeName = "Antony Devis", EmployeeScore = 85, EmployeeStandardID = 4, EmployeePosition = "IOS Developer"},
            };

            IList<EmployeeStandard> EmployeeStandardList = new List<EmployeeStandard> {
                new EmployeeStandard(){EmployeeStandardID = 4, EmployeeStandardGrade = "A"},
                new EmployeeStandard(){EmployeeStandardID = 3, EmployeeStandardGrade = "B"},
                new EmployeeStandard(){EmployeeStandardID = 2, EmployeeStandardGrade = "C"},
                new EmployeeStandard(){EmployeeStandardID = 1, EmployeeStandardGrade = "D"},
                new EmployeeStandard(){EmployeeStandardID = 0, EmployeeStandardGrade = "F"},
            };

            var EmployeeSummaryInformation = EmployeeList.Join(
                EmployeeStandardList,
                EmployeeList => EmployeeList.EmployeeStandardID,
                EmployeeStandardList => EmployeeStandardList.EmployeeStandardID,
                (EmployeeList,EmployeeStandardList) => new {
                    EmployeeName = EmployeeList.EmployeeName,
                    EmployeeScore = EmployeeList.EmployeeScore,
                    EmployeeGrade = EmployeeStandardList.EmployeeStandardGrade,
                    EmployeePosition = EmployeeList.EmployeePosition
                } 
            );

            foreach(var Information in EmployeeSummaryInformation) {
                Console.WriteLine("Employee name : {0}, Employee score : {1}, Employee grade : {2}, Employee position : {3}", Information.EmployeeName, Information.EmployeeScore, Information.EmployeeGrade, Information.EmployeePosition);
            }
        }
    }
}
