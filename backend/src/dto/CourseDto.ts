export class CourseDto {
  constructor(
    public id_course: number,
    public name: string,
    public description: string | null,
    public status: boolean
  ) {}
}

export class CreateCourseDto {
  constructor(
    public name: string,
    public description?: string
  ) {}
}