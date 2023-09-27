export const STIS = [
    {
        id: 0,
        name: "HIV",
        aka: "other names",
        image: "cute picture",
        description: "damn this sucks//",
        single_instance_transmission_rate: "number",
        treatment: "info",
        for_life: true,
        sources: [
            {
            id: 0,
            publication: "journal",
            author: "author",
            date: "year",
            link: "url"
        } //repeat as necessary, update id - sql?
        ]
        //drug resistance?
    },
    {
        id: 1,
        name: "Chlamydia",
        aka: "other names",
        image: "cute picture",
        description: "damn this sucks//",
        single_instance_transmission_rate: "number",
        treatment: "info",
        for_life: false,
        sources: [
            {
            id: 0,
            publication: "journal",
            author: "author",
            date: "year",
            link: "url"
        } //repeat as necessary, update id - sql?
        ]
        //drug resistance
    }
];