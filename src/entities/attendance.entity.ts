export default class AttendanceEntity {
    constructor(
        id: string,
        attendanceDate: string,
        userId: number,
        prosecutionUnitId: number,
        areaId: number,
        prosecutorId: number,
        protocol: string,
        status: string,
        step: string,
        description: string,
        userName: string,
        userCPF: string,
        userRG: string,
        userPhoneNumber: string,
        prosecutionUnitCity: string,
        createdAt: string,
        removedAt: string
    ) {
        this.id = id
        this.attendanceDate = attendanceDate
        this.userId = userId
        this.prosecutionUnitId = prosecutionUnitId
        this.areaId = areaId
        this.prosecutorId = prosecutorId
        this.protocol = protocol
        this.status = status
        this.step = step
        this.description = description
        this.userName = userName
        this.userCPF = userCPF
        this.userRG = userRG
        this.userPhoneNumber = userPhoneNumber
        this.prosecutionUnitCity = prosecutionUnitCity
        this.createdAt = createdAt
        this.removedAt = removedAt
    }

    id: string
    attendanceDate: string
    userId: number
    prosecutionUnitId: number
    prosecutorId: number
    areaId: number
    protocol: string
    status: string
    step: string
    description: string
    userName: string
    userCPF: string
    userRG: string
    userPhoneNumber: string
    prosecutionUnitCity: string
    createdAt: string
    removedAt: string
}