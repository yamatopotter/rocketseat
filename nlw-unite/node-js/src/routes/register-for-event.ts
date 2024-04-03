import {FastifyInstance} from "fastify";
import {ZodTypeProvider} from "fastify-type-provider-zod";
import {z} from "zod";
import {prisma} from "../lib/prisma";

export async function registerForEvent(app: FastifyInstance) {
    app
        .withTypeProvider<ZodTypeProvider>()
        .post('/events/:eventPublicId/attendees', {
            schema: {
                body: z.object({
                    name: z.string().min(4),
                    email: z.string().email()
                }),
                params: z.object({
                    eventPublicId: z.string().uuid()
                }),
                response: {
                    201: z.object({
                        attendeeId: z.number()
                    })
                }
            }
        }, async (request, reply) => {
            const {eventPublicId} = request.params;
            const {name, email} = request.body;

            const attendeeFromEmail = await prisma.attendee.findUnique({
                where:{
                    eventPublicId_email:{
                        email,
                        eventPublicId
                    }
                }
            })

            if(attendeeFromEmail !== null){
                throw new Error ('This e-mail is already registered for this event')
            }

            const [event, amountOfAttendeesForEvent] = await Promise.all([
                prisma.event.findUnique({
                    where:{
                        public_id: eventPublicId
                    }
                }),

                prisma.attendee.count({
                    where:{
                        eventPublicId
                    }
                })
            ])

            if(event?.maximumAttendees && amountOfAttendeesForEvent >= event?.maximumAttendees){
                throw new Error("The maximum number of attendees for this event has been reached.")
            }

            const attendee = await prisma.attendee.create({
                data: {
                    name,
                    email,
                    eventPublicId
                }
            })

            return reply.status(201).send({attendeeId: attendee.id})
        })
}