export class Event {
  name!: string;
  type!: string;
  date!: Date;
  time!: Date;
  // backend type
  start_time!: Date;
  end_time!: Date;
  id!: number;
  image_path!: string;
  short_description!: string;
  title!: string;


  description!: string;
  constructor() {
  }
}
