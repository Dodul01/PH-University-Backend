import { academicSemesterNameCodeMapper } from './academicSemester.constent';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code.');
  }

  const result = await AcademicSemester.create(payload);

  return result;
};

export const academicSemesterServices = {
  createAcademicSemesterIntoDB,
};