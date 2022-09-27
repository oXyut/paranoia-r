export default interface InfoTypes {
    CoreInformation: {
    name: string,
    clearance: string,
    sector: string,
    number: number,
    sex: string,
    personality: string[]
    },
    Development: {
        star: number,
        xp: number,
        Stats: {
            violence: number[],
            brains: number[],
            chutzpah: number[],
            mechanics: number[]
        }
    },
    Skills: {
        Violence: {
            athletics: number[],
            guns: number[],
            melee: number[],
            throw: number[]
        },
        Brains: {
            science: number[],
            psychology: number[],
            bureaucracy: number[],
            alpha_complex: number[]
        },
        Chutzpah: {
            bluff: number[],
            charm: number[],
            intimidate: number[],
            stealth: number[]
        },
        Mechanics: {
            operate: number[],
            engineer: number[],
            program: number[],
            demolitions: number[]
        }
    },
    Wellbeing: {
        moxie: number[],
        Wounds: {
            hurt: boolean,
            injured: boolean,
            maimed: boolean,
            dead: boolean
        },
        memory: string
    },
    Equipment: string[]
}