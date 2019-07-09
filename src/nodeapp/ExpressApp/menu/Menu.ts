export enum Location {
    About = 1,
    Blog = 2
}

export class Menu {
    public Active: Location;
    constructor(location: Location) {
        this.Active = location;
    }
}