import Comment from './comment.entity'

export default class Prosecution {
    constructor(
        name: string,
        street: string,
        number: string,
        city: string,
        neighborhood: string,
        openingId: number,
        actionId: number,
        id: number,
        createdIn: string,
        removedIn: string,
        comments: Comment[]
    ) {
        this.name = name;
        this.street = street;
        this.number = number;
        this.city = city;
        this.neighborhood = neighborhood;
        this.openingId = openingId;
        this.actionId = actionId;
        this.id = id;
        this.createdIn = createdIn;
        this.removedIn = removedIn;
        this.comments = comments
    }

    name: string
    street: string
    number: string
    city: string
    neighborhood: string
    openingId: number
    actionId: number
    id: number
    createdIn: string
    removedIn: string
    comments: Comment[]
}