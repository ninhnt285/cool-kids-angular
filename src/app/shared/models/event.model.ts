export class Event {
  id?: number;
  name!: string;
  type!: string;
  date!: Date;
  time!: Date;
  description!: string;

  constructor() {}
}
