import Admin from "../../staff/Admin";
import Student from "../../staff/Student";
import Teacher, { ApplicationStatus } from "../../staff/Teacher";
import AcademicTerm from "../AcademicTerm";
import AcademicYear from "../AcademicYear";
import ClassLevel from "../ClassLevel";
import Exam, { ExamStatus, ExamType } from "../Exam";
import ExamResult, { ExamRemarks, ExamResultStatus } from "../ExamResult";
import Program from "../Program";
import Question, { CorrectAnswer } from "../Question";
import Subject from "../Subject";
import YearGroup from "../YearGroup";

export const admin = new Admin(
  "firstname",
  "lastname",
  "email@email.com",
  "password"
);

export const academicTerm = new AcademicTerm(
  "academicTerm",
  "academicTerm",
  10,
  admin
);

export const program = new Program("name", "description", 10, "code", admin);

export const teacher = new Teacher(
  "firstname",
  "lastname",
  "email@email.com",
  "password",
  "id",
  false,
  false,
  ApplicationStatus.pending,
  new Program("name", "description", 10, "code", admin),
  new ClassLevel("name", "description", admin),
  new AcademicYear("name", new Date(), new Date(), true, admin),
  admin,
  academicTerm,
  new Subject("name", "descripiton", academicTerm, admin, 12)
);

export const question = new Question(
  "name",
  "a",
  "b",
  "c",
  "d",
  CorrectAnswer.optionA,
  true,
  teacher
);

export const subject = new Subject(
  "name",
  "descripiton",
  academicTerm,
  admin,
  12
);

export const student = new Student(
  "firstname",
  "lastname",
  "email@email.com",
  "password",
  "id",
  "current",
  new AcademicYear("name", new Date(), new Date(), true, admin),
  new Date(),
  program,
  false,
  false,
  false,
  false,
  false,
  false,
  "prefName",
  ""
);

export const yearGroup = new YearGroup(
  "name",
  "description",
  new AcademicYear("name", new Date(), new Date(), true, admin),
  [subject],
  [student],
  [teacher],
  admin
);

export const examResult = new ExamResult(
  student,
  "id",
  100,
  80,
  80,
  ExamResultStatus.failed,
  ExamRemarks.good,
  10,
  subject,
  new ClassLevel("name", "description", admin),
  academicTerm,
  new AcademicYear("name", new Date(), new Date(), true, admin),
  false
);

export const exam = new Exam(
  "name",
  "name",
  subject,
  program,
  80,
  100,
  academicTerm,
  10,
  new Date(),
  ExamType.quiz,
  ExamStatus.live,
  new ClassLevel("name", "description", admin),
  teacher,
  new AcademicYear("name", new Date(), new Date(), true, admin)
);

export const classLevel = new ClassLevel("name", "description", admin);

export const academicYear = new AcademicYear(
  "name",
  new Date(),
  new Date(),
  true,
  admin
);

console.log(academicYear);
