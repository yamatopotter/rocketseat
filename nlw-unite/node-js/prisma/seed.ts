import {prisma} from "../src/lib/prisma";

async function seed() {
    await prisma.event.create({
        data: {
            id: 1,
            public_id: '90e054f1-2ea1-4bc6-b847-0e2f6fe1d8a4',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento para devs apaixonados por código!',
            maximumAttendees: 120
        }
    })
}

seed().then(() => {
    console.log(('Database seeded!'))
    prisma.$disconnect()
})